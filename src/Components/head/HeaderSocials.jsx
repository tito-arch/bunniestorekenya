import React from 'react'
import { LinkedinOutlined, GithubOutlined, InstagramOutlined , WhatsAppOutlined} from '@ant-design/icons'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank" rel="noopener"><LinkedinOutlined /></a>
         <a href="http://Github.com" target="_blank" rel="noopener"><GithubOutlined /></a>
         <a href="http://Instagram.com" target="_blank" rel="noopener"><InstagramOutlined /></a>
         <a href="http://whatsapp.com" target="_blank" rel="noopener"><WhatsAppOutlined /></a>
    </div>
  )
}

export default HeaderSocials
