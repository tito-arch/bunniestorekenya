import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <div className="cta">
      
    <a href="#footer" className="btn btn-primary">Lets talk!</a>
    <Link to="/store" className="btn">STORE</Link>
  </div>
  )
}

export default CTA
