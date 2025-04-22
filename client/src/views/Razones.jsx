import React,{useRef} from 'react'

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Plus from '/plus.png'
import Razon2 from '../div/Razon2'
import Carro from '../Components/Carro'
import Razon7 from '../div/Razon7';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


var anchoVentana = window.innerWidth
  window.onresize = function(){

    anchoVentana = window.innerWidth;
    console.log(anchoVentana)
   
   };

const Inicio =()=>{
  
    return (
      <>
     <div className="razones"
       style={{with:anchoVentana}}
     >
        <motion.h1 className="razones__h1"
         initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >7 razones</motion.h1>
        <motion.img src={Plus} alt="" className="plus"
         initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.6, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        />
        <motion.h2 className="razones__h2"
         initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.8, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
        >para creer</motion.h2>
    
         {/* <a className='flechitas' href={"#carro"}> <DotLottieReact
                       src="https://lottie.host/54e68d0e-fe08-4044-acd0-ea9942e856fb/UmjcekdDNO.lottie"
                       loop
                       autoplay
                     /></a> */}
         <a className="movimiento" href='#carro'
            ><DotLottieReact className='abajo'
                src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                loop
                autoplay
              />
            
                  </a> 
     </div>
     {/* <section className='razon__01'
       style={{with:anchoVentana}}
     >
        <motion.h2 className="razon__h2"
         initial={{opacity:0, y:150,scale:0.5}}
         whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
         >RAZÓN 01</motion.h2>
            <motion.p className="razones__p"
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >Porque nuestro know-how no
            </motion.p>
            <motion.p className="razones__p"
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >está en los libros, se aprende
            </motion.p>
            <motion.p className="razones__p"
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >en el campo de trabajo. 
            </motion.p>
            <motion.p className="razones__p"
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            >Actuamos, no teorizamos. 
            </motion.p>


     </section> */}
     
     <section id={'carro'} >
    <Carro />
    </section> 
   
      </>
    )
  }
 
  
  export default  Inicio