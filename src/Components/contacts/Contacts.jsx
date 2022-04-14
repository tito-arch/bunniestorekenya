import React from 'react'
import './contacts.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  
  const form = useRef();
  
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_krmscgo', 'template_u1j0oi9', form.current, '-cMRTG1WsoDkBLn6F')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id='contacts'>
      <div className='contacts__txt'>
       <h3>Send an</h3>
        <h2>E-MAIL</h2>
      </div>

      <div className="container contacts__container">
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your E-MAIL" required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
