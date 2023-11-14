// Navbar.js
import React from 'react';
import './App.css';

const Navbar = ({ count, resetCount }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        
      
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
      </div>
      <div className="count-container">
        <span className="count">Count: {count}</span>
      </div>
      <div className="reset-count-container">
        <button className="reset-count" onClick={resetCount}>
          Reset Count
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
