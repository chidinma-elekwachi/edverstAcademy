import React, { useState } from 'react';
import './CourseDetail.css';
import padlock from '../../Assets/padlock.png';
import Footer from '../../pages/Footer';
import Courses from '../Courses';

const courses = [
    { id: 1, title: 'INTRODUCTION TO CYBERSECURITY', videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '10:15', isLocked: false },
    { id: 2, title: 'BASIC SECURITY CONCEPTS', videoUrl: 'https://www.youtube.com/embed/9GZlVOafYTg', duration: '12:45', isLocked: true },
    { id: 3, title: 'UNDERSTANDING NETWORK SECURITY', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '8:30', isLocked: true },
    { id: 4, title: 'CRYPTOGRAPHY BASICS', videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '9:20', isLocked: true },
    { id: 5, title: 'SECURITY PROTOCOLS AND STANDARDS', videoUrl: 'https://www.youtube.com/embed/9GZlVOafYTg', duration: '11:50', isLocked: true },
    { id: 6, title: 'VULNERABILITY ASSESSMENT', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '14:00', isLocked: true },
    { id: 7, title: 'INTRUSION DETECTION SYSTEMS', videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '7:40', isLocked: true },
    { id: 8, title: 'MALWARE ANALYSIS TECHNIQUES', videoUrl: 'https://www.youtube.com/embed/9GZlVOafYTg', duration: '6:55', isLocked: true },
    { id: 9, title: 'INCIDENT RESPONSE AND HANDLING', videoUrl: 'https://www.youtube.com/embed/sB2iQSvrcG0', duration: '15:20', isLocked: true },
];


  
function CyberSecurity() {
  const [videoUrl, setVideoUrl] = useState(courses[0].videoUrl); 
  const [currentLesson, setCurrentLesson] = useState(courses[0].title);
  const [isPurchased, setIsPurchased] = useState(false); 
  const [shaking, setShaking] = useState(false); 

  const handleItemClick = (course) => {
    if (!isPurchased && course.isLocked) {
      setShaking(true); 
      setTimeout(() => setShaking(false), 1000); // Stop shake after 1 second
    } else {
      setVideoUrl(course.videoUrl);
      setCurrentLesson(course.title);
    }
  };

  const handlePurchaseClick = () => {
    setIsPurchased(true); // Unlock all videos
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
              <p className="course-price">Price: N3,580 <span className="myPrice">N48,500</span></p>

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

export default CyberSecurity;
