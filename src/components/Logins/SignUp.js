import React, { useState } from 'react';
import './Styles/SignIn.css';
import Footer from '../../pages/Footer';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../Assets/SignUpImg.png';

const SignUp = () => {
  const [values, setValues] = useState({
    name: '',
    phonenumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any validation or API call logic here if needed
    navigate('/dashboard'); 
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Sign up with Edverest</h1>
          <img src={signup} alt="signup" />
        </div>
        <div className="login-right">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="border-line">
              <div>
                <label htmlFor="text"></label>
                <input
                  type="text"
                  placeholder="Fullname"
                  name="name"
                  required
                  onChange={handleInput}
                />
                
              </div>
              <div>
                <label htmlFor="number"></label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phonenumber"
                  required
                  onChange={handleInput}
                />

              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Enter Address"
                  name="email"
                  required
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleInput}
                />
              </div>
              <button type="submit">Sign up</button>
            </div>
            <p>
              Already have an account?{' '}
              <Link to="/signin" className="forgot">
                Sign-In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
