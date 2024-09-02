import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/edverest.png';
import '../styles/Header.css'

const Header = () => (
  <header className="header">

    <nav id='myNav'>
      <a href='/'><img src={logo1} alt='edverest' id='logonav'></img></a>
      
      <div className='linkSec'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/courses">Contact</Link>
      </div>
      
      <div className='navButtons'>
          <button id='firstBtn'><a href='/'>Sign In</a></button>
          <button id='secondBtn'><a href='/'>Sign Up</a></button>

      </div>
    </nav>
  </header>
);

export default Header;
