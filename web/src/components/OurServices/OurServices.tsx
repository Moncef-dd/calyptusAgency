import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Service.css';

import { Pagination } from 'swiper/modules';


const OurServices = ({subtitle, describtion}) => {

  return (

     <div className="our-services">
      <div className="container" >
        <h3>
          OUR SERVICES
        </h3>

      <Swiper
        slidesPerView = {1.5}
        spaceBetween={1}
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

      </Swiper>
      </div>
      </div>
  );
}


export default OurServices;
