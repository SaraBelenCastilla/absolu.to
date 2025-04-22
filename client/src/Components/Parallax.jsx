import React from 'react'
import{motion,useMotionValueEvent,useScroll, useSpring,useTransform} from 'framer-motion';
import {Children, ReactNode,useRef} from 'react'

function Parallax({children}) {
    const target = useRef(HTMLDivElement>(null))
    const sectionS = Children.toArray(children)[0];
    const sectionT = Children.toArray(children)[1];

    const {scrollYProgress}= useScroll(target);
    const y = useTransform(scrollYProgress,[0,1],['0%','70%'])
    const scale = useTransform(scrollYProgress,[0,1],[1,0.2])
    const scale2 = useTransform(scrollYProgress,[0,1],[0.5,1])
    const opacity = useTransform(scrollYProgress,[1,0.7,1],[1,0,1])
    useMotionValueEvent(scrollYProgress,'change',(last)=>{
        console.log('scroll',last)
    })
  return (
    <motion.div ref={target}>
        <motion.div
        style={{
            y:-1,
            scale:scale2,
            opacity,
        }}
        >{sectionS}</motion.div>
        <motion.div
         style={{
            y:-1,
            scale:scale2,
        }}
        >{sectionT}</motion.div>
    </motion.div>
  )
}

export default Parallax