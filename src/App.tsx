import React from 'react';
import packageInfo from '../package.json';
import logo from './red-dice.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
