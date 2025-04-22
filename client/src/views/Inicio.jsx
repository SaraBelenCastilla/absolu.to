import React from 'react'
import ReactPlayer from 'react-player'
  import video from '../assets/video.mp4'
// import HorizontalScroll from '../Components/HorizontalScroll/HorizontalScroll'
// import HorizontalScroll1 from '../Components/HorizontalScroll/HorizontalScroll1'
// import HorizontalScroll2 from '../Components/HorizontalScroll/HorizontalScroll2'
// import foto from  '../div/item01.png'

import Carrusell from '../Components/Carrusell'
import CarrusellUno from '../Components/CarrusellUno'
import Sectin51 from '../div/Sectin51'
// import  Pagepilling from '../Components/Pagepilling'
import Carrusell0 from '../Components/Carrusell0'
import Carrusell01 from '../Components/Carrusell01'
import Carrusell5 from '../Components/Carrusell5'
import Secciones from '../views/Secciones' 
import Footer from '../Components/Footer'
import Section5 from '../div/Section5'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Showroom from './Showroom'
import Nosotros from './Nosotros'
import Equipo from './Equipo'
import Sevicios from './Servicios'
import Reactiva from './Reactiva'
import Razones from './Razones'
import Hablamos from './Contacto'
import { useMediaQuery } from 'react-responsive';

const Inicio =()=>{
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Detecta si la pantalla es menor a 7
  
  return (
    <>
   
   
   
    {/* <div> */}
    {/* <Pagepilling> */}
    <section className='primera'>
      <div className='loop'>
     
           <ReactPlayer
            url={video}
            playing={true}
            muted={true}
            width="100%"
            height="100%"
            controls={true}
          /> 
       
           {/* <iframe
            src="https://player.vimeo.com/video/1006688970?autoplay=1&muted=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="prueba video inicio"
          ></iframe>  */}
       
      <a className='enlace-bajar' href="#section__dos"><DotLottieReact
               src="https://lottie.host/653b6be2-63a6-4a21-8a3e-d72fc73303ea/muHGJJhidI.lottie"
               loop
               autoplay
             /></a> 
      </div>
    
    </section>
     
   <section id="section__dos">
    <Carrusell0/>
    </section>
   
    {/* <div className='capa'> */}
    {/* <Carrusell01/> */}
    {/* </div> */}
       
    <section id={'carrusell'}>
    <Carrusell  />
    </section> 
    
    <section id={'dos'}>
   <CarrusellUno />
   </section>
   
    <section id={'section_tres'}>
  < Section5/>
  </section  >
  {/* <section id={'ninas'}>
  <Showroom/>
  </section>
  <section id={'nosotros'}>
        <Nosotros />
      </section>
  <section id={'servicios'}>
  <Sevicios/>
  </section>
  <section id={'equipo'}>
  <Equipo/>
  </section>
  <section  id={'reactiva'}>
  <Reactiva/>
  </section>
  <section id={'razones'}>
  <Razones/>
  </section>
  <section id={'contacto'}>
  <Hablamos/>
  </section>
  */}

  
  {/* <section id={'ninas'}>
  <Showroom/>
  </section>
  <section id={'nosotros'}>
  <Nosotros/>
  </section>
 
  <Equipo/> */}
  
    </>
  )
}


export default  Inicio
 

     