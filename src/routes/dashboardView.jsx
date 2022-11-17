import dalletest1 from '../assets/Dalle/dalletest1.png';
import dalletest2 from '../assets/Dalle/dalletest2.png';
import dalletest3 from '../assets/Dalle/dalletest3.png';
import dalletest4 from '../assets/Dalle/dalletest4.png';
import dalletest5 from '../assets/Dalle/dalletest5.png';
import dalletest6 from '../assets/Dalle/dalletest6.png';
import dalletest7 from '../assets/Dalle/dalletest7.png';


/* this is a test to imagine the dashboard */

export default function dashboard() {
  return (
    <div className="dashboardContainer">
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
