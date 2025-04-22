import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';

function Section2() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segundaDos'
      style={{with:anchoVentana}}
     >
        <motion.h1 className="segunda__h1Uno"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >El mensaje</motion.h1>
        {/* <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={tercera} alt="imagen primera seccion" className="segunda__img" 
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
                <p>Hoy, mientras termino el informe trimestral de ventas, una notificación en el móvil me saca del letargo. 
</p>
<p className='segunda__p'>
Es un mensaje encriptado que solo yo puedo abrir.

</p>
<p className='segunda__p'>¡Y eso solo puede significar una cosa!</p>
            </motion.div>
            <motion.div className="segunda__movil"
                    initial={{opacity:0, y:150,scale:0.5}}
                    whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
                    viewport={{once: false, amount:.5}}
                    
                    >
                        <p>Hoy, mientras redacto un  
                        
        </p>
        <p>correos, reuniones, el  </p>
        <p>informe de ventas, una </p>
        <p >notificación en el móvil me </p>
        <p>saca del letargo.  </p>
        <p>¡Eso solo puede significar </p>
        <p>una cosa! </p>
        
                    </motion.div>
            
          
        </div>
        
        </div>
    {/* </div> */}
    </>
  )
}

export default Section2