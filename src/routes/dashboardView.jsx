import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import AuthProvider from "../components/authProvider";
import DashboardWrapper from "../components/dashboardWrapper";
import PushView from "./pushView";
import dashLogo from "../assets/dashboard.png";
import pushLogo from "../assets/paper-plane.png";

/* Component to display the dashboard page */
export default function Dashboard() {
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
  function handleOnClick() {
    navigate("/pushView");
  }
/* This function allow to change to the dashboard */
  function handleOnClick2() {
    navigate("/dashboard");
  }

  return (
    <div className="dashboardContainer">
      <div className="dashboardSider">
      <img className="logo" src={logo} alt="logo"></img>
      <div className="dashboardSiderNav">
        <div className="dashboardSiderButtons1">
        <a className="dashboardSiderItem" onClick={handleOnClick2}><img className="dashLogo" src={dashLogo} alt="dashLogo"/>Dashboard</a>
        </div>
        <div className="dashboardSiderButtons2">
        <a className="dashboardSiderItem" onClick={handleOnClick}><img className="pushLogo" src={pushLogo} alt="pushLogo"/>Push</a>
        </div>
      </div>
        <DashboardWrapper />
      </div>
      <div className="dashboardView">
        <iframe
          className="iframe"
          src="https://datastudio.google.com/embed/reporting/201e21d7-2005-44cb-8d09-e6b0827521db/page/1M"
          title="iframeGoogle"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
}
