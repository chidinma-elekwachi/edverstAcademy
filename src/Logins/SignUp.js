import React, { useState } from 'react'
import './Styles/SignIn.css'
import Footer from '../../pages/Footer'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignUpValidation'
import signup from '../../Assets/signup.jpg'
import axios from 'axios'

const SignUp = () => {

  const [values, setValues] = useState({
    name: '',
    phonenumber: '',    
    email: '',
    password: '',
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(values);
    setErrors(err)
    if(err.name ==="" && errors.email ==="" && errors.password ==="") {
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/signIn')
      })
      .catch(err => console.log(err));
    }
    
  }
  return (
    <div className='login-page'>
      <h1>Welcome</h1>
      <h1>We are happy to have you!</h1>
      <div className='login-container'>

      <div className='login-left'>
        <h1>Sign up</h1>
        <img src={signup} alt='signup'/>
      </div>
      <div className='login-right'>
        <form action='' onSubmit={handleSubmit} className='login-form'>
          <div className='border-line'>
          <div>
            <label htmlFor='text'></label>
            <input type='name' placeholder='Fullname' name='name' onChange={handleInput} />
            {errors.name && <span> {errors.name}</span>}
          </div>
          <div>
            <label htmlFor='number'></label>
            <input type='phonenumber' placeholder='Phone Number' name='number' onChange={handleInput} />
            {errors.phonenumber && <span> {errors.phonenumber}</span>}
          </div>
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
          <button type='submit'>Sign up</button>
          </div>
          <p>Already have an account? <Link to="/signin" className='forgot'>Sign-In</Link></p>
          
        </form>
      </div>

      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default SignUp
