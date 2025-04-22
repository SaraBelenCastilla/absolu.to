import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";

import { useRef,useState,useEffect } from "react";

import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaFan } from "react-icons/fa6";
import Formula from '../assets/img/formula.png'
import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GrStatusWarning } from "react-icons/gr";


 const sections = [
     { id: 'section1', title1: 'EXPERIENCIAS', title2: 'QUE GENERAN', title3: 'CONTENIDO' },
    { id: 'section2', title1: 'CONTENIDOS', title2: 'QUE ACTIVAN', title3: 'EXPERIENCIAS' },
     { id: 'section3', title1: 'SIN CUENTOS' },
    { id: 'section4', title1: 'SIN HISTORIAS' }
   ];

function Reactiva() {
 
    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
    
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              window.scrollTo({
                top: entry.target.offsetTop,
                behavior: 'smooth'
              });
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        const sectionElements = document.querySelectorAll('.reactiva__uno');
        sectionElements.forEach(section => observer.observe(section));
    
        return () => {
          sectionElements.forEach(section => observer.unobserve(section));
        };
      }, []);
   
   
  const [modalIsOpen, setModalIsOpen] = useState(false);
   const overlayVariants = {
     visible: {
       opacity: 1,
       transition: {
         when: "beforeChildren",
         duration: 0.3,
         delayChildren: 0.4
       }
     },
     hidden: {
       opacity: 0,
       transition: {
         when: "afterChildren",
         duration: 0.3,
         delay: 0.4
       }
     }
    }  
  
 

 
 
  
  return (
    <>
    
    <div
    
     className="nosotros" >
        <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
       
        <Hero />
        
       
      </ReactLenis>
      </div>
      <div className="reactiva__clara">
        <motion.div className="contenido__clara"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >
            <p className="clara__p">Mezclamos Esencia de Marca con Estrategia </p>
            <p className="clara__p">en la misma proporción. </p>
            <p className="clara__p">Le metemos una buena dosis de Creatividad</p>
            <p className="clara__p">(nunca es demasiada, mejor que rebose) y </p>
            <p className="clara__p">agregamos Contenido fresco, clave para </p>
            <p className="clara__p1">establecer conexiones duraderas."</p>
            <p className="clara__p">En un "plis plas" cristaliza</p>
            
        </motion.div>
        <a className="movimiento1" href='#section1'
      ><DotLottieReact className='abajo1'
          src="https://lottie.host/0e3e0733-1a05-4293-9b5a-6484b91e19f2/07AJWgdqS3.lottie"
          loop
          autoplay
        />
      
            </a> 
      </div>
      {/* {sections.map((section, index) => ( */}
          <section id='section1' className='reactiva__uno' >
            <motion.h2 className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
              viewport={{ once: false, amount: .5 }}
            >
              EXPERIENCIAS
            </motion.h2>
            {/* {section.title2 && ( */}
              <motion.h2 className="reactiva__h2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
                viewport={{ once: false, amount: .5 }}
              >
               QUE GENERAN
              </motion.h2>
            
            {/* {section.title3 && ( */}
              <motion.h2 className="reactiva__h2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
                viewport={{ once: false, amount: .5 }}
              >
                CONTENIDO
              </motion.h2>
            {/* )} */}
             <a className="movimiento" href='#section2'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
          </section>
          <section id='section2' className='reactiva__uno' >
            <motion.h2 className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
              viewport={{ once: false, amount: .5 }}
            >
              CONTENIDOS
            </motion.h2>
            {/* {section.title2 && ( */}
              <motion.h2 className="reactiva__h2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
                viewport={{ once: false, amount: .5 }}
              >
               QUE ACTIVAN
              </motion.h2>
            
            {/* {section.title3 && ( */}
              <motion.h2 className="reactiva__h2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
                viewport={{ once: false, amount: .5 }}
              >
                EXPERIENCIAS
              </motion.h2>
            {/* )} */}
             <a className="movimiento" href='#section3'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
          </section>
          <section id='section3' className='reactiva__uno' >
            <motion.h2 className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
              viewport={{ once: false, amount: .5 }}
            >
              SIN CUENTOS
            </motion.h2>
          
            {/* )} */}
             <a className="movimiento" href='#section4'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
          </section>
          <section id='section4' className='reactiva__uno' >
            <motion.h2 className="reactiva__h2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: 'easeInOut', type: 'spring' } }}
              viewport={{ once: false, amount: .5 }}
            >
              SIN HISTORIAS
            </motion.h2>
          
            {/* )} */}
             <a className="movimiento" href='#warning'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
          </section>

        {/* ))}  */}
       {/* <div className="reactiva__uno"
      
      >
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >EXPERIENCIAS</motion.h2>
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >QUE GENERAN</motion.h2>
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >CONTENIDO</motion.h2>
      </div>
      <div className="reactiva__uno"
      
      >
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >CONTENIDOS</motion.h2>
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >QUE ACTIVAN</motion.h2>
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >EXPERIENCIAS</motion.h2>
      </div>
      <motion.div className="reactiva__uno"
       initial={{opacity:0, y:100}}
       whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
       viewport={{once: false, amount:.5}}
      >
        <h2 className="reactiva__h2">SIN CUENTOS</h2>
       
      </motion.div>
      <div className="reactiva__uno">
        <motion.h2 className="reactiva__h2"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        
        >SIN HISTORIAS</motion.h2>
       
      </div>  */}
      <div className="reactiva__dos" id="warning">
        <motion.div className="reactiva__aviso"
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="titulo__warning">
          <GrStatusWarning  className="icons"/>
            <h2 className="aviso">WARNING </h2>
             </div> 
            <p className="aviso__p">Estás a punto de acceder a nuestro contenido más random.</p>
            <p className="aviso__p">Una fórmula que combina elementos altamente volátiles</p>
            <p className="aviso__p">y de naturaleza impredecible.</p>
            <p className="aviso__p">Si la Química de Marcas no es lo tuyo:</p>
            <p className="aviso__p">Aplícala bajo supervisión de nuestro personal para evitar </p>
            <p className="aviso__p">eventos indeseados.</p>
            <p className="aviso__p">¿Te va el rollo kamikaze? ¡Adelante!</p>
            <p className="aviso__p">Pero si la cosa empieza aponerse fea...</p>
            <p className="aviso__p">¡llámanos de inmediato!</p>
          <button className="boton__aviso" onClick={() => setModalIsOpen(true)}>ENTENDIDO</button>
           <AnimatePresence>
                  {modalIsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={overlayVariants}
                      className="formula-overlay"
                    >
                      <motion.div
                        className="formula"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="formula__h2">FÓRMULA by ABSOLUTO</h2>
                       <img src={Formula} alt="formula" className="formula__img" />
                       
                          <button
                            className="formula-button"
                            onClick={() => setModalIsOpen(false)}
                          >
                            <RiCloseCircleLine className="menu__icon" /> 
                          </button>
                        
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                   
        </motion.div>
        {/* <a className="movimiento" href='#razones'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a>  */}
      </div>
     
      {/* <Schedule/>
      <Tercerita/>
      <Cuartita/> */}
  
  
  </>
  )
}
const SECTION_HEIGHT = 1000;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 120vh)` }}
      className="cotenedor"
    >
      <CenterImage />

       <ParallaxImages />
      

      <div className="final" />
      
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const fontSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT-700],
    ["6em%", "0em"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 700],
    [1, 0]
  );

  return (
    <>
    {/* <motion.div
      className="primer"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    /> */}
     <div className="titulo__nosotros">
        <motion.h1 className="nosotros__h1"
      //  style={{opacity,
      //   fontSize,
      //  }}
      >Reactiva y Clandestina</motion.h1>
        </div>
   
       
        </>
  );
};

const ParallaxImages = () => {
  return (
    <div className="segun">
      {/* <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="uno"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="dos"
      /> */}
      <ParallaxImg
         start={-200}
         end={100}
         className="reactiva__primera"
         
        texto1='Más de 20 años de darle al coco, noches '
        texto2='en vela y café a litros nos llevaron a crear '
        texto3='el método infalible.'
        texto4='La fórmula definitiva para la activación de'
        texto5='marcas y llevarlas al siguiente nivel.'
        
        
      
        />
       
    </div>
  );
};

const ParallaxImg = ({ className,texto2,texto1,texto3,texto4,texto5,  start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <>
    <motion.div
     
      className={className}
      ref={ref}
      style={{ transform, opacity }}
      >
      
        <p  className="nos__p">{texto1}</p>
        
        <p  className="nos__p">{texto2}</p> 
        <p className="nos__p1">{texto3}</p>
        <p className="nos__p">{texto4}</p>
        <p className="nos__p">{texto5}</p>

      </motion.div>
     
      </>
  );
};
const Schedule = () => {
  const SECTION_HEIGHT = 1500;
  return (
    <>
    
    <section
    style={{ height: `calc(${SECTION_HEIGHT}px + 50vh)` }}
      id="launch-schedule"
      className="lauch"
    >
      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="texto"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem
       start={-200}
       end={200}
       title="TRANSFORMAR " date="IDEAS IMPOSIBLES" location="EN MOMENTOS " texto='INOLVIDABLES.' h2=' ABSOLUTO' span='PROPÓSITO'/>
        <ScheduleItem
         start={-100}
         end={200}
        
        title="ACTIVAR VÍCULOS" date="EMOCIONALES GENUINOS" location="ENTRE MARCAS Y " texto='PERSONAS.'  h2=' ABSOLUTO' span='COMPROMISO '/>
      {/* <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" /> */}
    </section>
    </>
  );
};
const ScheduleItem = ({title,date,location,texto,h2,span,  start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

 


  return (
    <>
    <motion.div
    ref={ref}
    style={{ transform, opacity,scale }}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="item__uno"
    >
      <div>
        <p className="shedule__p">{title}</p>
        <p className="shedule__p">{date}</p>
     
        <p className="shedule__p">{location}</p>
        <p className="shedule__p">{texto}</p>
      
      </div> 

    </motion.div>
    
    <h2 className="shedule__h2"><span className="shedule__span     ">{span}</span>{h2}</h2>
    </>
  );
};

const Tercerita =()=>{
  return(
    <>
    <div className="tercerita__div">
      <motion.p className="tercerita__p"
       initial={{opacity:0, y:100}}
       whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
       viewport={{once: false, amount:.5}}
      >Mediante estrategias omnicanal 360º, planificamos y producimos experiencias inmersivas y disruptivas, diseñadas para sentir, vivir y conectar con la esencia de la marca.</motion.p>
      <motion.h2 className="tercerita__h2"
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
      viewport={{once: false, amount:.5}}
      >ARTESANOS DEL  ENGAGEMENT </motion.h2>
    </div>
   
    </>
  )

}

const Cuartita =()=>{
  return(
    <>
    <div className="cuartita">
     
      <FaFan id="circular" />

    </div>
    </>
  )
}
     
 


export default Reactiva

