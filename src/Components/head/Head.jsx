import React from 'react'
import './head.css'
import CTA from './CTA'
import LOGO from '../../assets/bunnie.gif'
import HeaderSocials from './HeaderSocials'

const Head = () => {
  return (
     
    <section id='home'>
    <header className='head'>
       <div className="container header__container">
         <h5>Hello we are</h5>
         <h1>BunnieABC</h1>
         <h5 className='text-highlight'>A tech and everything Tech startup.</h5>
      
    <CTA />
    <HeaderSocials />
     
     <div className='bunnie__logo'> 
       <div className='bunnie__logo-image'>

       {/*i need this image bug wount get squashed*/}
       <img src={LOGO} className='me' alt="Bunnielogo" />

      <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div> 
      </div>

   </div>
    </header>

   </section>
  )
}

export default Head
