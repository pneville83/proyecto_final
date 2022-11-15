import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword   } from "firebase/auth";
import {  app, auth } from "../firebase/firebase";
import 'firebase/auth';
import { useState } from "react";

export default function LoginView () {

  async function handleOnClick () {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);

    }
  }

  const auth1 = getAuth(app);

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const signUp = () =>{

    createUserWithEmailAndPassword(auth1, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
        alert('Usuario creado satisfactoriamente')
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message
        alert(errorMessage, errorCode)
      });

  }

  const signIn = ()=> {
    signInWithEmailAndPassword(auth1, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
        alert('Login sastifactorio')
      })
      .catch((error)=>{
         const errorCode = error.code
         const errorMessage = error.message
         alert(errorMessage, errorCode)
      })

  }

  return(
    <div>
      <div className="loginForm">
        <input className="email"
          type='email' 
          id="email" 
          placeholder="Correo electrónico"
          onChange={(e)=> setEmail(e.target.value)}
          > 
        </input>
        <input className="password"
          type='password' 
          id='password'
          placeholder="Contraseña"
          onChange={(e)=> setPassword(e.target.value)}
          >
        </input>
        <button className="singUpAcount" onClick={signUp}>Crer Cuenta</button>
        <button className="singInAcount" onClick={signIn}>Acceder</button>
        <button className="googleSingUpAcount" onClick={handleOnClick}>Login wiht Google</button>
      </div>
    </div>
  );
}