// src/components/Header.js
import React from 'react';

// A simple header component with your name and navigation links.
function Header() {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;