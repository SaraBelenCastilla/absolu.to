import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
    AnimatePresence,
} from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { useRef,useState,useEffect } from "react";

// const textos = [
//   {
//     index: 1,h3:'hola',h4:'adios'
//   },
//   {
//     index: 2,h3:'adios',h4:'hola'
//   },
//   {
//     index: 3,h3:'hola',h4:'adios'
//   },
//   {
//     index: 4,h3:'hola',h4:'adios'
//   },
//   {
//     index: 5,h3:'hola',h4:'adios'
//   },
//   {
//     index: 6,h3:'hola',h4:'adios'
//   },
//   {
//     index: 7,h3:'hola',h4:'adios'
//   },
//   {
//     index: 1,h3:'hola',h4:'adios'
//   },
// ]
function Equipo() {
   
  
 const [desplegado,setDesplegado]=useState(false)
 const [desplegadoUno,setDesplegadoUno]=useState(false)
 const [desplegadoDos,setDesplegadoDos]=useState(false)
 const [desplegadoTres,setDesplegadoTres]=useState(false)
 const [desplegadoCuatro,setDesplegadoCuatro]=useState(false)
 const [desplegadoCinco,setDesplegadoCinco]=useState(false)
 const [desplegadoSeis,setDesplegadoSeis]=useState(false)
 const [desplegadoSiete,setDesplegadoSiete]=useState(false)
 const desplegar=()=>{
   setDesplegado(!desplegado)
 }
 const desplegarUno=()=>{
  setDesplegadoUno(!desplegadoUno)
}
const desplegarDos=()=>{
  setDesplegadoDos(!desplegadoDos)
}
const desplegarTres=()=>{
  setDesplegadoTres(!desplegadoTres)
}
const desplegarCuatro=()=>{
  setDesplegadoCuatro(!desplegadoCuatro)
}
const desplegarCinco=()=>{
  setDesplegadoCinco(!desplegadoCinco)
}
const desplegarSeis=()=>{
  setDesplegadoSeis(!desplegadoSeis)
}
const desplegarSiete=()=>{
  setDesplegadoSiete(!desplegadoSiete)
}

 const plegar=()=>{
   setDesplegado(false)
 }
 const plegarUno=()=>{
  setDesplegadoUno(false)
}
const plegarDos=()=>{
  setDesplegadoDos(false)
}
const plegarTres=()=>{
  setDesplegadoTres(false)
}
const plegarCuatro=()=>{
  setDesplegadoCuatro(false)
}
const plegarCinco=()=>{
  setDesplegadoCinco(false)
}
const plegarSeis=()=>{
  setDesplegadoSeis(false)
}
const plegarSiete=()=>{
  setDesplegadoSiete(false)
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
      <div className='showroon' id='show'>
     

      
     <div className="container"
     
     >
    <img className='img'
      src="https://live.staticflickr.com/65535/54355434767_64d2d61b1e_n.jpg" onMouseEnter={desplegar}  onMouseLeave={plegar} />
    
    <img className='img'
      src="https://live.staticflickr.com/65535/54356316771_92647342f8_n.jpg" onMouseEnter={desplegarUno}  onMouseLeave={plegarUno}/>
    <img className='img'
      src="https://live.staticflickr.com/65535/54356523339_b51fb50689_n.jpg"  onMouseEnter={desplegarDos}  onMouseLeave={plegarDos} />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356545503_575ea76c48_n.jpg" onMouseEnter={desplegarTres}  onMouseLeave={plegarTres} />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356542093_d3c27b11d6_n.jpg" onMouseEnter={desplegarCuatro}  onMouseLeave={plegarCuatro} />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356544113_a505342e04_n.jpg" onMouseEnter={desplegarCinco}  onMouseLeave={plegarCinco} />
    <img className='img'
      src="https://live.staticflickr.com/65535/54356520034_b13215624f_n.jpg" onMouseEnter={desplegarSeis}  onMouseLeave={plegarSeis} />
    <img className='img'
      src="https://live.staticflickr.com/65535/54355438187_a3d5d6b821_n.jpg" onMouseEnter={desplegarSiete}  onMouseLeave={plegarSiete} />
</div>
{/* {textos.map((texto,index) => (   */}
     <div className={`descripcion ${desplegado? 'active':''}`} >
      <h3 className="des__h3">C.E.O.</h3>
      <h4 className="des__h4">Couch Executive Officer</h4>
     </div>
      
       <div className={`descripcionUno ${desplegadoUno? 'active':''}`} >
      <h3 className="des__h3">El Capi</h3>
      <h4 className="des__h4">Director Creativo</h4>
     </div>
     <div className={`descripcionDos ${desplegadoDos? 'active':''}`} >
      <h3 className="des__h3">Miss Insight</h3>
      <h4 className="des__h4">Copy</h4>
     </div>
     <div className={`descripcionTres ${desplegadoTres? 'active':''}`} >
      <h3 className="des__h3">Tweety</h3>
      <h4 className="des__h4">Social Media</h4>
     </div>
     <div className={`descripcionCuatro ${desplegadoCuatro? 'active':''}`} >
      <h3 className="des__h3">LaBanksy</h3>
      <h4 className="des__h4">Puro Arte</h4>
     </div>
     <div className={`descripcionCinco ${desplegadoCinco? 'active':''}`} >
      <h3 className="des__h3">Tarantino</h3>
      <h4 className="des__h4">Audiovisuales</h4>
     </div>
     <div className={`descripcionSeis ${desplegadoSeis? 'active':''}`} >
      <h3 className="des__h3">Dora la Exploradora</h3>
      
      <h4 className="des__h4">location Manager</h4>
     </div>
     <div className={`descripcionSiete ${desplegadoSiete? 'active':''}`} >
      <h3 className="des__h3">MacGyver</h3>
      <h4 className="des__h4">Producción</h4>
     </div>
     <div className="gallery">
      <img src="https://live.staticflickr.com/65535/54355434767_64d2d61b1e_n.jpg" alt=""    onMouseEnter={desplegar}  onMouseLeave={plegar}/>
      <img src="https://live.staticflickr.com/65535/54356316771_92647342f8_n.jpg" alt="" onMouseEnter={desplegarUno}  onMouseLeave={plegarUno}/>
      <img src="https://live.staticflickr.com/65535/54356523339_b51fb50689_n.jpg" alt=""   onMouseEnter={desplegarDos}  onMouseLeave={plegarDos}/>
      <img src="https://live.staticflickr.com/65535/54356545503_575ea76c48_n.jpg" alt=""  onMouseEnter={desplegarTres}  onMouseLeave={plegarTres}/>
     </div>
     <div className="gallery">
      <img src="https://live.staticflickr.com/65535/54356542093_d3c27b11d6_n.jpg" alt=""  onMouseEnter={desplegarCuatro}  onMouseLeave={plegarCuatro}/>
      <img src="https://live.staticflickr.com/65535/54356544113_a505342e04_n.jpg" alt=""  onMouseEnter={desplegarCinco}  onMouseLeave={plegarCinco}/>
      <img src="https://live.staticflickr.com/65535/54356520034_b13215624f_n.jpg" alt=""  onMouseEnter={desplegarSeis}  onMouseLeave={plegarSeis}/>
      <img src="https://live.staticflickr.com/65535/54355438187_a3d5d6b821_n.jpg" alt=""  onMouseEnter={desplegarSiete}  onMouseLeave={plegarSiete}/>
     </div>

     <a className="movimiento" href='#reactiva'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
     </div>
     
     {/* <Schedule/>
     <Tercerita/>
     <Cuartita/> */}
 
 
 </>
 )
}
const SECTION_HEIGHT = 1100;

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
      >El equipo es lo primero</motion.h1>
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
           start={100}
           end={-100}
           className="equipo__primera"
           
          texto1='Dada la naturaleza de los proyectos en los que '
          texto2='trabajamos, la discreción es fundamental.  '
          texto3='Mantener nuestros rostros e identidades'
          texto4='ocultas es parte del juego.'
         
          
          
        
          />
         
      </div>
    );
  };
  
  const ParallaxImg = ({ className,texto2,texto1,texto3,texto4,  start, end }) => {
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
          
          <p  className="nos__p1">{texto2}</p> 
          <p className="nos__p">{texto3}</p>
          <p className="nos__p">{texto4}</p>
         
  
        </motion.div>
       
        </>
    );
  };

export default Equipo;