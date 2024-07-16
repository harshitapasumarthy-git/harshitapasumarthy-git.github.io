import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/SideBar.css';
import profilePic from '../image/profilePic.png'; // Add your profile picture here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>Harshita Pasumarthy</h2>
      <h3>Data Engineer</h3>
      <p>Texas, USA</p>
      <p><a href="https://www.linkedin.com/in/harshita-pasumarthy-154933118/">LinkedIn</a>
</p>
      <p> <a href ="https://github.com/harshitapasumarthy-git/">Github</a> </p>
    </aside>
  );
};

export default Sidebar;
