import React, { useEffect, useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {useLocalStorage} from  '../hooks/useLocalStorage'

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage('toggle', false);
  useDarkMode(darkMode);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
