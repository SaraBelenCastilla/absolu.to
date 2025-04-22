import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';


function Razon4() {
   const anchoVentana = useWindowWidth();
   return (
    <>
     <section className='razon__04'
           style={{width:anchoVentana}}
         >
            <motion.h2 className="razon__h2"
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
             >RAZÓN 04</motion.h2>
              <motion.div className="razones__div"
                           initial={{opacity:0, y:100}}
                           whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                           viewport={{once: false, amount:.5}}
                          >
                <motion.p className="razones__p"
                
                >Porque estamos en 
                </motion.p>
                <motion.p className="razones__p"
                
                >continuo "reskilling" en
                </motion.p>
                <motion.p className="razones__p"
                
                >tendencias  e innovación 
                </motion.p>
                <motion.p className="razones__p"
                
                >tecnológica. 
                </motion.p>
                </motion.div>
         <motion.div className="razon__pie"
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
         viewport={{once: false, amount:.5}}
         >
            <p className="pie__razon">ESPIRITU <span className="pie">ABSOLUTO</span></p>
         </motion.div>
    
         </section>
    
    </>
)
}

export default Razon4