// App.js
import React from 'react';

import './App.css';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // document.write("Harshita")
  }, []);
  return (
    <div className="App">
      
      {/* <Header /> */}
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
  
    </div>
  );
}

export default App;
