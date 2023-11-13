import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'fixed-header' : ''}`}>
      <div className="header-container">
        <h1>Dr. Efendiyev</h1>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={toggleMenu}>
            Haqqımda
          </a>
          <a href="#services" onClick={toggleMenu}>
            Xidmətlər
          </a>
          <a href="#education" onClick={toggleMenu}>
            Təhsil
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Əlaqə
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
