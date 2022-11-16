import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider";
import { existsUsername, updateUser } from "../firebase/firebase";


export default function ChooseUsernameView () {

  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState('');

  function handleUserLoggedIn(user) {
    navigate('/dashboard');
  }

  function handleUserNotRegistred(user) {
    setCurrentUser(user);
    setState(3);
  }

  function handleUserNotLoggedIn() {
    navigate('/login')
  }

  function handleInputUsername(e) {
    setUsername(e.target.value);

  }

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

  if (state === 3 || state === 5) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName || currentUser.email} </h1>
        <p>Para Terminar el proceso elige un nombre de Usuario</p>
        {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ''}
        <div>
          <input type='text' onInput={handleInputUsername}>
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

  if (state === 6) {
    return (
      <div>
        <h1>Felicitaciones ya puedes ir al Dashboard</h1>
        <Link to='/dashboard'>Continuar</Link>
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