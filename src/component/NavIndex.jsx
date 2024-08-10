import React from 'react'
import { FaChampagneGlasses,FaFilm,FaMicrophone, FaTv } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const NavIndex = () => {
  return (
    <section className="px-1 mb-2  bg-blue-800">
         <nav className="hidden md:mx-auto  mb-5  w-full py-3 md:w-4/  6 md:flex items-center justify-around">
            <Link to="/event/concert" className="w-1/5 p-2 mx-2 text-blue-600 hover:bg-blue-400 hover:text-white  bg-white text-center font-bold capitalize rounded text-xl">concert</Link>
            <Link to="/event/cinema" className="w-1/5 p-2 mx-2 text-blue-600 hover:bg-blue-400 hover:text-white  bg-white text-center font-bold capitalize rounded text-xl">movie</Link>
            <Link to="/event/comedy" className="w-1/5 p-2 mx-2 text-blue-600 hover:bg-blue-400 hover:text-white  bg-white text-center font-bold capitalize rounded text-xl">comedy</Link>
            <Link to="/event/talk-show" className="w-1/5 p-2 mx-2 text-blue-600 hover:bg-blue-400 hover:text-white  bg-white text-center font-bold capitalize rounded text-xl">tv show</Link>
        </nav>
        <div className="sm:hidden w-full mb-3 py-4  mx-auto px-2 ">
            <nav className="flex items-start  gap-3 w-11/12 p-3 flex-col   mx-auto">
                <Link to="/event/concert" className="text-blue-100 transition-all block w-12/12 p-2 text-xl  font-bold   ml-5 ">
                    <FaChampagneGlasses className=" inline text-black mr-3 text-4xl"/>
                    
                    Want to party 
                </Link>
                <Link to="/event/comedy" className="text-blue-100 transition-all block w-12/12 p-2 text-xl  font-bold   ml-5 ">
                <FaMicrophone className=" inline text-black mr-3 text-4xl"/>
                   
                    Hoping to laugh
                </Link>
               
                <Link to="/event/cinema" className="text-blue-100 transition-all block w-12/12 p-2 text-xl  font-bold   ml-5 ">
                 <FaFilm className=" inline text-black mr-3 text-4xl"/>
                   
                    Want to see a movie
                </Link>
               
                <Link to="/event/talk-show" className="text-blue-100 transition-all block w-12/12 p-2 text-xl  font-bold   ml-5 "> 
                    <FaTv className=" inline text-black mr-3 text-4xl"/>
                    Like to be on TV
                </Link>
            </nav>
        </div>
    </section>
  )
}

export default NavIndex