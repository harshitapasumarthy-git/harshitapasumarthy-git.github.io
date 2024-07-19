import React from 'react';
import '../../src/MainContent.css';
import Education from './Education';
import Interests from './Interests';
import Projects from './Projects';
import WorkEx from './WorkEx';
const MainContent = () => {
  return (
    <main className="main-content">
      {/* <section>
        <h1>Harshita</h1>
        <p>Data Scientist focused on Product Analytics in the Travel Tech industry.</p>
      </section> */}
      <section>
        <h2>About Me</h2>
        <ul>
        <li>Naturally curious</li> 
        <li> Resilient </li>
        <li>Persistent</li>
         </ul>
      </section>
      <section>
     <Education/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <WorkEx/>
      </section>
      <section>
        <Interests/>
      </section>
      {/* Add more sections as needed */}
    </main>
  );
};

export default MainContent;
