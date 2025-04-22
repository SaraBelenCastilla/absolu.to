import React, {useState} from 'react'
import { MotionConfig, motion ,AnimatePresence} from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import Dosd from '../div/Section2'
import Trest from '../div/Section22'


function CarrusellUno() {
    const imgs =[
        {
          index: 1 , page : Dosd
        },
        {
          index: 2 , page: Trest
        },
       
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
       
        {imgs.map((img, i) => (
   
    <img.page key={img.index}/>
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
              {index + 1 < imgs.length && (
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
  )
}

export default CarrusellUno