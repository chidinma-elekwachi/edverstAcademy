import React from 'react'
import './Styles/SignIn.css'
import welcome from '../../Assets/medium-shot-colleagues-posing-together.jpg'

function SignIn() {
  return (
    <div className='mySign'>
        <div className='firstSec'>
            <h1>Welcome Back!</h1>
            <img src={welcome} alt='welcome'/>
        </div>

        <div className='secSec'>
            <form action=''>
                
            </form>
        </div>
    </div>
  )
}

export default SignIn