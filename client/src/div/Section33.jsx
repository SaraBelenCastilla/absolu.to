import React from 'react'
import {motion} from 'framer-motion'


function Section22() {
  var anchoVentana = window.innerWidth
  window.onresize = function(){

    anchoVentana = window.innerWidth;
    console.log(anchoVentana)
   
   };
  return (
    <>
     <div className='segundaTres'
      style={{with:anchoVentana}}
     >
       
        <div className="segunda__tres">
            <motion.div className="trestres__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>"Mi misión no  es salvar el mundo,
                es transformar esas ideas imposibles en Experiencias de Marca únicas."
</p>

            </motion.div>
          
        </div>
        </div>
    {/* </div> */}
    </>
  )
}

export default Section22