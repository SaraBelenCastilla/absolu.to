import React from 'react'
import {motion} from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { redirect ,useNavigate,Navigate} from "react-router-dom";
import Carrusell from '../Components/Carrusell'
import useWindowWidth from '../Components/useWindowWidth';

function mover() {
  window.location.replace('/Carrusell')
  
}



function Section22() {
  const anchoVentana = useWindowWidth();
  return (
    <>
     <div className='segundaDos2'
      style={{with:anchoVentana}}
     >
        <motion.h1 className="segunda__h1Uno"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >¡Acción!</motion.h1>
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
                <p>A toda velocidad concluyo el informe y lo envío.
</p>
<p className='segunda__p'>
Cuando la &quot;Agencia&quot; se enfrenta a un brief complicado y los obstáculos parecen insalvables, es el momento de asumir mi verdadera identidad.
</p>
            </motion.div>
            <motion.div className="segunda__movil"
                    initial={{opacity:0, y:150,scale:0.5}}
                    whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
                    viewport={{once: false, amount:.5}}
                    
                    >
                        <p>Termino el informe y lo 
                        
        </p>
        <p>envío. La Agencia  </p>
        <p>necesita ayuda…</p>
        <p> Es hora de asumir  </p>
        <p >mi verdadera </p>
        <p>identidad.</p>
        {/* <p>poder desaparecer sin que </p>
        <p>nadie lo note. </p> */}
        
                    </motion.div>
          
        </div>
          
       
         {/* <a className='flechi' href={"#carrusell"}> <DotLottieReact
      src="https://lottie.host/dd230164-99ad-47a0-920a-8e8b7466979c/NTXJGiWrgU.lottie"
      loop
      autoplay
    /></a> */}

    <a className="movimiento" href={"#carrusell"}
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

export default Section22