import React from 'react'
import './Portfolio.css'


const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728559726/portfolio1_hh3iuo.png",
    title: 'Calculator with Js',
    github: 'https://github.com/Harflexdev/Calculatorsoftware',
    demo: 'https://calculatorsoftware.vercel.app/'
  },

  {
    id: 2,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728561157/portfolio2_tz9cxr.png",
    title: 'Limitless Web APP',
    github: 'https://github.com/Harflexdev/Limitless',
    demo: 'https://limitless-eta.vercel.app/'
  },

  {
    id: 3,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728561454/portfolio3_x4ssd1.png",
    title: 'Ventext Global Resources',
    github: 'https://github.com/Harflexdev/VentexGlobalResources',
    demo: 'hhttps://ventex-global-resources.vercel.app/'
  },

  {
    id: 4,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728562245/portfolio4_rsctlu.png",
    title: 'Movie App',
    github: 'https://github.com/Harflexdev/Movieweb',
    demo: 'https://movieweb33.vercel.app/'
  },

  {
    id: 5,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728562939/portfolio6_pjyc99.png",
    title: 'Guess a Number',
    github: 'https://github.com/Harflexdev/guess-number',
    demo: 'https://guess-numberpro.vercel.app/'
  },

  {
    id: 6,
    img: "https://res.cloudinary.com/dicxuebms/image/upload/v1728563360/portfolio5_unrjom.png",
    title: 'Portfolio',
    github: 'https://github.com/',
    demo: 'https://harflexproo.vercel.app/'
  },
]








const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, img, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
