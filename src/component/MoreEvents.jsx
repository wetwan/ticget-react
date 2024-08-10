import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MoreEvents = () => {
  return (
    <section className="p-2 bg-blue-100">
    <motion.div 
      className="w-3/4 h-32 p-4 mx-auto"
      initial={{x: '-100vw'}}
      animate={{x: 0}}>
        <Link to="/browse" className="block md:w-2/4 md:h-3/4 text-blue-50 scroll-smooth scroll-m-9 hover:bg-blue-50 hover:text-blue-500 hover:shadow-md hover:scale-90 mx-auto md:text-3xl text-center font-bold  p-4 bg-blue-500 rounded-md capitalize"> 
          see more event
        </Link>
    </motion.div>
  </section>
  )
}

export default MoreEvents