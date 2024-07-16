import React from 'react';
import '../../src/Header.css';
import Projects from './Projects';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#cv">CV/Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* <li><a href="#">Interests</a></li> */}
          {/* <li><a href="#blog">Blog Posts</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
