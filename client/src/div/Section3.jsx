import React from 'react'
import {motion} from 'framer-motion'
import { FaRegCopyright } from "react-icons/fa";
import useWindowWidth from '../Components/useWindowWidth';


function Section3() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segundaTres'
      style={{with:anchoVentana}}
     >
     {/* <div className="tres__contenido" 
     style={{with:anchoVentana}}
     >
            <motion.div className="tres__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>En ese instante me transformo, 
</p>
<p> asumiendo mi verdadera identidad:</p>

            </motion.div>
          
        </div> */}
        <motion.h2 className="tres__h3"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >EL </motion.h2>
         <motion.h2 className="tres__h3"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        > CAPITÁN </motion.h2>
          <motion.h2 className="tres__h3"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >BRANDING  <FaRegCopyright className='copy'/></motion.h2>
        {/* <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={tercera} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
       
        </div>
    {/* </div> */}
    </>
  )
}

export default Section3