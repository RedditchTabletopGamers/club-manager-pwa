import logo from '../../red-dice.png';
import packageInfo from '../../../package.json';
import './Title.css';

interface ChildProps {
  onTitleClick: () => void; // Define the prop type
}
const Title: React.FC<ChildProps> = ({onTitleClick}) => {

  return (
      <div className="Title" onClick={onTitleClick}>
        <header className="Title-header">
        <img src={logo} className="Title-logo" alt="logo" />
        <h1>
            Redditch Tabletop Gamers
          </h1>
          <h2>
            Club Manager
          </h2>
          <p>Version {packageInfo.version}</p>
        </header>
      </div>
    );
}

export default Title;


