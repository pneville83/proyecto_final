import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import { logout } from "../firebase/firebase";

/* Component to sing out the user */
export default function SignOutView () {
  const navigate = useNavigate();

  

  /* Function to sign out the user and navigate to the login page */
  async function handleUserLoggedIn (user){
    await logout();
    navigate ('/');
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  /* If the user is not registered in, navigate to the login page */
  function handleUserNotRegistred(user){
    navigate('/login');
  }

  /* If the user is not logged in, navigate to the login page */
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