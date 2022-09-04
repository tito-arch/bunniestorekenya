import React from 'react'
import './nav.css'
import { HomeOutlined, ShopTwoTone, BookOutlined, ToolOutlined, PhoneOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Nav = () => {
  const [activeNav, setActiveNav,] = useState('/#')
  return (
    <nav>
      <a href="/#home" onClick={() => setActiveNav('/#home')} className={activeNav === '/#home' ? 'active' : ''}><HomeOutlined /></a>


      <a href="/#about" onClick={() => setActiveNav('/#about')} className={activeNav === '/#about' ? 'active' : ''}><BookOutlined /></a>
      <Link to="/store" onClick={() => setActiveNav('/store')} className={activeNav === '/store' ? 'active' : ''}><ShopTwoTone /></Link>
      <a href="/#services" onClick={() => setActiveNav('/#services')} className={activeNav === '/#services' ? 'active' : ''}><ToolOutlined /></a>
      <a href="/#footer" onClick={() => setActiveNav('/#footer')} className={activeNav === '/#footer' ? 'active' : ''}><PhoneOutlined /></a>
    </nav>
  )
}

export default Nav
