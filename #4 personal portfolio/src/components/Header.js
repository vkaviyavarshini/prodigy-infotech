import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about-me"><li>About Me</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/skills"><li>Skills</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
