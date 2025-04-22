import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Razon1() {
    const anchoVentana = useWindowWidth();
   
   
   return (
    <>
     <section className='razon__01'
           style={{width:anchoVentana}}
         >
            
            <motion.h2 className="razon__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
             style={{with:anchoVentana}}
             >RAZÓN 01</motion.h2>
             <motion.div className="razones__div"
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
              viewport={{once: false, amount:.5}}
             >
                <motion.p className="razones__p"
                
                >Porque nuestro know-how no
                </motion.p>
                <motion.p className="razones__p"
                
                >está en los libros, se aprende
                </motion.p>
                <motion.p className="razones__p"
                
                >en el campo de trabajo. 
                </motion.p>
                <motion.p className="razones__p"
                
                >Actuamos, no teorizamos. 
                </motion.p>
                </motion.div>
         <motion.div className="razon__pie"
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
          viewport={{once: false, amount:.5}}
         >
            <p className="pie__razon">ESFUERZO <span className="pie">ABSOLUTO</span></p>
         </motion.div>
    
         </section>
    
    </>
)
}

export default Razon1