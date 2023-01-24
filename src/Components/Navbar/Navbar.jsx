import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">{"{"} Finsweet</Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li className='active'>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/services">About Us</Link>
            </li>
            <li>
              <Link to="/portfolio">What We Do</Link>
            </li>
            <li>
              <Link to="/contact">Media</Link>
            </li>
            <li>
              <Link to="/blog">Contact</Link>
            </li>
            <li>
              <button className="navbar-btn">Donate</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar