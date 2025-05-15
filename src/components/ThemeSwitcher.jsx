import React, { useEffect, useState } from 'react';
import lightIcon from '/src/assets/daytime.svg';
import darkIcon from '/src/assets/night.svg';


const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
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