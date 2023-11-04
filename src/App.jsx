import { useState } from 'react'
import {motion} from 'framer-motion'
import './App.css'

function App() {
  

  return (
    <>
    <motion.section className='miclase' initial={{opacity:0.2,rotateZ:180}} animate={{opacity:1,rotateZ:0}}>
      <h2>Hola Mundo</h2>
   {/* <motion.h2 animate={{fontSize:50,color:'#ff2994',x:100}}>Hola Mundo</motion.h2>*/}
    

    </motion.section>
    </>
   
  )
}

export default App
