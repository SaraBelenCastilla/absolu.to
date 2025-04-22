import React, { useEffect,useRef ,useState} from 'react'
import {delay, motion} from 'framer-motion'

function Segunda() {
    const ref = useRef(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === ref.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(ref.current);
  }, [ref]);


//framer
const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "spring",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        
      }
    }
  };
  return (
    <>
    {/* <div id="previous-content">Scroll down </div> */}
    <div className="segun">
    <div ref={ref} id="outer-box">
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <div className="icono">
            <motion.div variants={fadeInUp} >
              <h2>hola</h2>
              
            </motion.div>
            </div>
            {/* <div className="contenedor">
            <motion.div variants={fadeInUp}>
              <h2>Brand Spark</h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="texto">
              Una zoonosis es una enfermedad infecciosa transmitida de un
              animal...
              </div>
            </motion.div>
            </div> */}
          </motion.div>
        )}
      </div>

      <div ref={ref} id="outer-box">
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
           
            <div className="contenedor">
            <motion.div variants={fadeInUp}>
              <h2>Brand Spark</h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="texto">
              Una zoonosis es una enfermedad infecciosa transmitida de un
              animal...
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      </div>
    </>
  )
}

export default Segunda