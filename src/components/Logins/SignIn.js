import React, { useState } from 'react'
import './Styles/SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../pages/Footer'
import validation from './SigninValidation'
import signin from '../../Assets/signInImg.png'
import axios from 'axios'


const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const navigate  = useNavigate();

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const err = validation(values);
    setErrors(validation(values))
    if(errors.email ==="" && errors.password ==="") {
      axios.post('http://localhost:8081/signin', values)
      .then(res => {
        if (res.data === "Success") {
          navigate('/');
        } else {
          alert('Failed to sign in or invalid password');
        }
      })
      .catch(err => console.log(err));
    }
    
  }

  return (
    

    <div className='login-page'>
      <div className='login-container'>
      <div className='login-left'>
        <h1>Welcome Back!</h1>
        <img src={signin}></img>
      </div>
      <div className='login-right'>
        <form action='' onSubmit={handleSubmit} className='login-form'>
          <h2>Sign In</h2>
          <div className='border-line'>
          <div>
            <label htmlFor='email'></label>
            <input type='email' placeholder='Enter Address' name='email' onChange={handleInput} />
            {errors.email && <span> {errors.email}</span>}
          </div>
          <div>
            <label htmlFor='password'></label>
            <input type='password' placeholder='Password' name='password' onChange={handleInput} />
            {errors.password && <span> {errors.password}</span>}
          </div>
          <button type='submit' >Login</button>
          </div>
          <Link to="/signup" className='forgot-password'>Create Account</Link>
        </form>
      </div>
    </div>

    <div>
      <Footer />
    </div>
    </div>
  )
}

export default SignIn
