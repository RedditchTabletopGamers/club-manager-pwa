import './MainMenu.css';
import MenuOption from '../MenuOption/MenuOption';

const Menu = () => {

  return (
      <nav className="Menu">
        <div className="Title">Main Menu</div>
        <div className="container">
          <div className="row">
              <MenuOption caption="Collect Subs" target="/CollectSubs" />
              <MenuOption caption="Members" target="/CollectSubs" />
          </div>
          <div className="row">
            <MenuOption caption="Data" target="/CollectSubs" />
            <MenuOption caption="Settings" target="/CollectSubs" />
          </div>
          <div className="row">
            <MenuOption caption="Ad Hoc Payment" target="/CollectSubs" />
            <MenuOption caption="Link 1" target="/CollectSubs" />
          </div>
      </div>
      </nav>
    );
}

export default Menu;


