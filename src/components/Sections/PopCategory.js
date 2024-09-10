import React from 'react'
import './SecStyles/PopCat.css'

function PopCategory({img1, title, info, rating, reviews, tutor, cert, btn }) {
  return (
    <div className='pops'>
        <img src={img1} alt='course' />
        <div className='popText'>
            <h2>{title}</h2>
            <p id='outline'>{info}</p>

            <p className='smallP'><span>{rating}</span> ⭐ {reviews} reviews</p>

            <h3>Tutor- {tutor}</h3>
            <p className='smallP'>{cert}</p>
            <button className='popsBtn'><a href={btn}>View preview</a></button>
        </div>
    </div>
  )
}

export default PopCategory