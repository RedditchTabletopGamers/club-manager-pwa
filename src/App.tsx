import React, { useEffect, useState } from 'react';
import logo from './red-dice.png';
import './App.css';

function App() {
  const [appId, setAppId] = useState('');

  useEffect(() => {
    const fetchManifest = async () => {
      try {
        const response = await fetch('manifest.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log(await response.text());

        const manifest = await response.json();
        setAppId(manifest.id);
      } catch (error) {
        console.error('Failed to fetch manifest:', error);
      }
    };

    fetchManifest();
  }, []);

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
        <p>{appId}</p>
      </header>
    </div>
  );
}

export default App;
