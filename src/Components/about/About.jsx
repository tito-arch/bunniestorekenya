
import React from 'react'
import './about.css'
import ME from '../../assets/bunnieframe.jpeg'
import {StarFilled, UsergroupDeleteOutlined,DeploymentUnitOutlined,ShakeOutlined } from '@ant-design/icons';


const About = () => {
  return (
    <section id='about'>
      <div className='about__text'>
        <h5>Get to know</h5>
        <h2>About Us</h2>
      </div>

      <div className="container about__container">

    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="bunnieABC" />
      </div>
    </div>
    
    
    <div className="about__content">
    <div className="about__cards">
    
        {/*1st article*/}
    
    <article className='about__card'>
      
    <StarFilled className='about__icon'/>
      
      <h5>Experience</h5>
      <small>2+ Years experience</small>

    </article>

      {/*2nd article*/}

    <article className='about__card'>
      
    <UsergroupDeleteOutlined className='about__icon'/>
      
      <h5>clients</h5>
      <small>87+</small>

    </article>

          {/*3rd article*/}
    
    <article className='about__card'>
      
    <DeploymentUnitOutlined className='about__icon'/>
      
      <h5>Projects deployed</h5>
      <small>35+</small>

    </article>

      {/*4th article*/}
      
      
    <article className='ShakeOutlined'>
      
    <ShakeOutlined  className='ShakeOutlined'/>
      
      <h5>Heads up!!</h5>
      <small> For more userfriendliness use a larger screen </small>

    </article> 
    
        {/*Articles end here*/}

    </div>

    <p className='pone'>
    “ Here at BunnieABC if we experience any failures or setbacks, we embrace them we do not forget them because they offend our self-esteem. Instead, we reflect on them deeply, trying to figure out what went wrong and discern whether there are any patterns to our mistakes.” <h2>~CTO bunnieABC</h2>
    </p>

    <a href="#footer" className="btn btn-primary">Lets talk!</a>

    </div>

      </div>
  </section>
  )
}

export default About
