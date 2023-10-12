import React from 'react'
import './Navigation.css'
function Navigation() {
  return (
    <div className='container'>

    <div className='nav-container'>
        <div className='logo-container'>
          <a href='#'><span className='logo-text'>BENOY</span>  </a> 
        </div>
        <div className='nav-menu-container'>
            <ul className='nav-menu'>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>EXPERTISE</a></li>
                <li><a href='#'>WORK WITH US</a></li>
                <li><a href='#'>PROJECTS</a></li>
                <li><a href='#'>FUTURE THINKING</a></li>
                <li><a href='#'>NEWS</a></li>
            </ul>
        </div>
        <div className='contact-container'>
            <a href='#' >CONTACT</a>
        </div>
        
    </div>
    </div>
  )
}

export default Navigation