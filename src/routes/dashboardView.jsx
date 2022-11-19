import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dalletest1 from '../assets/Dalle/dalletest1.png';
import dalletest2 from '../assets/Dalle/dalletest2.png';
import dalletest3 from '../assets/Dalle/dalletest3.png';
import dalletest4 from '../assets/Dalle/dalletest4.png';
import dalletest5 from '../assets/Dalle/dalletest5.png';
import dalletest6 from '../assets/Dalle/dalletest6.png';
import dalletest7 from '../assets/Dalle/dalletest7.png';
import AuthProvider from '../components/authProvider';
import DashboardWrapper from '../components/dashboardWrapper';


/* this is a test to imagine the dashboard */

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  function handleUserLoggedIn (user){
    setCurrentUser(user);
    setState(2);
  }

  function handleUserNotRegistred (user){
    navigate('/login');
  }

  function handleUserNotLoggedIn(){
    navigate('/login')

  }

  if(state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistred={handleUserNotRegistred}
      >
        Loading...
      </AuthProvider>
    );
  }


  return (
    <div className="dashboardContainer">
      <DashboardWrapper></DashboardWrapper>
      <div className="dashboardSider">
        <h1>LarnU</h1>
        <h2>Dashboard</h2> 
        <h2>Push</h2>
      </div> 
      <div className="dashboardView">
        <img src={dalletest1} alt="dalletest1" />
        <img src={dalletest2} alt="dalletest2" />
        <img src={dalletest3} alt="dalletest3" />
        <img src={dalletest4} alt="dalletest4" />
        <img src={dalletest5} alt="dalletest5" />
        <img src={dalletest6} alt="dalletest6" />
        <img src={dalletest7} alt="dalletest7" />
      </div>
    </div>
  );
}
