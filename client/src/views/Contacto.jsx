import React from 'react'
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Contacto() {
  return (
    <div className='contacto'>
     <motion.h1 className="contacto__h1"
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
      viewport={{once: false, amount:.5}}
     >¡Hablemos!</motion.h1>
     <motion.p className="contacto__p"
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0, transition:{delay:0.6, duration:1,  ease:'easyInOut',type:'spring'}}}
      viewport={{once: false, amount:.5}}
     >¿Estás más perdido que un GPS en el túnel de la M30?
 </motion.p>
     
     <motion.p className="contacto__p"
     initial={{opacity:0, y:100}}
     whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
     viewport={{once: false, amount:.5}}
     >¿Tienes un briefing tan enrevesado como las instrucciones de montaje de un mueble sueco? </motion.p>
     <div className="contacto__pie">
     <div className='animacio'><DotLottieReact
    src="https://lottie.host/da79f46d-cd7e-4833-8916-48ce9913d2be/pd61zutyrT.json"
    loop
    autoplay
  /></div>
     <h2 className="contacto__h2">¡No te comas el coco!</h2>
    </div>
    </div>
  )
}

export default Contacto