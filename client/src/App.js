import React, { useState, useEffect } from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './theme.css';


const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 1000,
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          background: 'var(--primary-color)',
          color: 'var(--text-color)',
          cursor: 'pointer',
        }}
        aria-label="Toggle theme"
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </>
  );
}

export default App;
