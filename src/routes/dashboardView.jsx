import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import AuthProvider from "../components/authProvider";
import DashboardWrapper from "../components/dashboardWrapper";
import dashLogo from "../assets/dashboard.png";
import pushLogo from "../assets/paper-plane.png";
import ReactGa from 'react-ga';
import Iframe from "react-iframe";

/* Component to display the dashboard page */
export default function Dashboard() {

  useEffect (()=>{
    ReactGa.pageview(window.location.pathname)
  }, []);



  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  /* When the user is logged in navigate to the dashboard */
  function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
  }

  /* Logeado without register */
  function handleUserNotRegistred(user) {
    navigate("/login");
  }

  /* if user is not logged in, navigate to the login page */
  function handleUserNotLoggedIn() {
    navigate("/login");
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistred={handleUserNotRegistred}>
        <div className="loading">Loading...</div>
      </AuthProvider>
    );
  }

/* This function allow to change to Push View */
/*Note: This function is not used in this version of the app*/  
   const handleOnClick =() => {
    ReactGa.event({'category': 'click push', 'action': 'click', 'label': 'label'});
    navigate("/push-view");
  }
/* This function allow to change to the dashboard */
  const handleOnClick2 =() => {
    ReactGa.event({'category': 'click home', 'action': 'click', 'label': 'label'});
    navigate("/");
  }

  return (
    <div className="dashboardContainer">
      <div className="dashboardSider">
      <img className="logo" src={logo} alt="logo"></img>
      <div className="dashboardSiderNav">
        <div className="dashboardSiderButtons1">
        <a className="dashboardSiderItem" onClick={handleOnClick2}><img className="dashLogo" src={dashLogo} alt="dashLogo"/>Home</a>
        </div>
        <div className="dashboardSiderButtons2">
        <a className="dashboardSiderItem" onClick={handleOnClick}><img className="pushLogo" src={pushLogo} alt="pushLogo"/>Push</a>
        </div>
      </div>
        <DashboardWrapper />
      </div>
      <div className="dashboardView">
        <Iframe className="iframe"
          width="100%"
  
          src="https://datastudio.google.com/embed/reporting/201e21d7-2005-44cb-8d09-e6b0827521db/page/1M"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></Iframe>
      </div>
    </div>
  );
}
