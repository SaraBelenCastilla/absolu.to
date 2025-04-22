import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Razon6() {
   const anchoVentana = useWindowWidth();
   return (
    <>
     <section className='razon__06'
           style={{width:anchoVentana}}
         >
            <motion.h2 className="razon__h2"
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
             >RAZÓN 06</motion.h2>
              <motion.div className="razones__div"
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0, transition:{delay:0.8, duration:1,  ease:'easyInOut',type:'spring'}}}
                                        viewport={{once: false, amount:.5}}
                                       >
                <motion.p className="razones__p"
                 
                >Porque somos creativos, 
                </motion.p>
                <motion.p className="razones__p"
                 
                >multidisciplinares, intuitivos,
                </motion.p>
                <motion.p className="razones__p"
                
                >versátiles...
                </motion.p>
                <motion.p className="razones__p"
                 
                >Vamos que, hacemos casi de  
                </motion.p>
                <motion.p className="razones__p"
                 
                >todo, y además lo hacemos bien.
                </motion.p>
                </motion.div>
         <motion.div className="razon__pie"
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
          viewport={{once: false, amount:.5}}
         >
        
    
            <p className="pie__razon">DOMINIO <span className="pie">ABSOLUTO</span></p>
         </motion.div>
       
          
         </section>
         
    
    </>
)
}

export default Razon6