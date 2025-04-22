import React, { useState, useEffect } from 'react';



const logos = [
     '/img/haagen.png',
      '/img/ArtApart.png',
    '/img/Horizon.png',
    '/img/inversis.png',
    '/img/junta.png',
   
  ];
  function LogoSlider() {
   
  
    return (
        
        <div className="slider">
           
        <div className="slider-track">
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