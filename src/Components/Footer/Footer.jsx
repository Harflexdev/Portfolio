import React from 'react'
import './Footer.css'
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ismail Afeez</a>

      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
      

      <div className="footer__socials">
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://facebook.com"><CiFacebook/></a>
        <a href="https://x.com"><CiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ismaila. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
