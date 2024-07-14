import React, { useRef, useState } from 'react';


const Service = (
  {number, theService}
) => {
  return(
    <div className='container'>
      <h1>{number}.</h1>
      <h2>{theService}</h2>

      <div className='subservices'>

      // the subservices components will be imported here
      </div>
    </div>

  );





}

export default Service
