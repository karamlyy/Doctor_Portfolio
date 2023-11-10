// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item"><a href="#about">About Me</a></li>
          <li className="header-item"><a href="#services">Services</a></li>
          <li className="header-item"><a href="#education">Education</a></li>
          <li className="header-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
