import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';
import techWrite from '../Assets/techwriting.jpg';
import sweIcon from '../Assets/softwareEng.jpg';
import cyberIcon from '../Assets/cyberSec.jpg';
import frontendIcon from '../Assets/frontend.jpg';
import Footer from '../pages/Footer';

const coursesData = [
  {
    img1: sweIcon,
    title: "Software Engineering",
    info: "Master the art of building robust software systems from scratch.",
    rating: 4.7,
    reviews: 1250,
    tutor: "Chidinma Elekwachi",
    cert: "Professional Certificate in Software Engineering (6-12 Months)",
    btn: "/software-engineering"
  },
  {
    img1: cyberIcon,
    title: "Cyber Security",
    info: "Learn to protect systems and networks from digital attacks.",
    rating: 4.8,
    reviews: 980,
    tutor: "Promise Akobi",
    cert: "Certified Cyber Security Specialist (4-8 Months)",
    btn: "/cyber-security"
  },
  {
    img1: frontendIcon,
    title: "Frontend Development",
    info: "Design and build beautiful, responsive websites from scratch.",
    rating: 4.5,
    reviews: 890,
    tutor: "Nonso Okeke",
    cert: "Frontend Developer Certificate (3-6 Months)",
    btn: "/frontend-development"
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
  }
];

function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? coursesData.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === coursesData.length - 3 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div>

    <div className="courses-container">
      <h1 className="courses-title">Courses</h1>

      <div className="courses-grid">
        {coursesData.slice(currentIndex, currentIndex + 3).map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img1} alt={course.title} className="course-image" />
            <p className="course-name">{course.title}</p>
            <p className="course-info">{course.info}</p>
            <p className="rating">Rating: <span className="rating-number">{course.rating}</span> ({course.reviews} reviews)</p>
            <p>Instructor: {course.tutor}</p>
            <Link to={course.btn} className="course-button">Go to Course</Link>
          </div>
        ))}

        <span className="carousel-control prev" onClick={handlePrev}>&lt;</span>
        <span className="carousel-control next" onClick={handleNext}>&gt;</span>
      </div>

    </div>
      <Footer />
    </div>
  );
}

export default Courses;
