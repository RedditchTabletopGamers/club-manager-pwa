import { useState } from "react";
import './App.css';
import Title from "./Components/Title/Title";
import Menu from "./Components/Menu/Menu";

const App: React.FC = () => {

  const [loading, setLoading] = useState(true)

  const handleChildClick = () => {
    setLoading(false);
  }

  if (loading) {
    return <Title onTitleClick={handleChildClick} />
  }
  else {
    return <Menu/>
  }
}

export default App;
