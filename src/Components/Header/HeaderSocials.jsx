import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai";
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="http://linkedin.com" target='_blank'><FaLinkedin /></a>
      <a href="https://github.com/Harflexdev" target='_blank'><FaGithub/></a>
      <a href="http://instagram.com/_ismaila_afeez_" target='_blank'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials 
