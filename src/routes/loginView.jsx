import {GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,} from "firebase/auth";
import { app, auth } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import logo from "../assets/logo.svg";
import Google from "../assets/Google.png";
import ReactGa from 'react-ga';

/* Component to display the login page */
export default function LoginView() {

  useEffect (()=>{
    ReactGa.pageview(window.location.pathname)
  }, []);


  /* Set up state and assign navigate function */
  const [state, setCurrentState] = useState(0);
  const navigate = useNavigate();

  /* Create and obj called googleProvider and await for the signInWithGoogle() */
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
    /* Create a function to signWithGoogle and await for the auth from google */
    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  /* this variablei allow to change the state of the login form */
  const auth1 = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Allow the user to sign up with email and password */
  const signUp = () => {
    createUserWithEmailAndPassword(auth1, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Usuario creado satisfactoriamente");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  /* Allow the user to sign in with email and password */
  const signIn = () => {
    signInWithEmailAndPassword(auth1, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        alert("Login sastifactorio");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  /* when hagglerUserLoggedIn is true, navigate to the dashboard */
  function handleUserLoggedIn(user) {
    navigate("/dashboard");
  }

  /* when handleUserNotResgistered is true, navigate to the register page */
  function handleUserNotRegistred(user) {
    navigate("/choose-username");
  }

  /* when handleUserNotLoggedIn is true, display the login page */
  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }

  /* If state === 4 Display the input to login */
  if (state === 4) {
    return (
      <div>
        <div className="loginForm">
          <img className="logo" src={logo} alt="logo"></img>
          <input
            className="email"
            type="email"
            id="email"
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="buttons">
            <button className="singUpAcount" onClick={signUp}>
              Crer Cuenta
            </button>
            <button className="singInAcount" onClick={signIn}>
              Acceder
            </button>
          </div>
          <button className="googleSingUpAcount" onClick={handleOnClick}>
            <img className="googleLogo" src={Google} alt="googleLogo"></img>
          </button>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistred={handleUserNotRegistred}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div>Loading....</div>
    </AuthProvider>
  );
}
