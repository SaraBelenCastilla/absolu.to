import React,{useState,useEffect} from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';


function Razon5() {
   
   const anchoVentana = useWindowWidth();
   return (
    <>
     <section className='razon__05'
           style={{width:anchoVentana}}
         >
            <motion.h2 className="razon__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
             >RAZÓN 05</motion.h2>
              <motion.div className="razones__div"
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                                        viewport={{once: false, amount:.5}}
                                       >
                <motion.p className="razones__p"
                
                >Porque nos encanta
                </motion.p>
                <motion.p className="razones__p"
                
                >ser el alma de la fiesta, 
                </motion.p>
                <motion.p className="razones__p"
                
                >y cómo no...
                </motion.p>
                <motion.p className="razones__p"
                
                >¡Petarlo siempre! 
                </motion.p>
                </motion.div>
         <motion.div className="razon__pie"
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
          viewport={{once: false, amount:.5}}
         >
            <p className="pie__razon">DESEMPEÑO <span className="pie">ABSOLUTO</span></p>
         </motion.div>
    
         </section>
    
    </>
)
}

export default Razon5