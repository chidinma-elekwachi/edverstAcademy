import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Courses.css'
import techWrite from '../Assets/techwriting.jpg'
import sweIcon from '../Assets/softwareEng.jpg'
import cyberIcon from '../Assets/cyberSec.jpg'
import frontendIcon from '../Assets/frontend.jpg'

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
  return ( 
    <div className="courses-container">
      <h1 className="courses-title">Courses</h1>

      <div className="courses-grid">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.img1} alt={course.title} className="course-image" />
            <h2 className="course-titles">{course.title}</h2>
            <p className="course-info">{course.info}</p>
            <p>Rating: {course.rating} ({course.reviews} reviews)</p>
            <p>Instructor: {course.tutor}</p>
            <Link to={course.btn} className="course-button">Go to Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
