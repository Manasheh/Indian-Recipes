import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState(0);
  const [settings, setSettings] = useState({
    '--background-color': '#ffffff',
    '--background-light': '#ffffff',
    '--primary-color': 'rgb(255, 0, 86)',
    '--shadow-color': 'rgba(0, 0, 0, 0.2)',
    '--text-color': '#0A0A0A',
    '--text-light': '#575757',
  });

  const themes = [
    {
      '--background-color': '#ffffff',
      '--background-light': 'white',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': '#0A0A0A',
      '--text-light': '#575757',
    },
    {
      '--background-color': 'rgba(29,29,29)',
      '--background-light': 'rgb(77,77,77)',
      '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      '--text-color': '#ffffff',
      '--text-light': '#eceaea',
    },
  ];

  const primaryColors = [
    'rgb(255, 0, 86)',
    'rgb(33, 150, 243)',
    'rgb(255, 193, 7)',
    'rgb(0, 200, 83)',
    'rgb(156, 39, 176)',
  ];

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const changeTheme = (index) => {
    const _theme = { ...themes[index] };
    setTheme(index === 0 ? 'light' : 'dark');
    setSettings((prevSettings) => ({
      ...prevSettings,
      ..._theme,
    }));
  };

  const changePrimaryColor = (index) => {
    setPrimaryColor(index);
    setSettings((prevSettings) => ({
      ...prevSettings,
      '--primary-color': primaryColors[index],
    }));
  };

  return (
    <div className="main">
      <div className="section d-block">
        <h2>Preferred Theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === 'light' && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === 'dark' && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Preferred Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              key={index}
              className="option"
              style={{ backgroundColor: color }}
              onClick={() => changePrimaryColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
