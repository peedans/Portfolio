import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

//contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Project from './contents/Project';



import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Project" element={<Project />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
