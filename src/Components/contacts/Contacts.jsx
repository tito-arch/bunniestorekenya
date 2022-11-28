import React from 'react'
import './contacts.css'


const Contacts = () => {


  return (
    <section id='contacts'>
      <div className='contacts__txt'>
        <h3>Send an</h3>
        <h2>E-MAIL</h2>
      </div>

      <div className="container contacts__container">
        <form method="post">
                  {/*TO ASSIST NETLIFY BOTS*/}
         <input type="hidden" name="Portifolio contact form" value="contact" />
                  {/*TO ASSIST NETLIFY BOTS*/}
          
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
