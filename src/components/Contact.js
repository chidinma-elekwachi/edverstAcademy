import React from 'react';
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
          <form action=''>
            <div className='infos'>
              <div className="input-pair">
                <div>
                  <label htmlFor="fname">First Name</label>
                  <input type='text' name='fname' />
                </div>
                <div>
                  <label htmlFor="sname">Last Name</label>
                  <input type='text' name='sname' /><br />
                </div>
              </div>
              <br />
              <div className="input-pair">
                <div>
                  <label htmlFor="mail">Email Address</label>
                  <input type='text' name='mail' />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type='text' name='phone' /><br />
                </div>
              </div>
              <br />
            </div>

            <div className='myRad'>
              <label htmlFor="subject">Select Subject</label><br />
              <label className='radioL'>
                <input type="radio" name="subject" value="general-inquiry" required />
                General Inquiry
              </label>
              <label className='radioL'>
                <input type="radio" name="subject" value="personal-enquiry" />
                Personal Inquiry
              </label>
              <br />
            </div>

            <div className='subj'>
              <label htmlFor="message">Message</label>
              <input type='text' max={50} name='message' /><br />

              <section>
                <button type='submit'>Send Message</button>
              </section>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
