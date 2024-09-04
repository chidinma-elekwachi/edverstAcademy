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
          <button id='firstBtn'><Link to="/signIn">Sign In</Link></button>
          <button className='secondBtn'><Link to="signUp" id='linkTxt'>Sign up</Link></button>


      </div>
    </nav>
  </header>
);

export default Header;
