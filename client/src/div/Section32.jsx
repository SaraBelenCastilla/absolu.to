import React from 'react'
import {motion} from 'framer-motion'
import { FaRegCopyright } from "react-icons/fa";
import useWindowWidth from '../Components/useWindowWidth';


function Section32() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segunda32'
      style={{with:anchoVentana}}
     >
        <motion.h1 className="tercera__h2"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Mi alter ego   </motion.h1>
        {/* <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={tercera} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
        <div className="segunda__contenidoDos">
            <motion.div className="segunda__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>No soy un superhéroe al uso.
                
</p>
<p>No vuelo, no llevo escudo y no</p>
<p> me oculto tras una máscara.</p>
<p>
Mi misión no  es salvar el mundo.
</p>
<div className="instagram"
       
       >
        <h3 className="insta__h3">Be a Brander</h3>
        <p className="insta__p"> Instagram</p>
        
       </div>
            </motion.div>
            
           <motion.div className="segunda__movil"
                                 initial={{opacity:0, y:150,scale:0.5}}
                                 whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
                                 viewport={{once: false, amount:.5}}
                                 
                                 >
                                    <p>No soy un superhéroe </p>
                     
                                 </motion.div> 
        </div>
      
        </div>
    {/* </div> */}
    </>
  )
}

export default Section32