import React from 'react'
import {motion} from 'framer-motion'
import useWindowWidth from '../Components/useWindowWidth';
import Boton from '../assets/img/boton.png'
import Lupa from '../assets/img/lupa.png'
import {Link} from 'react-router-dom'

function Sectin51() {
  const anchoVentana = useWindowWidth();
  return (
    <div className='quintaUno'
    style={{with:anchoVentana}}
    >
         <motion.div className="segunda__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p className='quintaUno__div'>¡Ha llegado el momento de ponernos a prueba!
</p>
         </motion.div>
        

    </div>
    
  )
}

export default Sectin51