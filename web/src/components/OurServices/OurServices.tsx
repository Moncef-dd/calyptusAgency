import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';


const OurServices = ({subtitle, describtion}) => {

  return (

     <div className="our-services">
      <div className="container" >
        <h3>
          OUR SERVICES
        </h3>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className="calyptus-item">
          <h1>
            CALYPTUS.
          </h1>
          <h4>
            {subtitle}
          </h4>
          <p>{describtion}</p>
        </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

      </Swiper>
      </div>
      </div>
  );
}


export default OurServices;
