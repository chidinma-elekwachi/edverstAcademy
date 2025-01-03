import React, { useState } from 'react';
import './Styles/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../pages/Footer';
import signin from '../../Assets/signInImg.png';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any validation or API call logic here if needed
    navigate('/dashboard'); 
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-left'>
          <h1>Welcome Back!</h1>
          <img src={signin} alt="Sign In" />
        </div>
        <div className='login-right'>
          <form onSubmit={handleSubmit} className='login-form'>
            <h2>Sign In</h2>
            <div className='border-line'>
              <div>
                <label htmlFor='email'></label>
                <input
                  type='email'
                  placeholder='Enter Address'
                  name='email'
                  required
                  onChange={handleInput}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label htmlFor='password'></label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  required
                  onChange={handleInput}
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <button type='submit'>Login</button>
            </div>
            <Link to="/signup" className='forgot-password'>Create Account</Link>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
