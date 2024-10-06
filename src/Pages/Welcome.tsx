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
          <h1>
            Redditch Tabletop Gamers
          </h1>
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