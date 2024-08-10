import React from 'react'
import { Link } from 'react-router-dom'
// import image1 from '../assets/image11 (1).png'

const Event = ({event}) => {
  return (
    <div  className="hover:scale-90 rounded-md hover:shadow-md shadow-blue-500 hover:text-blue-50 text-black hover:bg-blue-950  md:w-[20%] w-5/12 mx-3 py-2 "> 
              <Link to={`/browse/${event.id}`} className="block">
                  <div className="overflow-hidden rounded w-5/6 h-44 my-2  mx-auto ">
                      <img src={event.image}alt={event.title} className="h-full w-full"/>
                  </div>
                  <div className="w-5/6 p-3 my-3 mx-auto flex items-center justify-between">
                      <p className="3xl font-bold  capitalize">
                       {event.date}
                      </p>
                      <p className="3xl font-bold capitalize">
                          {event.location}
                      </p>
  
                  </div>
                  <div className="w-5/6 p-3 my-3 mx-auto flex items-center justify-between">
                      <p className="3xl font-bold  capitalize">
                             {event.title}
                      </p>
                  </div>
              </Link>
             
          </div>
  )
}

export default Event