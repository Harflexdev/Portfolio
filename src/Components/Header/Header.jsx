import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'
import { motion } from 'framer-motion'





const variants ={
  initial:{
    y:50,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}


const variant2 = {
  initial:{
    y:100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration: 1,
    },
  },
}




const Header = () => {
  return (
    <header>
      <motion.div className="container header__container" variants={variants} initial="initial" whileInView="animate">
        <motion.h5 variants={variants} initial="initial" whileInView="animate">Hello I'm</motion.h5>
        <motion.h1 variants={variant2} initial="initial" whileInView="animate">Ismaila Afeez</motion.h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <motion.div className="me" variants={variants} initial="initial" whileInView="animate">
          <img src={ME} alt="" />
        </motion.div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </motion.div>
    </header>
  )
}

export default Header
