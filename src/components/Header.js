// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item"><a href="#about">Haqqımda</a></li>
          <li className="header-item"><a href="#services">Xidmətlər</a></li>
          <li className="header-item"><a href="#education">Təhsil</a></li>
          <li className="header-item"><a href="#contact">Əlaqə</a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
