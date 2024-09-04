import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './components/Home';
import About from './components/About'; 
import Courses from './components/Courses';
import Contact from './components/Contact';
import SignIn from './components/Logins/SignIn';
import SignUp from './components/Logins/SignUp';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
