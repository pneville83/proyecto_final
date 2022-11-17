import React, { useState } from 'react';
import './App.css';
import Trial from './assets/Trial.jpg';
import { useNavigate } from 'react-router-dom';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  //create a route to navigate to to the next page
  const login = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Prueba Botones</p>
        <button onClick={() => login()}>Ir al Login</button>
        
        <p>Contador: {counter}</p>
        <p>Hello: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />

      </header>
      <div className='counter'>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <div className='App-logo'>
        <div className='imagenes'>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
          <a href='https://www.google.com'><img src={Trial} alt='trial' /></a>
        </div>
      </div>
    </div>
  );
}

export default App;