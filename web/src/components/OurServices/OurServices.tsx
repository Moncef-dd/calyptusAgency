import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Service from '../Service/Service';

import './Service.css';

import { Pagination } from 'swiper/modules';


const OurServices = (
  {subtitle01, describtion01, subtitle02, describtion02, subtitle03, describtion03}
 ) => {

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
            {subtitle01}
          </h4>
          <p>{describtion01}</p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="calyptus-item" id='product1'>
          <h1 className='num'>01.</h1>
          <h1>
            PRODUCT DESIGN
          </h1>
          <h4>
            {subtitle02}
          </h4>
          <p>{describtion02}
          
          </p>
        </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="calyptus-item" id='product2'>
          <h1 className='num'>02.</h1>
          <h1>
            AI COPYWRITING
          </h1>
          <h4>
            {subtitle03}
          </h4>
          <p>{describtion03}</p>
        </div>
        </SwiperSlide>

      </Swiper>
      </div>
      </div>
  );
}


export default OurServices;
