import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import dalletest1 from './assets/Dalle/dalletest1.png';
import dalletest2 from './assets/Dalle/dalletest2.png';
import dalletest3 from './assets/Dalle/dalletest3.png';
import dalletest4 from './assets/Dalle/dalletest4.png';
import dalletest5 from './assets/Dalle/dalletest5.png';
import dalletest6 from './assets/Dalle/dalletest6.png';
import dalletest7 from './assets/Dalle/dalletest7.png';


function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);


  const navigate = useNavigate();

  //create a route to navigate to to the next page
  const login = () => {
    navigate('/login');
  };

  const dashboard = () => {
    navigate('/dashboard');
  };

  /*
         <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
         <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
         <button onClick={() => setCounter(0)}>Reset</button>*/

  return (
    <div className="App">
      <header className="App-header">
        <p>Prueba Botones</p>



      </header>

      <div className='counter'>
        <button onClick={() => login()}>Ir al Login</button>
        <button onClick={() => dashboard()}>Ir al Dashboard</button>
      </div>
      <div className='App-logo'>
        <div className='imagenes'>
          <div className='imgvote'>
            <button onClick={() => setCounter1(counter1 + 1)} className='vote'><img src={dalletest1} alt='dalletest1' /></button>
            <h3>Imagen 1</h3>
            {counter1}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter2(counter2 + 1)} className='vote'><img src={dalletest2} alt='dalletest2' /></button>
            <h3>Imagen 2</h3>
            {counter2}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter3(counter3 + 1)} className='vote'><img src={dalletest3} alt='dalletest3' /></button>
            <h3>Imagen 3</h3>
            {counter3}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter4(counter4 + 1)} className='vote'><img src={dalletest4} alt='dalletest4' /></button>
            <h3>Imagen 4</h3>
            {counter4}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter5(counter5 + 1)} className='vote'><img src={dalletest5} alt='dalletest5' /></button>
            <h3>Imagen 5</h3>
            {counter5}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter6(counter6 + 1)} className='vote'><img src={dalletest6} alt='dalletest6' /></button>
            <h3>Imagen 6</h3>
            {counter6}
          </div>
          <div className='imgvote'>
            <button onClick={() => setCounter7(counter7 + 1)} className='vote'><img src={dalletest7} alt='dalletest7' /></button>
            <div className='imgvote2'>
              <h3>Imagen 7</h3>
              {counter7}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;