import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/edverest.png';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          {/* Move Sign In and Sign Up buttons here */}
          <button id='firstBtn'><Link to="/signIn">Sign In</Link></button>
          <button className='secondBtn'><Link to="signUp" id='linkTxt'>Sign up</Link></button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
