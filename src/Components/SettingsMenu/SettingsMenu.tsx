import './SettingsMenu.css';
import { Link } from 'react-router-dom';

const SettingsMenu = () => {

  return (
      <nav className="Menu">
        <ul>
          <li className="button-77"><Link to="/Settings/Charges">Weekly Charges</Link></li>
          <li className="button-77"><Link to="/Settings/DayOfWeek">Meeting Day</Link></li>
          <li className="button-77"><Link to="/Settings/Games">Game List</Link></li>
        </ul>
      </nav>
    );
}

export default SettingsMenu;


