import React from 'react';
import '../styles/About.css';
import founder from '../Assets/chichi.jpg';
import cofounder from '../Assets/promiseProject.jpg'; 
import Footer from '../pages/Footer';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About Edverest</h1>
          <p>
            Edverest is a cutting-edge tech education academy, born from the vision of pushing education to its peak. Founded by Chidinma Elekwachi, with co-founder Promise Akobi, Edverest stands as a beacon for those aspiring to climb the heights of technological expertise.
          </p> <br/>
          <p>
            Our mission is to deliver flexible, innovative, and accessible learning paths in technology that empower learners to reach new heights. Whether you are new to tech or looking to advance your skills, Edverest offers a platform designed to meet your needs.
          </p>
        </div>

        <div className="about-images">
          <div className="image-container">
            <img src={founder} alt="Chidinma Elekwachi" />
            <p className="name">Chidinma Elekwachi</p>
            <p className="title">Founder</p>
          </div>
          <div className="image-container">
            <img src={cofounder} alt="Promise Akobi" />
            <p className="name">Promise Akobi</p>
            <p className="title">Co-Founder</p>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p><span className="quote">"</span>Edverest has transformed my career! The flexible courses allowed me to learn at my own pace.<span className="quote">"</span></p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p><span className="quote">"</span>The mentors at Edverest are truly experts in their fields. I couldn't have asked for a better learning experience.<span className="quote">"</span></p>
            <p>- John Smith</p>
          </div>
          <div className="testimonial">
            <p><span className="quote">"</span>I went from a complete beginner to landing a job in tech thanks to Edverest’s comprehensive programs.<span className="quote">"</span></p>
            <p>- Sarah Johnson</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
