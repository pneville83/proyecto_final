import { useEffect } from "react";
import ReactGa from 'react-ga'
import { useNavigate } from "react-router-dom";



/* Push View */
export default function PushView() {
  const navigate = useNavigate();

  useEffect (()=>{
    ReactGa.pageview(window.location.pathname)
  }, []);

  const returnDashboard = () => {
    ReactGa.event({'category': 'click return dashboard', 'action': 'click', 'label': 'label'});
    navigate('/Dashboard')
  };

  const returnHome = () => {
    ReactGa.event({'category': 'return to home', 'action': 'click', 'label': 'label'});
    navigate('/')
  };


  return (
    <div>
      <h1>Push</h1>
      <button onClick={returnDashboard}>Regresa a Dashboard</button>
      <button onClick={returnHome}>Regresa a Home</button>
    </div>
  );
}
