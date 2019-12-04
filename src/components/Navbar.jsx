import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {useLocalStorage} from  '../hooks/useLocalStorage';
import {Link} from 'react-router-dom';

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
      <Link exact to='/'><button>Home</button></Link>
      <Link to='/details'><button>Coin Details</button></Link>
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
