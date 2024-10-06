import './MainMenu.css';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
      <nav className="Menu">
        <div className="Title">Main Menu</div>
        <ul>
          <li className="button-77"><Link to="/CollectSubs">Collect Subs</Link></li>
          <li className="button-77"><Link to="/Members">Club Members</Link></li>
          <li className="button-77"><Link to="/Data">Data</Link></li>
          <li className="button-77"><Link to="/Settings">Settings</Link></li>
        </ul>
      </nav>
    );
}

export default Menu;


