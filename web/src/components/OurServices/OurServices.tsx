import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Service from '../Service/Service';

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
        slidesPerView = {1.3}
        spaceBetween={1}

        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className="calyptus-item" id='dark'>
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
        <div className="calyptus-item" id='product1'>
          <h1>
            PRODUCT DESIGN
          </h1>
          <h4>
            {subtitle}
          </h4>
          <p>{describtion}
          // this is in OurServices.tsx file,
          rigli les fonts w sizes while m designing the database
          </p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <Service
          number='01'
          theService={"PRODUCT DESIGN"}
         />
        </SwiperSlide>

      </Swiper>
      </div>
      </div>
  );
}


export default OurServices;
