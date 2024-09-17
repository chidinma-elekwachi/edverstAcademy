import React from 'react';
import './CourseDetail.css';

function TechnicalWriting() {
  return (
    <div className="course-detail-container">
      <h1 className="course-title">Introduction to Technical Writing</h1>
      <div className="course-detail-grid">
        <div className="course-info-section">
          <p>Craft clear and concise technical documents for software projects.</p>
          <ul>
            <li>1. INTRODUCTION TO TECHNICAL WRITING</li>
            <li>2. BASIC SYNTAX STRUCTURE</li>
            <li>3. VARIABLES AND DATATYPES</li>
            <li>4. OPERATORS</li>
            <li>5. CONTROL FLOW</li>
            <li>6. LOOPS</li>
            <li>7. FUNCTIONS</li>
            <li>8. ARRAYS AND OBJECTS</li>
            <li>9. EVENTS AND EVENTS HANDLING</li>
          </ul>
          <button className="preview-button">Play Preview</button>
          <button className="buy-button">Buy Course</button>
        </div>
        <div className="course-preview-section">
          <img src="techWrite" alt="Technical Writing" className="preview-image" />
          <p>70 hours</p>
          <p>25 Courses</p>
        </div>
      </div>
      <div className="course-preview">
        <h2>Course Preview</h2>
        <video controls className="preview-video">
          <source src="path-to-preview-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="course-price">Price: $59.99</p>
      </div>
    </div>
  );
}

export default TechnicalWriting;
