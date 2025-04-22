import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Razon3() {
 
   const anchoVentana = useWindowWidth();
   return (
    <>
     <section className='razon__03'
           style={{width:anchoVentana}}
         >
            <motion.h2 className="razon__h2"
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
             >RAZÓN 03</motion.h2>
              <motion.div className="razones__div"
                           initial={{opacity:0, y:100}}
                           whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                           viewport={{once: false, amount:.5}}
                          >
                <motion.p className="razones__p"
                
                >Porque sacamos músculo 
                </motion.p>
                <motion.p className="razones__p"
                 
                >para gestionar plazos 
                </motion.p>
                <motion.p className="razones__p"
                 
                >imposibles y cambios de  
                </motion.p>
                <motion.p className="razones__p"
                 
                >última hora. 
                </motion.p>
                </motion.div>
         <motion.div className="razon__pie"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
         >
            <p className="pie__razon">IMPULSO <span className="pie">ABSOLUTO</span></p>
         </motion.div>
    
         </section>
    
    </>
)
}

export default Razon3