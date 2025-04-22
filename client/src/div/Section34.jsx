import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Section34() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segunda34'
      style={{with:anchoVentana}}
     >
       
        <div className="tercera__tres">
        <motion.h2 className="ter__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >La Alianza   </motion.h2>

            <motion.div className="trs__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>En mi anhelo por crear un equipo
</p>
                 <p>invencible, encontré un socio que</p>
                 <p>comparte mi visión y pasión: </p>
                 <p>ABSOLUTO EXPERIENTIAL.</p>

            </motion.div>
            {/* <motion.h3 className="tercera__h3"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >ABSOLUTO EXPERIENTIAL   </motion.h3> */}
        <motion.div className="trs__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>Juntos, llevamos más de 20 años 
</p>
                <p>superando retos.</p>

            </motion.div>
          
        </div>
         <motion.div className="segunda__movil"
                            initial={{opacity:0, y:150,scale:0.5}}
                            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
                            viewport={{once: false, amount:.5}}
                            
                            >
                                <p>No estoy solo.  
                                
                </p>
                <p>Tengo un aliado con mi   </p>
                <p>misma pasión: ABSOLUTO </p>
                {/* <p >notificación en el móvil me </p>
                <p>saca del letargo.  </p> */}
                <p>Juntos, llevamos más de </p>
                <p>20 años superando retos. </p>
                
                            </motion.div>
       <a className="movimiento" href='#dos'
         ><DotLottieReact className='abajo'
             src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
             loop
             autoplay
           />
           </a> 
        </div>
    {/* </div> */}
    </>
  )
}

export default Section34