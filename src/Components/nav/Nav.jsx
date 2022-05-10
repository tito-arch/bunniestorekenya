import React from 'react'
import './nav.css'
import {HomeOutlined,ShopTwoTone, BookOutlined,ToolOutlined,PhoneOutlined } from '@ant-design/icons'
import {useState} from 'react'




const Nav = () => {
  const[activeNav, setActiveNav, ] = useState('#')
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><HomeOutlined /></a>

      
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BookOutlined /></a>
      <a href="/store" onClick={() => setActiveNav('/store')} className={activeNav === '/store' ? 'store' : ''}><ShopTwoTone /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><ToolOutlined /></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><PhoneOutlined /></a>
    </nav>
  )
}

export default Nav
