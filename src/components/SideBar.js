import React from 'react';

import '../../src/SideBar.css';
import profilePic from '../image/profilePic.png'; // Add your profile picture here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h2>Harshita Pasumarthy</h2>
      <h3>Software Engineer - Data</h3>
      <p>TX,United States</p>
      <p><a href="https://www.linkedin.com/in/harshita-pasumarthy-154933118/">LinkedIn</a>
</p>
      <p> <a href ="https://github.com/harshitapasumarthy-git/">Github</a> </p>
      <p>
        <a href='src/image/Harshita_Pasumarthy_Data_Mix.pdf' download={'HarshitaPasumarthy_Resume.pdf'}>Download my resume</a>
      </p>
    </aside>

  );
};

export default Sidebar;
