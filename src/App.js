import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import dalletest1 from './assets/Dalle/dalletest1.png';
import dalletest2 from './assets/Dalle/dalletest2.png';
import dalletest3 from './assets/Dalle/dalletest3.png';
import dalletest4 from './assets/Dalle/dalletest4.png';
import dalletest5 from './assets/Dalle/dalletest5.png';
import dalletest6 from './assets/Dalle/dalletest6.png';
import dalletest7 from './assets/Dalle/dalletest7.png';
import ReactGa from 'react-ga';


const TRACKING_ID= process.env.REACT_APP_TRACKING_CODE;
ReactGa.initialize(TRACKING_ID)


function App() {

  useEffect(() => {
    ReactGa.pageview(window.location.pathname)
  }, []);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);


  const clickPicture1 = ()=> {
    ReactGa.event ({'category': 'click foto 1', 'action': 'click', 'label': 'label' });
    setCounter1 (counter1 + 1);
  }

  const clickPicture2 = ()=> {
    ReactGa.event ({'category': 'click foto 2', 'action': 'click', 'label': 'label' });
    setCounter2 (counter2 + 1);
  }

  const clickPicture3 = ()=> {
    ReactGa.event ({'category': 'click foto 3', 'action': 'click', 'label': 'label' });
    setCounter3 (counter3 + 1);
  }

  const clickPicture4 = ()=> {
    ReactGa.event ({'category': 'click foto 4', 'action': 'click', 'label': 'label' });
    setCounter4 (counter4 + 1);
  }

  const clickPicture5 = ()=> {
    ReactGa.event ({'category': 'click foto 5', 'action': 'click', 'label': 'label' });
    setCounter5 (counter5 + 1);
  }

  const clickPicture6 = ()=> {
    ReactGa.event ({'category': 'click foto 6', 'action': 'click', 'label': 'label' });
    setCounter6 (counter6 + 1);
  }

  const clickPicture7 = ()=> {
    ReactGa.event ({'category': 'click foto 7', 'action': 'click', 'label': 'label' });
    setCounter7 (counter7 + 1);
  }


  const navigate = useNavigate();

  //create a route to navigate to to the next page
  const login = () => {
    ReactGa.event({ 'category': 'click login', 'action': 'click', 'label': 'label' });
    navigate('/login');
  };

  const dashboard = () => {
    ReactGa.event({ 'category': 'click dashboard', 'action': 'click', 'label': 'label' });
    navigate('/dashboard');
  };

  /*
  const clickPicture1 = ()=> {
  ReactGa.event ({'category': 'click foto 1', 'action': 'click', 'label': 'label' });
  setCounter1 (counter1 + 1);
}*/



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

          
            <img src={dalletest1} alt="dalletest1" className='vote' onClick={() => clickPicture1()} />
            <h3>Imagen 1</h3>
            {counter1}
          </div>
          <div className='imgvote'>
            <img src={dalletest2} alt="dalletest2" className='vote' onClick={() => clickPicture2()} />
            <h3>Imagen 2</h3>
            {counter2}
          </div>
          <div className='imgvote'>
            <img src={dalletest3} alt="dalletest3" className='vote' onClick={() => clickPicture3()} />
            <h3>Imagen 3</h3>
            {counter3}
          </div>
          <div className='imgvote'>
            <img src={dalletest4} alt="dalletest4"className='vote' onClick={() => clickPicture4()} />
            <h3>Imagen 4</h3>
            {counter4}
          </div>
          <div className='imgvote'>
            <img src={dalletest5} alt="dalletest5" className='vote' onClick={() => clickPicture5()} />
            <h3>Imagen 5</h3>
            {counter5}
          </div>
          <div className='imgvote'>
            <img src={dalletest6} alt="dalletest6"className='vote' onClick={() => clickPicture6()} />
            <h3>Imagen 6</h3>
            {counter6}
          </div>
          <div className='imgvote'>
            <img src={dalletest7} alt="dalletest7" className='vote' onClick={() => clickPicture7()} />  
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