import React ,{useEffect,useRef,useState} from 'react'
// import {backInOut, motion}from "framer-motion";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


 const iconos = [
    {
      index:1,
      icon:'https://live.staticflickr.com/65535/53466299340_b761d8d5c5_n.jpg',
     
    },
    {
      index:2,
      icon:'https://live.staticflickr.com/65535/53465845681_588cde11c1_n.jpg',
      
    },
    {
      index:3,
      icon:'https://live.staticflickr.com/65535/53466289865_4623d9c3ae_n.jpg',
     
    },
    {
      index:4,
      icon:'https://live.staticflickr.com/65535/54435859027_f1b3f9c41f_n.jpg',
      
    },
    {
      index:5,
      icon:'https://live.staticflickr.com/65535/53465964803_8af15f4075_n.jpg',
     
    },
    {
      index:6,
      icon:'https://live.staticflickr.com/65535/54436909724_9164d03555_n.jpg',
      
    },
    {
      index:7,
      icon:'https://live.staticflickr.com/65535/53471393438_c38ce914d1_n.jpg',
     
    },
    {
      index:8,
      icon:'https://live.staticflickr.com/65535/53471665890_9c74228aed_n.jpg',
      
  
    },]

    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    };
    
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };
    
    function Servicios() {
      const [isVisible, setIsVisible] = useState(false);
      const serviciosRef = useRef(null);
    
      useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
    
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        if (serviciosRef.current) {
          observer.observe(serviciosRef.current);
        }
    
        return () => {
          if (serviciosRef.current) {
            observer.unobserve(serviciosRef.current);
          }
        };
      }, []);
     
      return (
        <>
        <div className="servicios"  ref={serviciosRef}>
         
           
        <motion.ul
        className="servicios__container"
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {iconos.map((index) => (
          <motion.li key={index.index} className="item" variants={item}>
            <img className='img__item' src= {index.icon} alt="" />
            <div className="servicios__descripcion"
            style={{backgroundColor:index.color}}
            >
              <h2 className="servicios__h2">{index.h2}</h2>
            </div>
           
            </motion.li> 
        ))}
      </motion.ul>
      {/* <a className="movimiento" href='#equipo'
                ><DotLottieReact className='abajo'
                    src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                    loop
                    autoplay
                  />
                
                      </a>  */}
      </div>
     
      </>
      )
    }
    
    export default Servicios