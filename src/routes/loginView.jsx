import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
import {  auth } from "../firebase/firebase";
// import { useFirebaseApp } from "reactfire";
import 'firebase/auth';

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

  // const [email, setEmail] = useState ('');
  // const [password, setPassword] = useState ('');

  // const firebase = useFirebaseApp();

  // const submit = async()=>{
  //   await firebase.auth().createUserWithEmailAndPassword(email,password);
  // }


  return(
    <div>
      <div>
        {/* <label>Correo Electrónico</label>
        <input 
          type='email' 
          id="email" 
          placeholder="Tu correo electrónico"
          onChange={(e)=> setEmail(e.target.value)}> 
        </input>
        <label>Contraseña</label>
        <input 
          type='password' 
          id='password'
          onChange={(e)=> setPassword(e.target.value)}>
        </input>
        <button onClick={submit}>Ingresar</button> */}
        <button onClick={handleOnClick}>Login wiht Google</button>
      </div>
    </div>
  );
}