import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVT1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellendus velit quibusdam nulla vero ipsam a dolores ad. Minus debitis totam deleniti doloremque eius officia ex nisi dolor itaque porro.',
    avatar: AVT1
  },
  {
    avatar: AVT2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellendus velit quibusdam nulla vero ipsam a dolores ad. Minus debitis totam deleniti doloremque eius officia ex nisi dolor itaque porro.',
    avatar: AVT2
  },
  {
    avatar: AVT3,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellendus velit quibusdam nulla vero ipsam a dolores ad. Minus debitis totam deleniti doloremque eius officia ex nisi dolor itaque porro.',
  },
  {
    avatar: AVT4,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellendus velit quibusdam nulla vero ipsam a dolores ad. Minus debitis totam deleniti doloremque eius officia ex nisi dolor itaque porro.',
  }
]







const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

      // install Swiper modules
      modules={[Navigation, Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      
    
       {
        data.map(({avatar, name, review}, index)=> {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
            
        })
       }     
      </Swiper>
    </section>
  )
}

export default Testimonials
