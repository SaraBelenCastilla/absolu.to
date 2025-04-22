import React from 'react'
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useWindowWidth from '../Components/useWindowWidth';
function Section45() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segundaCuatro'
      style={{with:anchoVentana}}
     >
     <div className="trs__contenido">
     <motion.h2 className="c__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >GENERAR   </motion.h2>
        <motion.h2 className="c__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >ENGAGEMENT   </motion.h2>
        <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >EN MINUTO Y MEDIO  </motion.h2>
    </div>
   
    <a className='flechitas' href={"#carrusellCinco"}><DotLottieReact
      src="https://lottie.host/29b477c5-4291-4dd2-bbb4-0b83d69fb3f2/UGVbrOOk7P.json"
      loop
      autoplay
    /></a>
    </div>
    </>
    
  )
}

export default Section45