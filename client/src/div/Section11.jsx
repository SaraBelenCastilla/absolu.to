import React from 'react'
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import useWindowWidth from '../Components/useWindowWidth';


function Section11() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segundaUno'
      style={{with:anchoVentana}}
     >
        <motion.h1 className="segunda__h1Uno"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Mi trabajo</motion.h1>
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
                <p>en una gran multinacional, donde cada día es exactamente igual: correos, 
</p>
<p>llamadas, reuniones sin fin… el mismo almuerzo en el restaurante de la esquina: </p>
<p className='segunda__p'>el sándwich del día y un café americano.</p>
<p>Una rutina perfecta para desaparecer sin que nadie lo perciba.</p>
            </motion.div>
            <motion.div className="segunda__movil"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            
            >
                <p>es realemente monótono: 
                
</p>
<p>correos, reuniones, el  </p>
<p>mismo almuerzo…  </p>
<p >Un escenario ideal donde</p>
<p>poder desaparecer sin que </p>
<p>nadie lo note. </p>

            </motion.div>
          
        </div>
      
         
        {/* <div className='flechitas'><DotLottieReact
      src="https://lottie.host/29b477c5-4291-4dd2-bbb4-0b83d69fb3f2/UGVbrOOk7P.json"
      loop
      autoplay
    /></div> */}
        
       
        </div>
    {/* </div> */}
    </>
  )
}

export default Section11