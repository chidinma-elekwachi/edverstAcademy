import React from 'react'
import '../styles/Contact.css';
import x from '../Assets/twitter.webp'
import facebook from '../Assets/facebk.webp'

import Footer from '../pages/Footer';

function Contact() {
  return (
    <div>

    <div className='myContact'>
        <div className='contactTxt'>
            <h2>Contact Information</h2>
            <p>Start a live chat with Edv Bot</p>

            <div className='call'>
              <a href="tel:+2349138661387">📞 +2349138661387</a> <br></br>
              <a href="mailto:elexisbiz@gmail.com">📧 elexisbiz@gmail.com</a> <br></br>
              <p>📍 2972 Westheimer Rd, Santa Ana, Illinois 85485</p>
            </div>

            <div className='imageCont'>
              <img src={x} alt='x' />
              <img src={facebook} alt='fb' />
              <img src={x} alt='x' />
            </div>


        </div>

  <div className='contForm'>
    <form action=''>
        <div className='infos'>
            <div className="input-pair">
                <div>
                    <label for="fname">First Name</label>
                    <input type='text' name='fname'></input>
                </div>
                <div>
                    <label for="sname">Last Name</label>
                    <input type='text' name='sname'></input><br></br>
                </div>
            </div>
            <br/>
            <div className="input-pair">
                <div>
                    <label for="mail">Email Address</label>
                    <input type='text' name='mail'></input>
                </div>
                <div>
                    <label for="phone">Phone Number</label>
                    <input type='text' name='phone'></input><br></br>
                </div>
            </div>
            <br/>
        </div>

        <div className='myRad'>
            <label  for="subject">Select Subject</label> <br/>
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
            <label for="message">Message</label> 
            <input type='text' max={50} name='message'></input><br></br>

            <section>
            <button type='submit'>Send Message</button>
            </section>
        </div>
    </form>
  </div>

</div>

      <Footer />
    </div>
  )
}

export default Contact