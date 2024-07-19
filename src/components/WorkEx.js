import React from 'react';
import '../../src/MainContent.css';
import shell_logo from '../image/shell_logo.png'
import uta_logo from '../image/uta_logo.png'
const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <img src={uta_logo} alt="Office of Provost Logo" className="logo" />
          <strong>Graduate Student Data Analyst</strong> 
          <br />
           <span className="date">Aug 2023 - Jul 2024</span>
         
        </li>
        <li>
          <img src={shell_logo} alt="Shell Logo" className="logo" />
          <strong>Software Engineering - Data</strong> 
          <br />
          <span className="date">Jul 2020 - Dec 2022</span>
        </li>
        <li>
          <img src={shell_logo} alt="Shell Intern Logo" className="logo" />
          <strong>Software Engineering Intern</strong> 
          <br />
          <span className="date">Aug 2019 - Jun 2020</span>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
