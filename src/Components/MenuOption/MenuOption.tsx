import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuOption.css';

interface MenuOptionProps {
  caption: string;
  target: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ caption, target }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(target);
  };

  return (
    <div className="circle-link" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {caption}
    </div>
  );
};

export default MenuOption;
