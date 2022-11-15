import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app, auth } from "../firebase/firebase";
import "firebase/auth";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Google from "../assets/Google.png";

/* Sing in with Google */
export default function LoginView() {
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  /* Await for the user to sign in with Google */
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  const auth1 = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* Sign in with email and password */
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

  const signIn = () => {
    signInWithEmailAndPassword(auth1, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Login sastifactorio");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <div className="loginForm">
        <img className="logo" src={logo} alt="logo"></img>
        <input
          className="email"
          type="email"
          id="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="password"
          type="password"
          id="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="singUpAcount" onClick={signUp}>
            Crear Cuenta
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
