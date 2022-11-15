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
      <div>
        <label>Correo Electrónico</label>
        <input 
          type='email' 
          id="email" 
          placeholder="Tu correo electrónico"
          onChange={(e)=> setEmail(e.target.value)}
          > 
        </input>
        <label>Contraseña</label>
        <input 
          type='password' 
          id='password'
          onChange={(e)=> setPassword(e.target.value)}
          >
        </input>
        <button onClick={signUp}>Crer Cuenta</button>
        <button onClick={signIn}>Acceder</button>
        <button onClick={handleOnClick}>Login wiht Google</button>
      </div>
    </div>
  );
}