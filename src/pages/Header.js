import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/edverest.png';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav id='myNav'>
        <a href='/'><img src={logo1} alt='edverest' id='logonav' /></a>

        <div className='inWbtn'>
          <input className='myInput' type='text' placeholder='Search for Anything' />
          <button className='secondBtn search'><a href='/' id='signUpA'>Search</a></button>
        </div>

        <div className={`linkSec ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/courses" onClick={closeMenu}>Courses</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          
          
          <button id='firstBtn' onClick={closeMenu}>
            <Link to="/signIn">Sign In</Link>
          </button>
          <button className='secondBtn' onClick={closeMenu}>
            <Link to="/signUp" id='linkTxt'>Sign up</Link>
          </button>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
