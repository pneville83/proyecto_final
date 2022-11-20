import {  getAuth, onAuthStateChanged } from "firebase/auth";
import {  app, auth, getUserInfo, registerNewUser, userExist } from "../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Component to handle the authentication of the user */
export default function AuthProvider ({children, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistred}) {
  const navigate = useNavigate();
  const auth1= getAuth(app);

/* Use effect to check if the user is logged in */  
  useEffect (()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
/* using the user as a parameter to knows if is regitered using userExist */
        const isRegistred = await userExist(user.uid);
        if (isRegistred) {
/* if the user is registred, get the user info and pass it to the onUserLoggedIn function */
          const userInfo = await getUserInfo(user.uid);
          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo);
          } else {
/* if the user is not registred, pass the user to the onUserNotRegistred function */            
            onUserNotRegistred(userInfo);
          }
        } else {
// allow the user to register          
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName || user.email,
            username: '',
            processCompleted: false,
          });
          onUserNotRegistred(user);
        } 
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotRegistred, onUserNotLoggedIn, auth1]);
  return <div>{children}</div>
}