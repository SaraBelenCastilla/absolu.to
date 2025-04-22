import React from 'react'
import {motion} from 'framer-motion'

function Section41() {
  var anchoVentana = window.innerWidth
  window.onresize = function(){

    anchoVentana = window.innerWidth;
    console.log(anchoVentana)
   
   };
  return (
    <>
     <div className='segundaCuatro'
      style={{with:anchoVentana}}
     >
     <div className="trs__contenido">
     <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >ACTIVAR   </motion.h2>
        <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >VÍNCULOS EMOCIONALES  </motion.h2>
        <motion.h2 className="t__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >ENTRE MARCAS Y PERSONAS.   </motion.h2>
     </div>
     </div>
    </>
  )
}

export default Section41