import React, { useState } from 'react';
import './CourseDetail.css';
import padlock from '../../Assets/padlock.png';
import Footer from '../../pages/Footer';

const courses = [
  { id: 1, title: 'INTRODUCTION TO CYBERSECURITY', videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA', isLocked: false },
  { id: 2, title: 'BASIC SYNTAX STRUCTURE', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2', isLocked: true },
  { id: 3, title: 'VARIABLES AND DATATYPES', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3', isLocked: true },
  { id: 4, title: 'OPERATORS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4', isLocked: true },
  { id: 5, title: 'CONTROL FLOW', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5', isLocked: true },
  { id: 6, title: 'LOOPS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6', isLocked: true },
  { id: 7, title: 'FUNCTIONS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7', isLocked: true },
  { id: 8, title: 'ARRAYS AND OBJECTS', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8', isLocked: true },
  { id: 9, title: 'EVENTS AND EVENTS HANDLING', videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_9', isLocked: true },
];

function CyberSecurity() {
  const [videoUrl, setVideoUrl] = useState(courses[0].videoUrl); 
  const [currentLesson, setCurrentLesson] = useState(courses[0].title);

  const handleItemClick = (url, title) => {
    setVideoUrl(url);
    setCurrentLesson(title);
  };

  return (
    <div>

    <div className="course-detail-container">
      <h1 className="course-title">Cyber Security</h1>

      <div className="course-detail-grid">
        <div className="course-info-section">
          <div className="course-info-container">
            <ul className="course-outline">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="course-item"
                  onClick={() => handleItemClick(course.videoUrl, course.title)}
                >
                  <span>{course.title}</span>
                  {course.isLocked && <img src={padlock} alt="Padlock" className="padlock-icon" />}
                </div>
              ))}
            </ul>
            <div className="course-info-details">
              <p>118 hours</p>
              <p>36 Courses</p>
            </div>
          </div>
          <div className="what-youll-learn">
            <h3 className="learn-heading">What You'll Learn</h3>
            <div className="learning-container">
                <div className="learning-left">
                <p className="learning-item">✓ Understand fundamental concepts of cybersecurity</p>
                <p className="learning-item">✓ Learn to identify and mitigate security threats</p>
                <p className="learning-item">✓ Gain skills in ethical hacking techniques</p>
                <p className="learning-item">✓ Implement robust security measures</p>
                </div>
                <div className="learning-right">
                <p className="learning-item">✓ Master tools and technologies used in cybersecurity</p>
                <p className="learning-item">✓ Develop skills in network security</p>
                <p className="learning-item">✓ Understand compliance and regulatory requirements</p>
                <p className="learning-item">✓ Prepare for cybersecurity certification exams</p>
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
            <div className="course-buttons">
              <button className="buy-button">Buy Course</button>
            </div>
            <p className="course-price">Price: N35,000 <span className='myPrice'>N58,500</span></p>

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
    <Footer />

    </div>

  );
}

export default CyberSecurity;
