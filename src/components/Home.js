import React from 'react';
import '../styles/Home.css';
import Journey from './Sections/Journey';
import TutorIcon from '../Assets/tutor1.png'
import courseIcon from '../Assets/course.png'
import registerIcon from '../Assets/rocket.png'
import certifIcon from '../Assets/certifi.png'
import liveSuport from '../Assets/global.png'
import curricIcon from '../Assets/curricculum.png'



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

  return (
    <div>
      <main className='homePage'>
        <div className='introText'>
          <h1 id='firstH1' className='bigBlue'>Explore Over <span>100's</span> of our courses to kick start your career.</h1>
          <p id='firstP'>Engage with interactive courses, expert instructors, and a community of learners to further your career.</p>
          <button onClick={btnClick} id='diveBtn'><a href='/' id='diveTxt'>Get Started Here →</a></button>
        </div>
        <div className='myImage'>
          {/* Add image or relevant content here */}
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

      </div>

    </div>
  );
}

export default Home;
