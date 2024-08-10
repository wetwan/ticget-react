import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Addbtn = () => {
  return (
    <>
         <Link to="/add-event" className="text-blue-50  w-12 h-12   hover:bg-blue-50 hover:text-blue-950 md:right-8 md:bottom-24  fixed bottom-20 md:w-20 rounded-full bg-blue-950 md:h-20 shadow-md  right-3">
             <FaPlus className="md:text-5xl text-3xl   text-center m-2 md:m-4"/>
         </Link>
    </>
  )
}

export default Addbtn