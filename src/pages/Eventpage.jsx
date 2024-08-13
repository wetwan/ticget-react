import React from 'react'
import { useParams, useLoaderData,Link,useNavigate } from 'react-router-dom'
import { FaTrash , FaPenToSquare} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import image from '../assets/image4 (1).png'



const Eventpage = ({deleteEvent}) => {
  const {id} = useParams()
  const event = useLoaderData() 
  const navigate =useNavigate()

  const onDelete = (jobId) =>{
    deleteEvent(jobId)
    return navigate('/browse')
  }
 

  return (

    <section className="p-2  scroll-m-36  bg-blue-100 scroll-smooth">
        <div className="p-1   text-blue-500 m-2">
           
        <button  onClick={() => onDelete(event.id)} className="text-blue-50 shadow scale-95 md:text-4xl w-12 h-12 text-3xl  hover:bg-blue-50 hover:text-red-800 md:right-8 md:bottom-24  fixed bottom-20 md:w-20 rounded-full bg-blue-950 md:h-20   right-3">

            <FaTrash className=" md:text-4xl text-xl m-3.5 sm:m-5"/>
        
         </button>
        <Link
            to={`/edit-event/${event.id}`}
            className="text-blue-50 scale-95 md:text-4xl w-12 h-12 text-3xl shadow hover:bg-blue-50 hover:text-blue-950 md:right-8 md:bottom-48  fixed bottom-36 md:w-20 rounded-full bg-blue-950 md:h-20   right-3">
                <FaPenToSquare className=" md:text-4xl text-xl m-3.5 sm:m-5"/>
        </Link>


            <div className=" bg-purple-300 shadow py-1 p-2 mb-5">
                <div className="p-1 ">
                    <Link to='/browse' className='capitalize mx-0.5 inline font-semibold text-blue-700'>
                        browse 
                    </Link>
                    <p  className='capitalize font-semibold text-blue-700 inline mx-0.5'>
                    &gt;
                    </p>
                    <Link to={`/event/${event.type}`} className='capitalize mx-0.5 inline font-semibold text-blue-700'>
                        {event.type}
                    </Link>
                    <p  className='capitalize font-semibold text-blue-700 inline mx-0.5'>
                    &gt;
                    </p>
                    <p  className='capitalize font-semibold text-blue-700 inline mx-0.5'>
                        {event.title}
                    </p>
                </div>
            </div>
            <div className="md:w-5/6 p-2  mx-auto  my-5 w-full">
                <div className="md:w-64 w-5/6 border-grey border  h-54 rounded-md mx-auto md:mx-44">
                	
                    <img src={event.image} alt={event.title}/>
                    {/* <img src={image} alt={event.title}/> */}
                </div>



                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event name:
                    </p>
                    <p className="font-bold" >
                       {event.title}
                    </p>
                </div>
                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event type:
                    </p>
                    <p className="font-bold" >
                       {event.type}
                    </p>
                </div>
                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event center:
                    </p>
                    <p  className="font-bold">
                      {event.center}
                    </p>
                </div>
                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event time:
                    </p>
                    <p className="font-bold" >
                        {event.time}
                    </p>
                </div>
                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event date:
                    </p>
                    <p className="font-bold" >

                        {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                    </p>
                </div>
                <div className="flex capitalize md:gap-11 items-center md:justify-start  md:h-8 p-2 md:flex-row my-5 w-5/6 md:w-4/6 mx-auto  flex-col">
                    <p className="border mb-3 border-blue-500 p-2">
                        event locations:
                    </p>
                    <p className="font-bold" >
                      {event.location}
                    </p>
                </div>
                <div className="flex md:flex-row flex-col capitalize gap-30 items-center justify-start  h-auto p-2  my-5 w-5/6 md:w-4/6 mx-auto ">
                    <p className="whitespace-nowrap border mb-3 border-blue-500 p-2">
                        event details:
                    </p>
                    <p className="font-bold ml-6">
                        {event.details}
                    </p>
                </div>
                
            </div>
            <motion.div  
              className="w-5/6 py-2   mx-auto"
              initial={{x: '-100vw'}}
              animate={{x: 0}}
              transition={{delay: 1.2}}
              >
                <a href="" className="hover:bg-blue-50 hover:text-blue-800 block h-11 shadow-md text-center mx-auto w-3/4 md:w-2/5  capitalize py-1.5  font-bold text-blue-100 text-xl rounded-xl bg-blue-800">
                 buy ticket</a>
            </motion.div>
        </div>
  </section>
  
  )
}

const eventLoader = async ({params}) =>{
  const res = await fetch(`http://localhost:5000/events/${params.id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch event data');
  }
  const data = await res.json()
 console.log(data)
  return data

  
}



export { Eventpage as default, eventLoader}