import { useState } from "react";
import './App.css';
import Title from "./Components/Logo/Logo";
import Menu from "./Components/MainMenu/MainMenu";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Meetings from './Pages/Meetings';
import Members from './Pages/Members';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import Charges from './Pages/Charges';
import DayOfWeek from './Pages/DayOfWeek';
import Games from './Pages/Games';

const App = () => {

  const [loading, setLoading] = useState(true)

  const handleChildClick = () => {
    setLoading(false);
  }

  if (loading) {
    return <Title onTitleClick={handleChildClick} />
  }
  else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/members" element={<Members />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/charges" element={<Charges />} />
          <Route path="/settings/games" element={<DayOfWeek />} />
          <Route path="/settings/games" element={<Games />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
