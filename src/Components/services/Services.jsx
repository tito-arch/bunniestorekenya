import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
   <div className='services__txt'>
   <h5>It's </h5>
   <h2>Tech and Everything Tech</h2>
   <h3> "Sufficiently advanced technology is indistinguishable from magic."</h3>
   <h2>~Elon Revee Musk</h2>
   </div>


   <div className="container services__container">

     <article className="service">

       <div className="service__head">
         <h3>WEB DEVELOPMENT</h3>
       </div>
       <ul className='service__list'>
         
         <li>
           <BiCheck className='service__list-icon'/>
           <p>Hosting</p>
         </li>
         
         <li>
           <BiCheck className='service__list-icon'/>
           <p>Search Engine Optimization</p>
         </li>
        
         <li>
           <BiCheck className='service__list-icon'/>
           <p>Website Maintainance</p>
         </li>
         
         <li>
           <BiCheck className='service__list-icon'/>
           <p>Analytics</p>
         </li>
         
       
       </ul>
     </article>

         {/*END OF UI*/}


         <article className="service">

<div className="service__head">
  <h3>A.I</h3>
</div>
<ul className='service__list'>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Smart Assistance</p>
  </li>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Automated Finacial Investing </p>
  </li>
 
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Inter-team Chatting Tools</p>
  </li>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Robotics</p>
  </li>
  

</ul>
</article>

  {/*END OF UI*/}

  <article className="service">

<div className="service__head">
  <h3>INTERNET OF THINGS</h3>
</div>
<ul className='service__list'>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Home Automation.</p>
  </li>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Activity Trackers.</p>
  </li>
 
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Connectivity.</p>
  </li>
  
  <li>
    <BiCheck className='service__list-icon'/>
    <p>Data Processing.</p>
  </li>
  

</ul>
</article>

  {/*END OF UI*/}

   </div>

  
  
  </section>
  )
}

export default Services
