import React, { useState, useEffect } from 'react';



const logos = [
    '/img/lucky.png',
    '/img/Mercedes.png',
    '/img/metro.png',
    '/img/Momentum.png',
    '/img/schweppes.png',
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