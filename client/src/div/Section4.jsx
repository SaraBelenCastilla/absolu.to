import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Section4() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='cuatro__cuatro'
      style={{with:anchoVentana}}
     >
        <motion.h1 className="tercera__h2Tres"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Nuestra Misión   </motion.h1>
        {/* <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={tercera} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
        <div className="cuatro__contenido"
         style={{ width: anchoVentana }}
        >
            <motion.div className="cuatrito__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>Cada proyecto es una aventura única con un solo objetivo:
</p>
                <h3 className="tercera__titulos">CREAR VÍNCULOS EMOCIONALES
ENTRE MARCAS Y PERSONAS</h3>

            </motion.div>
            <motion.div className='cuatro__movil'
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}>
              <h3 className="movil__h3">Nuestra misión</h3>
              <h4 className="movil__h4">CONECTAR</h4>
              <h4 className="movil__h4">MARCAS Y PERSONAS</h4>

            </motion.div>
           
        </div>
        </div>
    {/* </div> */}
    </>
  )
}

export default Section4