import React,{useRef} from 'react'
import './divContainer.css'
import One from '../../div/Section1.jsx'
import {easeOut, motion,useInView,useScroll,useTransform} from 'framer-motion';

const DivContainer = ({ divSource, description }) => {
   
    return (
        <motion.div className="div-container" 
        animate={{viewBox:'all'}}
        >
            {divSource}
            {/* <img className="image" src={divSource} alt="alt text goes here" /> 
             */}
           
        </motion.div>
    );
};

export default DivContainer