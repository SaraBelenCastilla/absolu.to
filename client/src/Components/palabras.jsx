import React,{useState,useEffect,useRef} from 'react'
import {motion} from 'framer-motion'
    
    
     
      
      
      

     


function palabras() {

     const palabras=[
        {
         id:1 ,pala:'CHÀCENA', tipo:'"anodyne", sans-serif',size:'9vw'
        },
        {
          id:2,pala:'la cocina', tipo:'"taboo-pro", sans-serif',size:'9vw'
        },
        {
          id:3, pala:'ENTRE CAJAS', tipo:'"battery-park", sans-serif',size:'7vw'
        },
        {
         id:4, pala:'trastienda', tipo:'"variex", sans-serif',size:'7vw'
        },
        {
          id:5, pala:'Bambalinas', tipo:'"didoni-urw", serif',size:'8vw'
        },
        {
          id:6, pala:'ENTRE BASTIDORES', tipo:'"rig-solid-bold-inline", sans-serif',size:'5vw'
        },
        {
          id:7, pala:'Tras la Escena', tipo:'"altesse-std-24pt", sans-serif',size:'7vw'
        },
        {
          id:8, pala:'tras el telon', tipo:'"veneer", sans-serif',size:'7vw'
    
        },
        {
         id:9,  pala:'BACKSTAGE',  tipo:'"aw-conqueror-carved", sans-serif',size:'7vw'
        },
        {
         id:10,  pala:'trascenio', tipo:'"alta-california", sans-serif',size:'11vw'
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

        


        
             
  return (
    <>
   <div className="show__palabras"  ref={palabrasRef} 
   
   >
    
    
     
      
      
    {/* <motion.h2 className="palabras__h2"  style={{ fontFamily: palabras[index].tipo ,fontSize:palabras[index].size}} >{palabras[index].pala}</motion.h2>  */}

    <motion.h2
        className="palabras__h2"
        
        style={{ fontFamily: palabras[index].tipo, fontSize: palabras[index].size }}
      >
        {palabras[index].pala}
      </motion.h2>
     
    
      
   
   </div>
    </>
  )
}

export default palabras