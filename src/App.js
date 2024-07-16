// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';

import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
  
    </div>
  );
}

export default App;
