import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {FaStackOverflow} from 'react-icons/fa'
import { Link } from 'react-router-dom'

//import App from '../../App'

const Footer = () => {
  return (

    <section id="footer">
     
     <footer>

    
       <div className='footer__logotag'>
       <div className="footer__logo">
      
       </div> 
       <h2>Bunnie-llc</h2>
       </div>
           
            <ul className='permalinks'>
                
                <li><Link to="/store">STORE</Link></li>
                <li><a href='https://blog.bunnieabc.com'></a></li>
                <li><Link to="/terms">TERMS</Link></li>
                <li><Link to="/community">COMMUNITY</Link></li>
                <li><Link to="/forests">OUR FOREST</Link></li>
                
                
                </ul>

         <div className="footer__socials">
           <a href='https://www.instagram.com/bunniestore.ke/'><FiInstagram/></a>
           <a href='https://wa.me/message/QZV3WV2M74YZI1'><BsWhatsapp/></a>
           <a href='https://Github.com/tito-arch'><AiFillGithub/></a>
           <a href='https://stackoverflow.com/users/14888787/ethical-hacker'><FaStackOverflow /></a>
         </div>
         
         
         <div className="footer__copyright">
           
          
           <li><small>&copy; 2020~2022BunnieABC formerly Bunniestore.KE</small></li>
           
       

         </div>
      </footer>
    
      </section>
  )
}

export default Footer
