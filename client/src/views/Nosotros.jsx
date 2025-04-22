import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  
} from "framer-motion";

import react,{ useRef } from "react";

import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaFan } from "react-icons/fa6";
import Png from '../assets/img/360.png'
import Servicios from'../views/Servicios'
import Papel from '../assets/papelitos/fuck.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {Link,useNavigate} from 'react-router-dom'
import Nop from '../assets/papelitos/nop.png'

function Nosotros() {
 
  // const sectionRefs = useRef([]);

  // const handleScroll = (e) => {
  //   const currentIndex = sectionRefs.current.findIndex(
  //     (section) => section.getBoundingClientRect().top >= 0
  //   );

  //   if (e.deltaY > 0 && currentIndex < sectionRefs.current.length - 1) {
  //     // Scroll hacia abajo
  //     sectionRefs.current[currentIndex + 1].scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   } else if (e.deltaY < 0 && currentIndex > 0) {
  //     // Scroll hacia arriba
  //     sectionRefs.current[currentIndex - 1].scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
 
 
  
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
        <HeroUno/>
       
      </ReactLenis>
     
      
      <section className='nosotros__01'
        
          >
            <motion.div
             initial={{opacity:0, y:100,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}  
            >
             <h2 className="nos__h2"
             
              >TRANSFORMAR  </h2>
                 <h2 className="nos__h2"
                
                 >IDEAS IMPOSIBLES  
                 </h2>
                 <h2 className="nos__h2"
                 
                 >EN MOMENTOS 
                 </h2>
                 <h2 className="nos__h2"
                
                 >INOLVIDABLES.
                 </h2>
                
          <div className="razon__pie">
             <p className="pie__nosotros">PROPÓSITO <span className="pie__span">ABSOLUTO</span></p>
          </div>
         
          </motion.div>
          <a className="movimiento1" href='#siguiente'
      ><DotLottieReact className='abajo1'
          src="https://lottie.host/0e3e0733-1a05-4293-9b5a-6484b91e19f2/07AJWgdqS3.lottie"
          loop
          autoplay
        />
      
            </a> 
          </section>
          <section className='nosotros__01' id="siguiente"
          
          >
            <motion.div
             initial={{opacity:0, y:100,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >
             <motion.h2 className="nos__h2"
             
              >ACTIVAR   </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >VÍCULOS GENUINOS   
                 </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >ENTRE MARCAS Y 
                 </motion.h2>
                 <motion.h2 className="nos__h2"
                 
                 >PERSONAS.
                 </motion.h2>
                
          <div className="razon__pie">
             <p className="pie__nosotros">COMPROMISO <span className="pie__span">ABSOLUTO</span></p>
          </div>
         
          </motion.div>
          <a className="movimiento1" href='#pero'
      ><DotLottieReact className='abajo1'
          src="https://lottie.host/0e3e0733-1a05-4293-9b5a-6484b91e19f2/07AJWgdqS3.lottie"
          loop
          autoplay
        />
      
            </a> 
         
          </section>
          <div className="nosotros__pero" id="pero">
            <div className="pero__papel">
            <motion.h2 className="pero__h2"
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >¿PERO QUÉ</motion.h2> 
            <div className="per__papel"> <motion.img src={Papel} alt="fuck" className="per__img" 
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            /></div>
           
            </div>
           
            <motion.h2 className="pero__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >HACE ESTA PEÑA?</motion.h2>
             <a className="movimiento" href='#png'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
          </div>
          <div className="png" id="png"
          
          >
            <motion.div className="png__div"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >
            <img src={Png} alt="png" className="png__imagen"
            
            /> 
            <a className="movimiento" href='#servicios'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
             {/* <Link className='flechita__png' to={'#servicios'}> <DotLottieReact
                                  src="https://lottie.host/653b6be2-63a6-4a21-8a3e-d72fc73303ea/muHGJJhidI.lottie"
                                  loop
                                  autoplay
                                /></Link> */}
           
            </motion.div>
           
          </div>
          </div>
          {/* <Servicios/> */}
     
      {/* <Schedule/>
      <Tercerita/>
      <Cuartita/> */}
  
  
  </>
  )
}
const SECTION_HEIGHT = 500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 200vh)` }}
      className="cotenedor"
    >
      <CenterImage />

       <ParallaxImages />
      

      <div className="final" />
      
    </div>
  );
};
const CenterImage = ({start,end}) => {
  //  const { scrollY } = useScroll();
  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: [`${start}px end`, `end ${end * -1}px`],
  // });

  // const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  // const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  // const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // const backgroundSize = useTransform(
  //   scrollY,
  //   [0, SECTION_HEIGHT + 500],
  //   ["170%", "100%"],
    
  // );
  // const fontSize = useTransform(
  //   scrollY,
  //   [0, SECTION_HEIGHT],
  //   ["8em%", "0em"],
   
  // );
  // const opacity = useTransform(
  //   scrollY,
  //   [SECTION_HEIGHT, SECTION_HEIGHT + 700],
  //   [1, 0],
   
  // );

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
      //  ref={ref}
      
      >SOMOS ABSOLUTO</motion.h1>
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
         className="nosotros__primera"
         
        texto1='Expertos en diseñar y producir Experiencias de Marca.'
        texto2='Chiquitos pero con mucho Swag.'
        texto3='Lo difícil nos motiva, lo imposible nos activa.'
        texto4=''
       
        
      
        />
          {/* <ParallaxImg
        
        start={200}
        end={-100}
        className="nosotros__segunda"
        texto1='¿RECIÉN ATERRIZADOS?'
        img={Nop}
        texto2='Todo comenzó en 2001 como Areté Comunicación.'
        texto3=''
      />    */}
         {/* <ParallaxImg
        
        start={200}
        end={-100}
        className="nosotros__segunda"
        texto1='Con HQ en Madrid y Sevilla, un equipo renovado,'
        texto2='y la misma pasión por hacer las cosas bien.'
        texto3=''
      />   
       <ParallaxImg
        
        start={300}
        end={-200}
        className="nosotros__segunda"
        texto1='Ahora más dinámicos, más creativos,'
        texto2='más Swaggers que nunca.'
        texto3=''
        texto4=''

      />   */}
        {/* <a className="movimiento" href='#nosotros'
      ><DotLottieReact className='abajo'
          src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
          loop
          autoplay
        />
      
            </a>     */}
    </div>
  );
};

const ParallaxImg = ({ className,title,texto1,texto3,texto2,texto4,  start, end }) => {
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
        {/* <img className="nop" src={img} alt="nop" />
        <img className="nop" src={img} alt="nop" /> */}
       
        <p  className="nos__p1">{texto2}</p> 
        <p className="nos__p">{texto3}</p>
        <p className="nos__p">{texto4}</p>

      </motion.div>
     
      </>
  );
};

const SECTION_HEIGHT1 = 500;

const HeroUno = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT1}px + 200vh)` }}
      className="cotenedor"
    >
      <CenterImageUno />

       <ParallaxImagesUno />
      

      <div className="final" />
      
    </div>
  );
};
const CenterImageUno = ({start,end}) => {
  //  const { scrollY } = useScroll();
  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: [`${start}px end`, `end ${end * -1}px`],
  // });

  // const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  // const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  // const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // const backgroundSize = useTransform(
  //   scrollY,
  //   [0, SECTION_HEIGHT + 500],
  //   ["170%", "100%"],
    
  // );
  // const fontSize = useTransform(
  //   scrollY,
  //   [0, SECTION_HEIGHT],
  //   ["8em%", "0em"],
   
  // );
  // const opacity = useTransform(
  //   scrollY,
  //   [SECTION_HEIGHT, SECTION_HEIGHT + 700],
  //   [1, 0],
   
  // );

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
     <div className="titulo__nop">
        <motion.h2 className="nosotros__h2"
      //  style={{opacity,
      //   fontSize,
      //  }}
      //  ref={ref}
      
      >¿RECIÉN ATERRIZADOS?</motion.h2>
      <img className="nop" src={Nop} alt="nop" />
      {/* <img className="nop" src={Nop} alt="nop" /> */}
        <p className="nos__nop">Todo comenzó en 2001 como Areté Comunicación.</p>
        </div>
   
       
        </>
  );
};

const ParallaxImagesUno = () => {
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
      {/* <ParallaxImg
         start={-200}
         end={100}
         className="nosotros__primera"
         
        texto1='Expertos en diseñar y producir Experiencias de Marca.'
        texto2='Chiquitos pero con mucho Swag.'
        texto3='Lo difícil nos motiva, lo imposible nos activa.'
        texto4=''
       
        
      
        />
          <ParallaxImg
        
        start={200}
        end={-100}
        className="nosotros__segunda"
        texto1='¿RECIÉN ATERRIZADOS?'
        img={Nop}
        texto2='Todo comenzó en 2001 como Areté Comunicación.'
        texto3=''
      />    */}
         <ParallaxImg
        
        start={200}
        end={-100}
        className="nosotros__segunda"
        texto1='Con HQ en Madrid y Sevilla, un equipo renovado,'
        texto2='y la misma pasión por hacer las cosas bien.'
        texto3=''
      />   
       <ParallaxImg
        
        start={300}
        end={-200}
        className="nosotros__segunda"
        texto1='Ahora más dinámicos, más creativos,'
        texto2='más Swaggers que nunca.'
        texto3=''
        texto4=''

      />  
        {/* <a className="movimiento" href='#nosotros'
      ><DotLottieReact className='abajo'
          src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
          loop
          autoplay
        />
      
            </a>     */}
    </div>
  );
};

const ParallaxImgUno = ({ className,title,texto1,texto3,texto2,texto4,img,  start, end }) => {
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
        <img className="nop" src={img} alt="nop" />
        <img className="nop" src={img} alt="nop" />
       
        <p  className="nos__p1">{texto2}</p> 
        <p className="nos__p">{texto3}</p>
        <p className="nos__p">{texto4}</p>

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
        
        title="ACTIVAR " date="VÍCULOS GENUINOS" location="ENTRE MARCAS Y " texto='PERSONAS.'  h2=' ABSOLUTO' span='COMPROMISO '/>
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
     
 


export default Nosotros

