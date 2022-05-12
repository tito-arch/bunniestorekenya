import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section className='experience__title'>
     <h5>Experience</h5>
     <h2>Skills-Set</h2>
     
     <div className="container experience__container">
          

               {/*START OF FRONT_END */}

       <div className="experience__frontend">
         <h3>Front-End development</h3>
         <div className="experience__content">
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small>Experienced</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>NEXT.JS</h4>
            <small>Beginner</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>BOOTSTRAP</h4>
            <small>Intermediate</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>REACT.JS</h4>
            <small>Experienced</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>CSS3</h4>
            <small>Experienced</small>
           
           </article>
         </div>

       </div>

           {/*END OF FRONT_END AND START OF BACK-END*/}

       <div className="experience__backend">
       <h3>Back-End development</h3>
         <div className="experience__content">
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Express JS</h4>
            <small>Experienced</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Python</h4>
            <small>Pro</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Node.Js</h4>
            <small>Intermediate</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            <small>Experienced</small>
           </article>
           
           <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            <small>Experienced</small>
           
           </article>
           {/*END OF BACK-END*/}
       </div>
     </div>
</div>
    </section>
  )
}

export default Experience
