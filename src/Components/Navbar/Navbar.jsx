import React from 'react'
import './Navbar.css'
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineContactPage } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {


  const [activeNav, setActive] = useState('#')


  return (
   <nav>
    <a href="#" className={activeNav === '#' ?  'active' : ''}  onClick={() => setActive('#')}><CiHome/></a>
    <a href="#about" onClick={() => setActive('#about')}className={activeNav === '#about' ?  'active' : ''}><CiUser/></a>
    <a href="#experience" onClick={() => setActive('#experience')} className={activeNav === '#experience' ?  'active' : ''}><CiBookmark/></a>
    <a href="#contacts" onClick={() => setActive('#contacts')} className={activeNav === '#contacts' ?  'active' : ''}><MdOutlineContactPage/></a>
   </nav>
  )
}

export default Navbar
