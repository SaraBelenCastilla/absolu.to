import React from 'react'

import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Section1() {
  const anchoVentana = useWindowWidth();
  return (
    <>
    <div className='segunda'
     style={{width:anchoVentana}}
    >
        <motion.h1 className="segunda__h1Uno"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Brand Spark</motion.h1>
        {/* <div className="segunda__contenedor"> */}
        {/* <div className="segunda__icono">
            <motion.img src={segunda} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
        <div className="segunda__contenidoUno"
        style={{ width: anchoVentana }}
        >
            <motion.div className="segunda__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            
            >
                <p>Este es mi nombre.
                
</p>
<p> Cada día me levanto temprano,</p>
<p> siguiendo la misma rutina desde hace años.</p>
<p className='segunda__p'>Me muevo en una Bulli de 1975 y, con el tiempo,</p>
<p> he logrado perfeccionar el arte de pasar inadvertido.</p>

            </motion.div>
            <motion.div className="segunda__movil"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            
            >
                <p>Este es mi nombre.
                
</p>
<p>Soy una persona común. </p>
<p>Me levanto temprano, y </p>
<p >me preparo con la misma </p>
<p>rutina desde hace años.</p>

            </motion.div>
        </div>
       
         

        {/* </div> */}
    </div>
   
       
    </>
  )
}

export default Section1