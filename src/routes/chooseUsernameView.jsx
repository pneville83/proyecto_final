import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import { existsUsername, updateUser } from "../firebase/firebase";
import ReactGa from 'react-ga';

/* Component to choose a username */
export default function ChooseUsernameView () {

  useEffect (()=>{
    ReactGa.pageview(window.location.pathname)
  }, []);
  
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');

  /* When the user is logged in navigate to the dashboard */
  function handleUserLoggedIn(user) {
    navigate('/dashboard');
  }

  /*When user add a username navigate to dashboard*/
  function success() {
    navigate('/dashboard');
  }

  /* Logeado without register */
  function handleUserNotRegistred(user) {
    setCurrentUser(user);
    setState(3);
  }

  /* if user is not logged in, navigate to the login page */
  function handleUserNotLoggedIn() {
    navigate('/login')
  }

  /* Allow the user to choose a username */
  function handleInputUsername(e) {
    setUsername(e.target.value);
  }

  /*Check if the username is available */
  async function handleContinue() {
    if (username !== '') {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = {...currentUser};
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);
      }
    }
  } 
  
 /* Render the choose username page to select a username*/
  if (state === 3 || state === 5) {
    return (
      <div className="chooseUserName">
        <h1>Bienvenido {currentUser.displayName || currentUser.email} </h1>
        <p>Para Terminar el proceso elige un nombre de Usuario</p>
        {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ''}
        <div>
          <input className="choooseUserName_input" type='text' onInput={handleInputUsername}>
          </input>
        </div>
        <div>
          <button onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    );
  }

  /* if state === 6, display the success message and navigate to the dashboard*/
  if (state === 6) {
    return (
      <div className="chooseUserName">
        <h1>¡Bienvenido {currentUser.displayName || currentUser.email}!</h1>
        <p>El proceso de registro ha finalizado con éxito</p>
        <Navigate to="/dashboard" replace={true} />
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistred={handleUserNotRegistred}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    ></AuthProvider>
  );
}