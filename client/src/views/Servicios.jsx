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
    icon:'https://live.staticflickr.com/65535/54436989324_99c70c7751_n.jpg',
    h2:'CREATIVIDAD & ESTRATEGIA',
   color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:2,
    icon:'https://live.staticflickr.com/65535/54436992024_b46b4e3c7b_n.jpg',
    h2: 'ACTIVACIONES',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:3,
    icon:'https://live.staticflickr.com/65535/54121598878_5e1224f4f0_n.jpg',
    h2:'EXPERIENCIAS',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:4,
    icon:'https://live.staticflickr.com/65535/54436995649_97b2f13ff4_n.jpg',
    h2:' BRANDED CONTENT',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:5,
    icon:'https://live.staticflickr.com/65535/54121591838_c6641a639c_n.jpg',
    h2:'INTEGRACIÓN DIGITAL',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:6,
    icon:'https://live.staticflickr.com/65535/54121328881_63e5a1cc8d_n.jpg',
    h2:'EVENTOS',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:7,
    icon:'https://live.staticflickr.com/65535/54121326571_b7d123e10f_n.jpg',
    h2:'PATROCINIOS',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:8,
    icon:'https://live.staticflickr.com/65535/54121330826_2795765563_n.jpg',
    h2:'ROADSHOWS',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:9,
    icon:'https://live.staticflickr.com/65535/54121325891_4f3f711cea_n.jpg',
    h2:'STREET MARKETING', 
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:10,
    icon:'https://live.staticflickr.com/65535/54120480677_c1015e74a7_n.jpg',
    h2:'RETAIL ENGAGEMENT',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:11,
    icon:'https://live.staticflickr.com/65535/54437061383_36d0862644_n.jpg',
    h2:'POP UPs ',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:12,
    icon:'https://live.staticflickr.com/65535/54437063743_d76c8bc51d_n.jpg',
    h2:'GASTRO EXPERIENCE',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:13,
    icon:'https://live.staticflickr.com/65535/54437190355_28b4bd10da_n.jpg',
    h2:'SAMPLING',
    color:'rgba(255, 255, 255, 0.8)'


  },
  {
    index:14,
    icon:'https://live.staticflickr.com/65535/54120467107_1e179da6f5_n.jpg',
    h2:'PR EVENTS',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:15,
    icon:'https://live.staticflickr.com/65535/54121774615_e5da578813_n.jpg',
    h2:'HOSPITALITY',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:16,
    icon:'https://live.staticflickr.com/65535/54121665424_1413817976_n.jpg',
    h2:'DISEÑO DE ESPACIOS',
    color:'rgba(255, 255, 255, 0.8)'
  },
  {
    index:17,
    icon:'https://live.staticflickr.com/65535/54435969512_41b12c3920_n.jpg',
    h2:'LIVE SHOWS', 
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:18,
    icon:'https://live.staticflickr.com/65535/54436833441_607290de9c_n.jpg',
    h2:'PRODUCCIÓN AUDIOVISUAL',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:19,
    icon:'https://live.staticflickr.com/65535/54120472127_546704e842_n.jpg',
    h2:'PRODUCCIÓN TÉCNICA',
    color:'rgba(255, 255, 255, 0.8)'

  },
  {
    index:20,
    icon:'https://live.staticflickr.com/65535/54121318681_c70ffffa80_n.jpg',
    h2:'PRODUCCION LOGÍSTICA',
    color:'rgba(255, 255, 255, 0.8)'

  },

]


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
  <a className="movimiento" href='#equipo'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
  </div>
 
  </>
  )
}

export default Servicios