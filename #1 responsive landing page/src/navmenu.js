import React, { useState, useEffect } from 'react';
import './navmenu.css';

const NavMenu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-menu ${scrolled ? 'scrolled' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#games">Fun & Games</a></li>
        <li><a href="#stories">Story Time</a></li>       
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
