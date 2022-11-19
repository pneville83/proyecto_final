import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import { logout } from "../firebase/firebase";


export default function SignOutView () {
  const navigate = useNavigate();
  

  async function handleUserLoggedIn (user){
    await logout();
    navigate ('/');
  }

  function handleUserNotRegistred(user){
    navigate('/login');
  }

  function handleUserNotLoggedIn() {
    navigate('/login');
  }



  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      onUserNotRegistred={handleUserNotRegistred}
    ></AuthProvider>
  );
}