import React from 'react'
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ihwagi-titus-724b00211/" target="_blank" rel="noopener"><LinkedinOutlined /></a>
      <a href="https://Github.com/tito-arch" target="_blank" rel="noopener"><GithubOutlined /></a>
      <a href="https://www.instagram.com/bunniestore.ke/" target="_blank" rel="noopener"><InstagramOutlined /></a>
      <a href="https://wa.me/c/254743420625" target="_blank" rel="noopener"><WhatsAppOutlined /></a>
    </div>
  )
}

export default HeaderSocials
