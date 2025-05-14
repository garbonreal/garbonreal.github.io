import React, { useEffect, useState } from 'react';
import lightIcon from '../../public/images/daytime.svg';
import darkIcon from '../../public/images/night.svg';


const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // Set default theme to 'light'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  useEffect(() => {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      if (theme === 'dark') {
        themeLink.href = '../../src/App.css'; // Use string path
        document.body.classList.remove('light-mode');
      } else {
        themeLink.href = '../../src/App.css'; // Use string path
        document.body.classList.add('light-mode');
      }
    } else {
      console.error("Theme link element not found");
    }
  }, [theme]);


  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <img
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeSwitcher;