import React, { useState } from 'react';
import './CourseDetail.css';
import Footer from '../../pages/Footer';
import padlock from '../../Assets/padlock.png';

import Courses from '../Courses';

const courses = [
    { id: 1, title: 'INTRODUCTION TO TECHNICAL WRITING', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1', duration: '12:00', isLocked: false },
    { id: 2, title: 'BASIC TECHNICAL WRITING PRINCIPLES', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2', duration: '10:30', isLocked: true },
    { id: 3, title: 'WRITING FOR SPECIFIC AUDIENCES', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3', duration: '8:45', isLocked: true },
    { id: 4, title: 'STRUCTURING TECHNICAL DOCUMENTS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4', duration: '9:10', isLocked: true },
    { id: 5, title: 'USING TECHNICAL JARGON EFFECTIVELY', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5', duration: '11:00', isLocked: true },
    { id: 6, title: 'CREATING USER MANUALS AND GUIDES', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6', duration: '13:20', isLocked: true },
    { id: 7, title: 'EDITING TECHNICAL CONTENT', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7', duration: '7:50', isLocked: true },
    { id: 8, title: 'USABILITY TESTING FOR DOCUMENTS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8', duration: '6:30', isLocked: true },
    { id: 9, title: 'INTEGRATING VISUAL ELEMENTS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_9', duration: '15:10', isLocked: true },
  ];
  

function TechnicalWriting() {
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
        <h1 className="course-title">Technical Writing</h1>

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
                <p>70 hours</p>
                <p>25 Courses</p>
              </div>
            </div>
            <div className="what-youll-learn">
              <h3 className="learn-heading">What You'll Learn</h3>
              <div className="learning-container">
                <div className="learning-left">
                  <p className="learning-item">✓ Craft clear technical documents</p>
                  <p className="learning-item">✓ Understand documentation best practices</p>
                  <p className="learning-item">✓ Learn to work with technical teams</p>
                </div>
                <div className="learning-right">
                  <p className="learning-item">✓ Master structured writing</p>
                  <p className="learning-item">✓ Document complex software systems</p>
                  <p className="learning-item">✓ Understand compliance documentation</p>
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
                      <p className="limited-time-offer">2 days left at this price!</p>
                    )}
                  </>
                )}
              </div>
              <p className="course-price">Price: $59.99 <span className="myPrice">$120</span></p>

              <div className="course-info-summary">
                <p className="info-summary-heading">This course includes:</p>
                <p className="info-summary-item">✓ 30-Day Money-Back Guarantee</p>
                <p className="info-summary-item">✓ 1.5 hours on-demand video</p>
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

export default TechnicalWriting;
