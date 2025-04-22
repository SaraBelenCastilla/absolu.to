import React, { useState, useEffect } from 'react';



const logos = [
    '/img/ken.png',
    '/img/libro.png',
    '/img/mas.png',
    '/img/pisos.png',
    '/img/tecno.png',
  ];
  function LogoSlider() {
   
  
    return (
        
        <div className="slider1">
           
        <div className="slider-track1">
          {logos.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className="slide" key={index + logos.length}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default LogoSlider;