import React from 'react';
import '../styles/Footer.css'; 

import x from '../Assets/twitter.webp'
import facebook from '../Assets/facebk.webp'
import linkeldn from '../Assets/linkeldn.png'
import github from '../Assets/github.png'



import logo from '../Assets/edverest.png'
import appStore from '../Assets/appStore.png'
import playStore from '../Assets/playStore.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="app-icons">
          <img src={appStore} alt="Play Store" />
          <img className="myPlay" src={playStore} alt="App Store" />
        </div>
      </div>

      <div className="footer-section">
        <h4>Pages</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="courses">Courses</a></li>
          <li><a href="faq">FAQ</a></li>
          <li><a href="contact">Contact</a></li>

        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+2349138661387">+2349138661387</a></li>
          <li><a href="mailto:elexisbiz@gmail.com">elexisbiz@gmail.com</a></li>
          <li>2972 Westheimer Rd, Santa Ana,<br></br> Illinois 85485</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Social Media</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkeldn} alt="LinkedIn" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;