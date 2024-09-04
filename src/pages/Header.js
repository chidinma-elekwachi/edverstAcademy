import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/edverest.png';
import '../styles/Header.css'

const Header = () => (
  <header className="header">

    <nav id='myNav'>
      <a href='/'><img src={logo1} alt='edverest' id='logonav'></img></a>
      
      <div className='inWbtn'>
        <input className='myInput' type='text' placeholder='Search for Anything'></input>
        <button className='secondBtn search'><a href='/' id='signUpA'>Search</a></button>
      </div>
      

      <div className='linkSec'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className='navButtons'>
          <button id='firstBtn'><a href='/'>Sign In</a></button>
          <button className='secondBtn'><a href='/' id='signUpA'>Sign Up</a></button>

      </div>
    </nav>
  </header>
);

export default Header;
