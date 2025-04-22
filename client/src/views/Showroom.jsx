import React,{useState,useEffect,useRef} from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { NavLink } from 'react-router-dom';
import { MotionConfig, motion ,AnimatePresence} from "framer-motion";
import LogoSlider from '../Components/LogoSlider';
import LogoSlider1 from '../Components/LogoSlider1';
import LogoSlider2 from '../Components/LogoSlider2';
import LogoSlider3 from '../Components/LogoSlider3';
import Fotos from './Fotos';



function Showroom() {
  const palabras=[
    {
     id:1 ,pala:'CHÀCENA', tipo:'"anodyne", sans-serif',size:'12vw'
    },
    {
      id:2,pala:'la cocina', tipo:'"taboo-pro", sans-serif',size:'12vw'
    },
    {
      id:3, pala:'ENTRE CAJAS', tipo:'"battery-park", sans-serif',size:'10vw'
    },
    {
     id:4, pala:'trastienda', tipo:'"variex", sans-serif',size:'10vw'
    },
    {
      id:5, pala:'Bambalinas', tipo:'"didoni-urw", serif',size:'11vw'
    },
    {
      id:6, pala:'ENTRE BASTIDORES', tipo:'"rig-solid-bold-inline", sans-serif',size:'8vw'
    },
    {
      id:7, pala:'Tras la Escena', tipo:'"altesse-std-24pt", sans-serif',size:'10vw'
    },
    {
      id:8, pala:'tras el telon', tipo:'"alta-california", sans-serif',size:'14vw'

    },
    {
     id:9,  pala:'BACKSTAGE',  tipo:'"aw-conqueror-carved", sans-serif',size:'10vw'
    },
    {
     id:10,  pala:'TRASCENIO', tipo:'"veneer", sans-serif',size:'16vw'
    }
  ]
  
   let [index, setIndex] = useState(0);
   const [isVisible, setIsVisible] = useState(false);
   const palabrasRef = useRef(null);

   useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (palabrasRef.current) {
      observer.observe(palabrasRef.current);
    }

    return () => {
      if (palabrasRef.current) {
        observer.unobserve(palabrasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (isVisible && index < palabras.length - 1) {
      timeout = setTimeout(() => {
        setIndex(prevIndex => prevIndex + 1);
      }, 700);
    }

    return () => clearTimeout(timeout);
  }, [isVisible, index, palabras.length]);

  const [words,setWords] =useState([])
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const interval = setInterval(() => {
  //       setIndex(prevIndex => (prevIndex + 1) % palabras.length);
  //     }, 700);

  //     return () => clearInterval(interval);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [palabras.length]);

  // useEffect(() => {
  //   if (index < palabras.length - 1) {
  //     const timeout = setTimeout(() => {
  //       setIndex(prevIndex => prevIndex + 1);
  //     }, 700);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [index]);


//  const status=['CHÀCENA','la cocina','ENTRE CAJAS','trastienda','Bambalinas','ENTRE BASTIDORES','Tras la Escena','tras el telon','BACKSTAGE','trascenio']
//   useEffect(()=>{
//     if (words < status.length){
//       setTimeout(()=>
//         setWords(words + 1),5000)
//     }
//       },[words])
      
    
 
  //   useEffect(() => {
  //     //Implementing the setInterval method
  //     const interval = setInterval(() => {
       
  //         setIndex(index + 1);    
        
          
          
         
  //     }, 1000);

  //     //Clearing the interval
  //     return () => clearInterval(interval);
  // }, [index

  // ])
   
 
   
  
  //  useEffect(()=>{

  //   const interval= setInterval(()=>{
  //     setTimeout(()=>{
  //       setPalabra('CHÀCENA')

  //     },0)
  //     setTimeout(()=>{
  //       setPalabra('la cocina')

  //     },1000)

  //     setTimeout(()=>{
  //       setPalabra('ENTRE CAJAS')

  //     },2000)
  //     setTimeout(()=>{
  //       setPalabra('trastienda')

  //     },3000)
  //     setTimeout(()=>{
  //       setPalabra('Bambalinas')

  //     },4000)

  //   },5000);
  //   return () => clearInterval(interval);

  //  },[palab])
    
 

  // { palabras.map((palabra,id)=>(
    
    
    //   useEffect(()=>{
    //     const interval = setInterval(()=>{
    //       setPalabra('la cocina')
    //     },5000)
    //     return () => clearInterval(interval);
    //   },[setPalabra])
  //   useEffect(()=>{
  //     setTimeout(()=>{
  //       setPalabra('la cocina')
  //   },5000)
  //   })   
      
  //       setTimeout(()=>{
  //         setPalabra('ENTRE CAJAS')
  //     },10000)
  //     setTimeout(()=>{
  //       setPalabra('trastienda')
  //   },15000)
  //   setTimeout(()=>{
  //     setPalabra('Bambalinas')
  // },20000)
      
   
     
  // ))}

 

    
  return (
    <>
    <div className="showroon__encabezado">
      <motion.h2 className='show__h2'
       initial={{opacity:0, y:100}}
       whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
       viewport={{once: false, amount:.5}}
      >Las niñas de mis ojos</motion.h2>
      <motion.div className="ojos"
       initial={{opacity:0, y:100}}
       whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
       viewport={{once: false, amount:.5}}
      ><DotLottieReact
    src="https://lottie.host/7b0a117c-5505-439e-bd18-5e7558833e90/bUh6vjihUE.lottie"
    loop
    autoplay
  />

      </motion.div>
        <a className="movimiento" href='#show'
><DotLottieReact className='abajo'
    src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
    loop
    autoplay
  />

      </a>  
    </div>
     <div className='showroon' id='show'>
     
     

    
     <div className="container"
     
     >
    <img className='img'
      src="https://live.staticflickr.com/65535/53466299340_b761d8d5c5_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/53465845681_588cde11c1_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/53466289865_4623d9c3ae_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54435859027_f1b3f9c41f_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/53465964803_8af15f4075_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/54436909724_9164d03555_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/53471393438_c38ce914d1_n.jpg" />
    <img className='img'
      src="https://live.staticflickr.com/65535/53471665890_9c74228aed_n.jpg" />
</div>
<Fotos/>
{/* <div className="gallery">
      <img src="https://live.staticflickr.com/65535/53466299340_b761d8d5c5_n.jpg" alt=""   />
      <img src="https://live.staticflickr.com/65535/53465845681_588cde11c1_n.jpg" alt="" />
      <img src="https://live.staticflickr.com/65535/53466289865_4623d9c3ae_n.jpg" alt=""   />
      <img src="https://live.staticflickr.com/65535/54435859027_f1b3f9c41f_n.jpg" alt=""  />
     </div>
     <div className="gallery">
      <img src="https://live.staticflickr.com/65535/53465964803_8af15f4075_n.jpg" alt="" />
      <img src="https://live.staticflickr.com/65535/54436909724_9164d03555_n.jpg" alt="" />
      <img src="https://live.staticflickr.com/65535/53471393438_c38ce914d1_n.jpg" alt=""  />
      <img src="https://live.staticflickr.com/65535/53471665890_9c74228aed_n.jpg" alt=""  />
     </div> */}
 {/* <a className='flechi' href={"#palabras"}> <DotLottieReact
                                  src="https://lottie.host/54e68d0e-fe08-4044-acd0-ea9942e856fb/UmjcekdDNO.lottie"
                                  loop
                                  autoplay
                                /></a> */}
                                  <a className="movimiento" href='#logos'
><DotLottieReact className='abajo'
    src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
    loop
    autoplay
  />

      </a>  
                                <div className="porfolio">
                                  <h3 className="porfolio__h3">Ver PORFOLIO</h3>
                                </div>
     </div>
    
      
     
     <div className="show__logo" id='logos'>
     <LogoSlider2 />
     <LogoSlider />
     <LogoSlider1 /> 
     <LogoSlider3 />
    
      {/* <a className='flechi' href={"#palabras"}> <DotLottieReact
                                  src="https://lottie.host/f5971e61-ee33-4189-a1c1-2d96772a02ef/Dn7DtM90z0.lottie"
                                  loop
                                  autoplay
                                /></a>  */}
     </div>
     <motion.div className="show__palabras" id='palabras'
     ref={palabrasRef}
     >
    
    
     
      
      
  

      <motion.h2
          className="palabras__h2"
           
          
          style={{ fontFamily: palabras[index].tipo, fontSize: palabras[index].size }}
        >
          {palabras[index].pala}
        </motion.h2>
       
      
      
         {/* <a className="movimiento" href='#nosotros'
><DotLottieReact className='abajo'
    src="https://lottie.host/c1654a4f-f72f-4b20-8da2-cdbcc2231055/23yRTvIYdT.lottie"
    loop
    autoplay
  />

      </a>  */}
     
     </motion.div> 
   
    
    </>
   
  )
}

export default Showroom