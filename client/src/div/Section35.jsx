import React from 'react'
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Section35() {
  var anchoVentana = window.innerWidth
  window.onresize = function(){

    anchoVentana = window.innerWidth;
    console.log(anchoVentana)
   
   };
  return (
    <>
     <div className='segundaTres'
      style={{with:anchoVentana}}
     >
     <div className="trs__contenido">
     <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >JUNTOS,   </motion.h2>
        <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >NO HAY BRIEFING   </motion.h2>
        <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >QUE SE NOS RESISTA.   </motion.h2>
     </div>
    
     <a className='flechitas' href={"#carrusellUno"}><DotLottieReact
      src="https://lottie.host/29b477c5-4291-4dd2-bbb4-0b83d69fb3f2/UGVbrOOk7P.json"
      loop
      autoplay
    /></a>
     </div>
    </>
    
  )
}

export default Section35