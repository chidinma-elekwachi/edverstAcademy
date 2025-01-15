import React from 'react';
import { Link } from 'react-router-dom'; 
import './Dashboard.css'; 
import student from '../../Assets/chidinmaPic.jpg'


const profileInfo = {
  name: 'John Depp',
  phone: '09000020020',
  email: 'JohnDepp777@gmail.com',
  activeCourses: 2,
};

const courses = [
  { name: 'Cyber Security', progress: 28, coursesLeft: 56, link: '/cyber-security' },
  { name: 'Technical Writing', progress: 15, coursesLeft: 34, link: '/technical-writing' },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className='imageText'>
        <aside className="profile-image">
          <img src={student} alt="Profile" />
        </aside>

      </div>
      <main className="dashboard-main">
        <section className="welcome-section">
          <h1 className="welcome-text">Welcome {profileInfo.name}!</h1>
          <div className="profile-info">
            <p>Name: {profileInfo.name}</p>
            <p>Phone number: {profileInfo.phone}</p>
            <p>Email: {profileInfo.email}</p>
            <p>Number of active Courses: {profileInfo.activeCourses}</p>
          </div>
        </section>
        <section className="course-status-section">
          <h2 className="course-status-heading">Course Activity Status</h2>
          <div className="course-list">
            {courses.map((course, index) => (
              <div key={index} className="course-item2">
                <p className="course-name">{index + 1}. {course.name}</p>
                <p>Progress: {course.progress}%</p>
                <p>{course.coursesLeft} Courses left</p>
                <Link to={course.link} className="continue-button">
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
