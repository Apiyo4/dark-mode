import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  useEffect(()=>{
    if(darkMode === true){
      document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])
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
