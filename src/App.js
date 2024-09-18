import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './components/Home';
import About from './components/About'; 
import Courses from './components/Courses';
import Contact from './components/Contact';
import Faq from './components/Faq';
import SignIn from './components/Logins/SignIn';
import SignUp from './components/Logins/SignUp';

import CyberSecurity from './components/MyCourses/CyberSecurity';
import FrontendDevelopment from './components/MyCourses/FrontendDevelopment';
import SoftwareEngineering from './components/MyCourses/SoftwareEngineering';
import TechnicalWriting from './components/MyCourses/TechnicalWriting';
import Dashboard from './components/Logins/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/software-engineering" element={<SoftwareEngineering />} />
          <Route path="/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/technical-writing" element={<TechnicalWriting />} />

          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
    </Router>
  );
}

export default App;
