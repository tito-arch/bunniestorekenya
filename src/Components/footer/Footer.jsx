import React from 'react'
import './footer.css'

import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaStackOverflow} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

   
      <div className="footer__logo">
      
      </div>  

         <ul className='permalinks'>
          <li><a href='#home'>HOME</a></li>
          
          <li><a href='#home'>STORE</a></li>
          <li><a href='#home'>BLOG</a></li>
          <li><a href='#home'>ABOUT</a></li>
          <li><a href='#home'>COMMUNITY</a></li>
         </ul>

         <div className="footer__socials">
           <a href='https://instagram.com'><FiInstagram/></a>
           <a href='https://whatsapp.com'><BsWhatsapp/></a>
           <a href='https://github.com'><AiFillGithub/></a>
           <a href='https://stackoverflow.com'><FaStackOverflow /></a>
         </div>
         <div className="footer__copyright">
         <small><a href='#home'>Privacy policy</a></small>
           <small>&copy; 2019~2022BunnieABC formerly Bunniestore.KE</small>
           <small><a href='#home'>Terms & conditions</a></small>

         </div>
    </footer>
  )
}

export default Footer
