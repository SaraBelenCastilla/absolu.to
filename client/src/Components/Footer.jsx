import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lgo from '../assets/img/logo.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className='footer'>
      {/* <div className='footer__cabecera'>
        
        <div className='arroba'><DotLottieReact
      src="https://lottie.host/c8cf3a7a-5303-474c-9307-d60a2a1d120e/BSK9SpugrK.json"
      loop
      autoplay
    /></div>
      </div> */}
       <img className='logo__footer' src={Lgo} alt="logo" />
      <div className="footer__cuerpo">
        <div className="footer__drc">
         
          <div className="footer__direccion">
          <h3 className="footer__h3">Madrid</h3>
          <p className="footer__p">C/ de Manzanares 4, 28005</p>
          </div>
          <div className="footer__direccion">
          <h3 className="footer__h3">Sevilla</h3>
          <p className="footer__p">Av. República Argentina 15, 41011</p>
          </div>
          <div className="footer__social">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
<path fill="#3f4a54" d="M67.8,116.9c-1.7,0-3-1.4-3-3c0,0,0,0,0,0c0-0.9,0-20.6,0-37.3c0-1.7,1.3-3,3-3h7.8l0.7-7.2h-8.5c-1.7,0-3-1.3-3-3v-7.8c0-4.5,3.3-6.6,6.3-6.6h5.4v-6.9l-8.5,0c-11.5,0-12.7,8.9-12.7,12.7v8.6c0,1.7-1.3,3-3,3h-6.9v7.2h6.9c1.7,0,3,1.3,3,3v36.1c0,1.7-1.3,3-3,3s-3-1.3-3-3V79.6h-6.9c-1.7,0-3-1.3-3-3V63.3c0-1.7,1.3-3,3-3h6.9v-5.6c0-8.6,4.9-18.7,18.7-18.7l11.5,0c1.7,0,3,1.3,3,3V52c0,1.7-1.3,3-3,3h-8.4c-0.1,0-0.2,0-0.2,0c0,0.1-0.1,0.3-0.1,0.6v4.8h8.9c0.8,0,1.7,0.4,2.2,1c0.6,0.6,0.8,1.5,0.8,2.3l-1.4,13.2c-0.2,1.5-1.4,2.7-3,2.7h-7.5c0,7.7,0,15.7,0,22.1l0,11.4c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.3l0,0C70.5,116.4,69,116.9,67.8,116.9z"></path><path fill="#3f4a54" d="M67.8,116.9c-1.6,0-2.9-1.2-3-2.8c-0.1-1.7,1.1-3.1,2.8-3.2c24.4-1.8,43.4-22.4,43.4-46.9c0-25.9-21.1-47-47-47s-47,21.1-47,47c0,21.8,14.8,40.6,35.9,45.7c1.6,0.4,2.6,2,2.2,3.6c-0.4,1.6-2,2.6-3.6,2.2C27.7,109.8,11,88.6,11,64.1c0-29.2,23.8-53,53-53c29.2,0,53,23.8,53,53c0,27.6-21.5,50.8-49,52.8C67.9,116.9,67.9,116.9,67.8,116.9z"></path>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path><path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path><path d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path><circle cx="15.5" cy="15.5" r="2.5"></circle><path d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path><path d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-7.5	c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
</svg>
          </div>
        </div>
        <div className="footer__izq">
        <div className="footer__email"  onClick={(e) => {window.location.href ='mailto: hola@absolu.to';}}> hola@absolu.to </div>
          {/* <p className="footer__email"> hola@absolu.to</p> */}
          <div className="footer__llamar">
          <FaPhoneAlt className='fono' />
          <p className="footer__telf">+34 643 470 163</p>
          </div>
          <button className='footer__botonA'>Proveedores</button>
          <button className='footer__botonB'>Trabaja con nosotros</button>
          
        </div>
      </div>
      <div className="footer__pie">
      <FaRegCopyright className='copy'/>
      <p className="footer__p"> 2024 Absoluto | Newsletter | Legal | Privacidad | Cookieless Friendly</p>
      </div>
    </footer>
    
    </>
  )
}
