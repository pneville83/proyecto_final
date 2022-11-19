import { Link } from "react-router-dom";


export default function DashboardWrapper ({children}) {

  return (
    <div>
      <nav>
      {/* cargar un logotipo de larnu */}
        <div>Logotipo</div>
        <Link to="/signout">SignOut</Link>
      </nav>
      <div>{children}</div>
    </div>
  );


}