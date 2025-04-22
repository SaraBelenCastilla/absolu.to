import React, {useState,useEffect,useRef} from 'react'

import {motion,AnimatePresence} from 'framer-motion'
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import Boton from '../assets/img/boton.png'
import Lupa from '../assets/img/lupa.png'
import {Link,useNavigate} from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Section5() {
  // var anchoVentana = window.innerWidth
  // window.onresize = function(){

  //   anchoVentana = window.innerWidth;
  //   console.log(anchoVentana)
   
  //  };

   const navigate = useNavigate();
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         navigate('/nosotros');
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 1.0,
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, [navigate]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4
      }
    }
  };
  return (
    <>
    <div className='quinta'
     style={{with:'100%'}} ref={sectionRef}
    >
        <motion.h1 className="quinta__h1"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >¿Estás Ready!?</motion.h1>
        {/* <div className="segunda__contenedor"> */}
        {/* <div className="segunda__icono">
            <motion.img src={segunda} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div> */}
        <div className="quinta__contenido">
            <motion.div className="cinco__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p className='cinco__p'> Ha llegado el momento de la verdad 
</p>


            </motion.div>
            
            {/* <motion.button className='suscripcion'onClick={() => setModalIsOpen(true)}
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
            Suscribete
            </motion.button> */}
            {/* <AnimatePresence> */}
        {/* {modalIsOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="modal-overlay"
          >
            <motion.div
              className="modal"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <div className='login'>
       
       <form className='formulario__login' action='#' method="post" >
       
           <h2 className='login__h2'>Login</h2>
           <div className='input-box'>
           <input className='formulario__input' type="text" placeholder='Usuario'required  name="Usuario" id="nom" /><IoMdPerson className='icono' />
           </div>
           <div className='input-box'>
           <input className='formulario__input' type="text" placeholder='Password'required name="Password" id="pass" /><FaLock  className='icono'/>
           </div>
          
           <input className='formulario__boton' type="submit"  />
          
       </form>
       </div>
             
                <button
                  className="modal-button"
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
              
            </motion.div>
          </motion.div>
        )} */}
      {/* </AnimatePresence> */}
      </div>
      <div className="quintaUno__enlaces">
                      <Link to={'/Contacto'}>
                      <div className="quinta__card"
                       
                       >
                         <div className="quinta__icono">
                             <img src={Boton} alt="icono" className="quinta__img" />
                           </div> 
                          
                           <div className="absl">
                           <h3 className="quinta__h3">SÍ.</h3>
                           <p className="quinta__p">Tengo una misión para el <span className='quinta__span'>Capitán Branding</span> .</p>
                          
                           </div>
                       </div>
                      </Link>
                       
                        
                          
                       <Link to={'/Nosotros'}>
                       <div className="quinta__cardUno"
                        
                        
                        >
                           <div className="quinta__icono">
                          <img src={Lupa} alt="icono" className="quinta__img" />
                          </div>
                            <div className="abslUno">
                           
                            <h3 className="quinta__h3">No.</h3>
                            <p className="quinta__p">Quiero saber más sobre el  <span className='quinta__span'>Capitán Branding</span> & Absoluto.</p>
                            </div> 
                           
                        </div>
            
                       </Link>     
                       
                        {/* <a className="ready" href='#ninas'
                                    ><DotLottieReact className='abajo'
                                        src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                                        loop
                                        autoplay
                                      />
                                      </a> 
                          */}
                            </div>
                             
                                 {/* <a className='movimiento' href={"#ninas"}> <DotLottieReact className='abajo'
                                      src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
                                      loop
                                      autoplay
                                    /></a> */}
                              
                             {/* <Link className='flechi' to={'/showroom'}> <DotLottieReact
                                       src="https://lottie.host/6bfc7ed2-4003-499b-951e-b6b55d9b653a/4rGLY65zu0.lottie"
                                       loop
                                       autoplay
                                     />
                                </Link> */}
         
        
        {/* </div> */}
    </div>
   
       
    </>
  )
}

export default Section5