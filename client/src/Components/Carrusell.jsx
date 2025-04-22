import React, {useState} from 'react'
import { MotionConfig, motion ,AnimatePresence} from "framer-motion";
import Seis from '../div/Section3.jsx'
import Siete from '../div/Section32.jsx'
import Ocho from '../div/Section33.jsx'
import Nueve from '../div/Section34.jsx'
import Diez from '../div/Section35.jsx'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"

function Carrusell() {
    const datas =[
        {
          index: 1 , page : Seis
        },
        {
          index: 2 , page: Siete
        },
        {
          index: 3 , page: Nueve
        } ,
       
      ]
    let [index, setIndex] = useState(0);
  return (
    <MotionConfig
      transition={{
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
         <div className="h-full">
        <div className="mx-auto ">
          <div className="relative ">
      <motion.div animate= {{ x: `-${index * 100}%` }} className="flex">
       
        {datas.map((data, i) => (
   
    <data.page key={data.index}/>
  ))}
      </motion.div>

      <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="boton__izq "
                  onClick={() => setIndex(index - 1)}
                >
                 <IoIosArrowBack className='izq'/>
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index + 1 < datas.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="boton__drch"
                  onClick={() => setIndex(index + 1)}
                >
                  <IoIosArrowForward className='drch' />
                </motion.button>
              )}
            </AnimatePresence>
   
    </div>
    </div>
    </div>
    </MotionConfig>
  );
}
  


export default Carrusell