import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import CollectSubs from './Pages/CollectSubs';
import Members from './Pages/Members';
import Reports from './Pages/Data';
import Settings from './Pages/Settings';
import Charges from './Pages/Charges';
import DayOfWeek from './Pages/DayOfWeek';
import Games from './Pages/Games';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collectsubs" element={<CollectSubs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/data" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/charges" element={<Charges />} />
          <Route path="/settings/dayofweek" element={<DayOfWeek />} />
          <Route path="/settings/games" element={<Games />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
