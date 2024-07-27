import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className="wrapper">
            <span>Roy Chen</span>
            <div className="social">
                <a href="https://www.facebook.com/roy.chen97/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/roychen651/"><img src="/linkedin-icon.png" alt="" /></a>
                <a href="https://www.instagram.com/roychen.97"><img src="/instagram.png" alt="" /></a>
                <a href="https://github.com/Roychen651"><img src="/github.png" alt="" /></a>

            </div>
        </div>
    </div>
  )
}

export default Navbar