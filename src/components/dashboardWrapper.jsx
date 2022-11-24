import { Link } from "react-router-dom";
import ReactGa from "react-ga";
import Iframe from "react-iframe";

/* Component to sing out the user */
export default function DashboardWrapper({ children }) {
  ReactGa.event({ category: "click signOut", action: "click", label: "label" });
  return (
    <div className="signOut">
      <nav>
        <Link to="/signout">
          <h2> Sign Out </h2>
        </Link>
      </nav>
      <div>{children}</div>
    
    </div>
  );
}
