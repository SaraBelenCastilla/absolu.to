import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';
function Section43() {
  const anchoVentana = useWindowWidth();
  return (
   <>
   <div className='segundaCuatro'
     style={{with:anchoVentana}}
   >
   <div className="trs__contenido">
   <motion.h2 className="cuatro__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >El desafío:   </motion.h2>
        <motion.h3 className="cuatro__h3"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >90 SEGUNDOS   </motion.h3>
    </div>
    </div>
   </>
  )
}

export default Section43