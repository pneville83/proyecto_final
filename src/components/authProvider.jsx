import {  onAuthStateChanged   } from "firebase/auth";
import {  auth, getUserInfo, registerNewUser, userExist } from "../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthProvider ({children, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistred}) {
  const navigate = useNavigate();

  useEffect (()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
        const isRegistred = await userExist(user.uid);
        if (isRegistred) {
          const userInfo = await getUserInfo(user.uid);
          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo);
          } else {
            onUserNotRegistred(userInfo);
          }
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName || user.dispplayEmail,
            username: '',
            processCompleted: false,
          });
          onUserNotRegistred(user);
        } 
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotRegistred, onUserNotLoggedIn]);
  return <div>{children}</div>
}