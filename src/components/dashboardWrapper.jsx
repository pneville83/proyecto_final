import { Link } from "react-router-dom";


/* Component to sing out the user */
export default function DashboardWrapper ({children}) {
  return (
    <div  className="signOut">
      <nav>
        <Link  to="/signout"><h2> Sign Out </h2></Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}