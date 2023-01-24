import React from 'react'
import { links } from '../../data'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  console.log(links)
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="left">
          <Link to="/" className="footer-logo">{"{"} Finsweet</Link>
        </div>
        <div className="center">
          {links.map(colum => (
            <ul>
              <li style={{ fontWeight: "700", fontSize: "16px" }}>{colum.heading}</li>
              {colum.links.map(link => (
                <Link to="/" className="">
                  <li>{link.text}</li>
                </Link>
              ))}
            </ul>
          ))}
        </div>


        <div className="right">
          <h1 className="footerHeading">
            Subscribe to get latest updates
          </h1>
          <div className="subscribeBar">
            <input type="email" className="Your email" />
            <button className="subBtn">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer