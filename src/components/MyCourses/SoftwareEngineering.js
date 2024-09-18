import React, { useState } from 'react';
import './CourseDetail.css';
import Footer from '../../pages/Footer'; 
import Courses from '../Courses';
import padlock from '../../Assets/padlock.png';
 

const courses = [
    { id: 1, title: 'INTRODUCTION TO SOFTWARE ENGINEERING', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '15:00', isLocked: false },
    { id: 2, title: 'BASIC SYNTAX STRUCTURE', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '12:45', isLocked: true },
    { id: 3, title: 'VARIABLES AND DATATYPES', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '10:30', isLocked: true },
    { id: 4, title: 'OPERATORS', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '13:20', isLocked: true },
    { id: 5, title: 'CONTROL FLOW', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '16:50', isLocked: true },
    { id: 6, title: 'LOOPS', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '12:00', isLocked: true },
    { id: 7, title: 'FUNCTIONS', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '9:40', isLocked: true },
    { id: 8, title: 'ARRAYS AND OBJECTS', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '7:55', isLocked: true },
    { id: 9, title: 'EVENTS AND EVENTS HANDLING', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '18:20', isLocked: true },
  ];
  
function SoftwareEngineering() {
  const [videoUrl, setVideoUrl] = useState(courses[0].videoUrl); 
  const [currentLesson, setCurrentLesson] = useState(courses[0].title);
  const [isPurchased, setIsPurchased] = useState(false); 
  const [shaking, setShaking] = useState(false); 

  const handleItemClick = (course) => {
    if (!isPurchased && course.isLocked) {
      setShaking(true); 
      setTimeout(() => setShaking(false), 1000); 
    } else {
      setVideoUrl(course.videoUrl);
      setCurrentLesson(course.title);
    }
  };

  const handlePurchaseClick = () => {
    setIsPurchased(true); 
  };

  return (
    <div>
      <div className="course-detail-container">
        <h1 className="course-title">Introduction to Software Engineering</h1>

        <div className="course-detail-grid">
          <div className="course-info-section">
            <div className="course-info-container">
              <ul className="course-outline">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="course-item"
                    onClick={() => handleItemClick(course)}
                  >
                    <span>{course.title}</span>
                    {isPurchased ? (
                      <span className="video-duration">{course.duration} mins</span>
                    ) : (
                      course.isLocked && <img src={padlock} alt="Padlock" className="padlock-icon" />
                    )}
                  </div>
                ))}
              </ul>
              <div className="course-info-details">
                <p>120 hours</p>
                <p>40 Courses</p>
              </div>
            </div>
            <div className="what-youll-learn">
              <h3 className="learn-heading">What You'll Learn</h3>
              <div className="learning-container">
                <div className="learning-left">
                  <p className="learning-item">✓ Build scalable software systems</p>
                  <p className="learning-item">✓ Master software design principles</p>
                  <p className="learning-item">✓ Understand algorithms and data structures</p>
                  <p className="learning-item">✓ Learn software architecture patterns</p>
                </div>
                <div className="learning-right">
                  <p className="learning-item">✓ Work with modern programming languages</p>
                  <p className="learning-item">✓ Optimize code for performance</p>
                  <p className="learning-item">✓ Prepare for software engineering roles</p>
                  <p className="learning-item">✓ Practice real-world projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="course-preview-section">
            <div className="video-container">
              <p className="current-lesson">{currentLesson}</p>
              <iframe
                className="preview-video"
                src={videoUrl}
                title="Course Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="info-summary-container">
              <div className={`course-buttons ${shaking ? 'shake' : ''}`}>
                {isPurchased ? (
                  <button className="favourite-button">Add to Favourite</button>
                ) : (
                  <>
                    <button className="buy-button" onClick={handlePurchaseClick}>Buy Course</button>
                    {shaking && (
                      <p className="limited-time-offer">Limited-time offer: 2 days left at this price!</p>
                    )}
                  </>
                )}
              </div>
              <p className="course-price">Price: N3,580 <span className="myPrice">N48,500</span></p>

              <div className="course-info-summary">
                <p className="info-summary-heading">This course includes:</p>
                <p className="info-summary-item">✓ 30-Day Money-Back Guarantee</p>
                <p className="info-summary-item">✓ 12 hours on-demand video</p>
                <p className="info-summary-item">✓ Access on mobile and TV</p>
                <p className="info-summary-item">✓ Full lifetime access</p>
                <p className="info-summary-item">✓ Closed captions</p>
                <p className="info-summary-item">✓ Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courses />
      <Footer />
    </div>
  );
}

export default SoftwareEngineering;
