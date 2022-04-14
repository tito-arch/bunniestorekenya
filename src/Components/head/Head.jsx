import React from 'react'
import './head.css'
import CTA from './CTA'
import LOGO from '../../assets/bunnie.gif'
import HeaderSocials from './HeaderSocials'

const Head = () => {
  return (
    <header className='head'>
       <div className="container header__container">
         <h5>Hello we are</h5>
         <h1>BunniestoreABC</h1>
         <h5 className='text-highlight'> Fullstack Developers</h5>
      
    <CTA />
    <HeaderSocials />
     
     <div className='bunnie__logo'> 
       <div className='bunnie__logo-image'>

       {/*i need this image bug wount get squashed*/}
       <img src={LOGO} className='me' alt="B..logo" />

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 
      </div>

   </div>
    </header>
  )
}

export default Head
