import React from 'react';
import './Styles/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../pages/Footer';
import signin from '../../Assets/signInImg.png';

const SignIn = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
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
                  className='signInput'
              
                />
              </div>
              <div>
                <label htmlFor='password'></label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  required
                  className='signInput'
                  // onChange={handleInput}
                />
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
