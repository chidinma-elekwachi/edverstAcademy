import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../Assets/edverest.png';
import '../styles/Header.css';
import SearchForm from '../components/Sections/Search';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav id="myNav">
        <a href="/">
          <img src={logo1} alt="edverest" id="logonav" />
        </a>

        <SearchForm />

        <div className={`linkSec ${menuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            onClick={closeMenu}
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
          <Link
            to="/courses"
            onClick={closeMenu}
            className={isActive('/courses') ? 'active' : ''}
          >
            Courses
          </Link>
          <Link
            to="/faq"
            onClick={closeMenu}
            className={isActive('/faq') ? 'active' : ''}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>

          <button id="firstBtn" onClick={closeMenu}>
            <Link to="/signIn">Sign In</Link>
          </button>
          <button className="secondBtn" onClick={closeMenu}>
            <Link to="/signUp" id="linkTxt">
              Sign up
            </Link>
          </button>
        </div>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
