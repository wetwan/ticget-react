import React from 'react'
import Events from '../component/Events'
import Addbtn from '../component/Addbtn'
import { motion } from 'framer-motion'
import MoreEvents from '../component/MoreEvents'

const BrowseEvent = () => {
 
  return (
    <motion.section   
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="p-2 mt-2 bg-blue-100 scroll-smooth scroll-m-10">
   
         <Events />
         <Addbtn />
         <MoreEvents />
        
  
    </motion.section>
    
  )
}

export default BrowseEvent