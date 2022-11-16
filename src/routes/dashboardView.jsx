import Trial from "../assets/Trial.jpg";

export default function () {
  return (
    <div className="dashboardContainer">
      <div className="dashboardSider">
        <h1>LarnU</h1>
        <h2>Dashboard</h2>
        <h2>Push</h2>
      </div>
      <div className="dashboardView">
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
        <img className="Trial" src={Trial} alt="trial" />
      </div>
    </div>
  );
}
