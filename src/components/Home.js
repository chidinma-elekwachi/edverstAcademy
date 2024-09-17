import React from 'react';
import '../styles/Home.css';
import Journey from './Sections/Journey';
import PopCategory from './Sections/PopCategory';

import TutorIcon from '../Assets/tutor1.png'
import courseIcon from '../Assets/course.png'
import registerIcon from '../Assets/rocket.png'
import certifIcon from '../Assets/certifi.png'
import liveSuport from '../Assets/global.png'
import curricIcon from '../Assets/curricculum.png'

import tutor1 from '../Assets/chichi.jpg'
import tutor2 from '../Assets/promiseProject.jpg'
import tutor3 from '../Assets/nonsoProject.jpg'

import techWrite from '../Assets/techwriting.jpg'
import sweIcon from '../Assets/softwareEng.jpg'
import cyberIcon from '../Assets/cyberSec.jpg'
import frontendIcon from '../Assets/frontend.jpg'

import Footer from '../pages/Footer';

function Home() {

  function btnClick() {
    // Your click handler logic
  }

  const journeys = [
    {
      icon: TutorIcon, 
      title: "My Professional Tutors",
      info: "We have an array of the most qualified professionals to guide you through your journey."
    },
    {
      icon: courseIcon, 
      title: "Online Course",
      info: "Access a variety of online courses tailored to your learning needs."
    },
    {
      icon: registerIcon, 
      title: "Quick Registration",
      info: "Register quickly and easily with our streamlined process."
    },
    {
      icon: certifIcon, 
      title: "Certificate",
      info: "Earn certificates to showcase your skills and knowledge."
    },
    {
      icon: liveSuport, 
      title: "24/7 Edv Bot",
      info: "Get answers to your questions anytime with our virtual assistant."
    },
    {
      icon: curricIcon, 
      title: "Comprehensive Curriculum",
      info: "Follow a comprehensive curriculum designed to help you succeed."
    }
  ];
  const popular = [
    {
      img1: sweIcon,
      title: "Software Engineering",
      info: "Master the art of building robust software systems from scratch.",
      rating: 4.7,
      reviews: 1250,
      tutor: "Chidinma Elekwachi",
      cert: "Professional Certificate in Software Engineering (6-12 Months)",
      btn: "./SoftwareEngineering.js"
    },
    {
      img1: cyberIcon,
      title: "Cyber Security",
      info: "Learn to protect systems and networks from digital attacks.",
      rating: 4.8,
      reviews: 980,
      tutor: "Promise Akobi",
      cert: "Certified Cyber Security Specialist (4-8 Months)",
      btn: "./CyberSecurity.js"
    },
    {
      img1: frontendIcon,
      title: "Frontend Development",
      info: "Design and build beautiful, responsive websites from scratch.",
      rating: 4.5,
      reviews: 890,
      tutor: "Nonso Okeke",
      cert: "Frontend Developer Certificate (3-6 Months)",
      btn: "./FrontendDevelopment.js"
    },
    {
      img1: techWrite,
      title: "Technical Writing",
      info: "Craft clear and concise technical documents for software projects.",
      rating: 4.9,
      reviews: 760,
      tutor: "Salome Ignatius",
      cert: "Technical Writing Professional Certificate (2-4 Months)",
      btn: "/technical-writing"
    },
  ];

  const tutors = [
    {
      img: tutor1, 
      name: "Chidinma Elekwachi",
      profession: "Software Engineer",
      bio: "An experienced software engineer with a passion for teaching."
    },
    {
      img: tutor2, 
      name: "Promise Akobi",
      profession: "Cyber Security Specialist",
      bio: "A seasoned cybersecurity expert dedicated to protecting assets."
    },
    {
      img: tutor3,
      name: "Nonso Okeke",
      profession: "Frontend Developer",
      bio: "A creative frontend developer with a flair for designing user interfaces."
    }
  ];
  

  return (
    <div>
      <main className='homePage'>
        <div className='introText'>
          <h1 id='firstH1' className='bigBlue'>Explore Over <span>100's</span> of our courses to kick start your career.</h1>
          <p id='firstP'>Engage with interactive courses, expert instructors, and a community of learners to further your career.</p>
          <button onClick={btnClick} id='StartBtn'><a href='/' id='diveTxt'>Get Started Here →</a></button>
        </div>
        <div className='myImage'>
          
        </div>
      </main>

      <div className='secondSec'>
        <div className='sndTxt'>
          <h1 className='bigBlue'>Start Your Journey With Us</h1>
          <p>
            Where curiosity meets opportunity. Unlock your passion for learning and discover new possibilities while achieving your goals with our guidance and support.
          </p>
        </div>
        <section className='jourCont'>
          {journeys.map((tab, index) => (
            <Journey key={index} icon={tab.icon} title={tab.title} info={tab.info} />
          ))}
        </section>
      </div>

      <div className='thirdSec'>
            <div className='textSec'>
              <h1 id='myH1'>Join More than <span>1,250+</span> Learners around the world.</h1>
              <button id='courseBtn'><a href='./Courses' id='diveTxt'>See All Courses</a></button>
            </div>
      </div>

      <div className='courseCat'>
          <div className='catHead'>
              <h1>Our Popular Courses by Category</h1>
          </div>
          <div className='catBody'>
              {popular.map((tab, numb) => (
                  <PopCategory key={numb} img1={tab.img1} title={tab.title} info={tab.info} rating={tab.rating} reviews={tab.reviews} tutor={tab.tutor} cert={tab.cert} btn={tab.btn} />
              ))}
          </div>
          <center>
            <button id='courseBtn'><a href='./Courses' id='diveTxt'>See All Courses</a></button>
          </center>
      </div>
          
        <div>
          <div className='catHead'>
              <h1>Meet Our Instructors</h1>
          </div>
          
          <div>
            <div className='tutorContainer'>
              {tutors.map((tutor, index) => (
                <div key={index} className='tutorCard'>
                  <img src={tutor.img} alt='tutors' className='tutorImage' />
                  <h3 className='tutorName'>{tutor.name}</h3>
                  <p className='tutorProfession'>{tutor.profession}</p>
                  <p className='tutorBio'>{tutor.bio}</p>
                </div>
              ))}
              </div>
          </div>
          
          <Footer />

        </div>
    </div>
  );
}

export default Home;
