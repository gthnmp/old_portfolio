import React, { useState } from 'react';
import './Navbar.css';
import '../App';

function Navbar({handleNavigation, activePageId}) {

  function handleClick(id) {
    handleNavigation(id);
  }

  return (
    <header className="Navbar">
      <ul className="Navbar-list">
        <li>
          <button
            id="home"
            className={`nav-button ${activePageId === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            Works
          </button>
        </li>
        <li>
          <button
            id="about"
            className={`nav-button ${activePageId === "about" ? "active" : ""}`}
            onClick={() => handleClick("about")}
          >
            About
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
