import './MainMenu.css';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
      <nav className="Menu">
        <ul>
          <li className="button-77"><Link to="/Meetings">Weekly Meetings</Link></li>
          <li className="button-77"><Link to="/Members">Club Members</Link></li>
          <li className="button-77"><Link to="/Reports">Reports</Link></li>
          <li className="button-77"><Link to="/Settings">Settings</Link></li>
        </ul>
      </nav>
    );
}

export default Menu;


