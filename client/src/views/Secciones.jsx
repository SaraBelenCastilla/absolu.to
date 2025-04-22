import React from 'react'
import {motion} from 'framer-motion'
import segunda from '../assets/img/segunda.png'
import tercera from '../assets/img/tercera.png'


function Secciones() {
  return (
    <>
    <div className='segunda'>
        <motion.h1 className="segunda__h1"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Brand Spark</motion.h1>
        <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={segunda} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div>
        <div className="segunda__contenido">
            <motion.div className="segunda__div"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>Ese es mi nombre.
Soy una persona más dentro de la gran ciudad. 
Me levanto temprano, y me preparo con la misma rutina meticulosa que he mantenido durante años. 
Mi aspecto es algo desaliñado: Cabello encrespado, barba de varios días y unas ojeras que nunca terminan de desaparecer.
 
Suelo vestir camisetas sencillas, jeans y unas deportivas que, aunque cómodas, ya han visto sus mejores días. 
</p>
<p>Mi medio de transporte es una vieja furgoneta que, pese a su edad, sigue siendo fiable como el primer día. 
Su apariencia modesta es perfecta para moverse sin llamar la atención, especialmente cuando viajo junto a mi equipo por la ciudad.
Además, la he acondicionado como una oficina sobre ruedas, lo que nos permite trabajar cómodamente mientras nos dirigimos hacia nuestra próxima misión.</p>
            </motion.div>
           {/* <motion.div className="segunda__div"
           initial={{opacity:0, y:150,scale:0.5}}
           whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.8, duration:1.2,  ease:'easyInOut',type:'spring'}}}
           viewport={{once: false, amount:.5}}
           >
            <p>Mi medio de transporte es una vieja furgoneta que, pese a su edad, sigue siendo fiable como el primer día. 
Su apariencia modesta es perfecta para moverse sin llamar la atención, especialmente cuando viajo junto a mi equipo por la ciudad.
Además, la he acondicionado como una oficina sobre ruedas, lo que nos permite trabajar cómodamente mientras nos dirigimos hacia nuestra próxima misión.</p>
            </motion.div>   */}
        </div>
        </div>
    </div>
    <div className='segunda'>
        <motion.h1 className="segunda__h1"
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0, transition:{delay:0.4, duration:1,  ease:'easyInOut',type:'spring'}}}
        viewport={{once: false, amount:.5}}
        >Mi trabajo</motion.h1>
        <div className="segunda__contenedor">
        <div className="segunda__icono">
            <motion.img src={tercera} alt="imagen primera seccion" className="segunda__img" 
             initial={{opacity:0, y:150,scale:0.5}}
             whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
             viewport={{once: false, amount:.5}}
            />
        </div>
        <div className="segunda__contenido">
            <motion.div className="segunda__div1"
            initial={{opacity:0, y:150,scale:0.5}}
            whileInView={{opacity:1, y:0,scale:1, transition:{delay:0.4, duration:1.2,  ease:'easyInOut',type:'spring'}}}
            viewport={{once: false, amount:.5}}
            >
                <p>En una gran multinacional es tan monótono como parece. Me muevo entre correos, llamadas y reuniones interminables. No destaco ni por brillante ni por mediocre, he perfeccionado el arte de pasar desapercibido. 

Almuerzo solo en un pequeño restaurante cerca de la oficina, donde siempre pido lo mismo: el sándwich del día y un café americano.
</p>
            </motion.div>
          
        </div>
        </div>
    </div>
    </>
  )
}


export default Secciones