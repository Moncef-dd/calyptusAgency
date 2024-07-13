import React from 'react'
import './Navbar.css'

const Navbar = ({ reqLink}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>

        <a href={reqLink} className='req-link'>REQUEST A QUOTE</a>
        </li>


       </ul>
       <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Our Work</li>
       </ul>

    </nav>
  )
}

export default Navbar