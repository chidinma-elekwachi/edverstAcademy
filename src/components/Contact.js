import React, { useState } from 'react';
import '../styles/Contact.css';

// contact icons
import callIcon from '../Assets/icons8-call-30.png';
import mailIcon from '../Assets/icons8-mail-30.png';
import locationIcon from '../Assets/icons8-location-30.png';
import twitterIcon from '../Assets/icons8-twitter-circled-30.png';
import instaIcon from '../Assets/icons8-instagram-circle-30.png';
import telegramIcon from '../Assets/icons8-telegram-30.png';
import Footer from '../pages/Footer';

function Contact() {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxaTccw_Zi2lEP7FPWesQgkuG-1PxpzstANSchPGxQ2RMNZfzZR6MQ38t0B2OypqoOf/exec';
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        setMsg('Your message has been sent successfully!');
        setTimeout(() => {
          setMsg('');
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div>
      <div className='myContact'>
        <div className='contactTxt'>
          <h2>Contact Information</h2>
          <p>Start a live chat with Edv Bot</p>

          <div className='call'>
            <a href="tel:+2349138661387">
              <img src={callIcon} alt='Call Icon' className='contact-icon' />
              +2349138661387
            </a>
            <a href="mailto:elexisbiz@gmail.com">
              <img src={mailIcon} alt='Mail Icon' className='contact-icon' />
              elexisbiz@gmail.com
            </a>
            <p>
              <img src={locationIcon} alt='Location Icon' className='contact-icon' />
              2972 Westheimer Rd, Santa Ana, Illinois 85485
            </p>
          </div>

          <div className='imageCont'>
            <img src={twitterIcon} alt='Twitter' className='social-icon' />
            <img src={instaIcon} alt='Instagram' className='social-icon' />
            <img src={telegramIcon} alt='Telegram' className='social-icon' />
          </div>
        </div>

        <div className='contForm'>
          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <div className='infos'>
              <div className='input-pair'>
                <div>
                  <label htmlFor='fname'>First Name</label>
                  <input type='text' name='fname' required />
                </div>
                <div>
                  <label htmlFor='sname'>Last Name</label>
                  <input type='text' name='sname' required />
                </div>
              </div>

              <div className='input-pair'>
                <div>
                  <label htmlFor='mail'>Email Address</label>
                  <input type='email' name='mail' required />
                </div>
                <div>
                  <label htmlFor='phone'>Phone Number</label>
                  <input type='number' name='phone' required />
                </div>
              </div>
            </div>

            <div className='myRad'>
              <label htmlFor='subject'>Select Subject</label>
              <div className='radioL'>
              <input type='radio' name='subject' value='general-inquiry' required />
                <label >General Inquiry</label>
                <input type='radio' name='subject' value='personal-enquiry' />
                <label>Personal Inquiry</label>
              </div>
            </div>
            
            <div className='subj'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' required />
            </div>

            <section>
              <button type='submit'>Send Message</button>
            </section>
            {msg && <p>{msg}</p>}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
