import React from 'react';
import './SecStyles/Journey.css';

function Journey({ icon, title, info }) { 
    
  return (
    <div className='myJourney'>
      <img src={icon} alt='icon' />
      <div>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Journey;
