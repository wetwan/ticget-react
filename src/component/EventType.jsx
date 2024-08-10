import React from 'react'
import Event from './Event'
import { Link, useParams } from 'react-router-dom'
import { Datas } from './Data' 
import Spinner from './Spinner'
import Img from './Img'

const EventType = () => {
   
    const { type } = useParams()
    if (typeof type !== 'string') {
        return null
    }
   
  return (
    <section className="p-2 bg-blue-100">
        <div className=" bg-purple-300 shadow py-1 p-2 mb-5">
            <div className="p-1 ">
                <Link to='/browse' className='capitalize mx-0.5 inline font-semibold text-blue-700'>
                    browse 
                </Link>
                <p  className='capitalize font-semibold text-blue-700 inline mx-0.5'>
                &gt;
                </p>
                <p  className='capitalize font-semibold text-blue-700 inline mx-0.5'>
                {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
            </div>
        </div>

    <div className="p-3  md:w-5/6 md:mx-auto ">
        <h4 className="font-bold text 3xl md:text-6xl  text-blue-700 capitalize font-mono">
        {type.charAt(0).toUpperCase() + type.slice(1)}
        </h4>
    </div>
    <div className="p2 my-4">
    <div className="flex flex-wrap md:mx-auto flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4 ">
        <Datas>
          {(events, loading) => {
            if (loading) {
              return <Spinner loading={loading}/>;
            } else {
                const items = Array.isArray(events)
                ? events.filter(event => event.type === type)
                : events[type] && Array.isArray(events[type])
                ? events[type]
                : [];

              return items.length > 0 ? (
                items.map((event, i) => (
                // console.log(events.map(event => event.imageUrl))

                  <Event key={i} event={event} />
                ))
              ) : (
                <p>No events found for {type}</p>
              );
            }
          }}
        </Datas>
          {/* <Img /> */}
        </div>
    </div>
   


  </section>
  )
}

export default EventType