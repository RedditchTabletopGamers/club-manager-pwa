import React from 'react';
import Logo from '../Components/Logo/Logo'
import packageInfo from '../../package.json';

const Welcome = () => {
  return (
    <>
      <div className="Welcome">
        <header className="Welcome-header">
          <a href="/Home">
            <Logo />
          </a>
            <div className="Welcome-logo-text">
              <span className="Welcome-logo-text-red">Redditch</span> <span className="Welcome-logo-text-white">Tabletop</span> <span className="Welcome-logo-text-red">Gamers</span>
            </div>
          <h2>
            Club Manager
          </h2>
          <p>Version {packageInfo.version}</p>
        </header>
      </div>
    </>
  );
};

export default Welcome;