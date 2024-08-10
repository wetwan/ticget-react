// import React from 'react'
// import {useParams, useLoaderData,useNavigate } from 'react-router-dom'
// import { useState } from 'react'


// const EditEvent = ({updateEventSubmit}) => {
//     const event = useLoaderData()
//     const {id} = useParams()
//     const navigate = useNavigate()
//     const [title, setTitle] = useState(event.title)
//     const [type, setType] = useState(event.type)
//     const [location, setLocation] = useState(event.location)
//     // const [image, setImage] = useState(event.image)
//     const [time, setTime] = useState(event.time)
//     const [center, setCenter] = useState(event.center)
//     const [date, setDate] = useState(event.date)
//     const [details, setDetails] = useState(event.details)

//     const updateForm = (e) => {
//         e.preventDefault()

//         const updateEvent ={
//             id,
//             title,
//             type,
//             location,
//             time,
//             center,
//             date,
//             details
//           }
//           updateEventSubmit(updateEvent)
//           return navigate('/browse')
//     }

    
//   return (
//     <section className="p-2 mt-28 scroll-m-36  bg-blue-100 scroll-smooth">
//         <div className="p-1   text-blue-500 m-2">
           
//             <div className="m-5 p-2 border my-6  w-5/6 h-full mx-auto">
//                 <form onSubmit={updateForm} className="py-4  w-full md:w-[600px] mx-auto">
//                     <h3 className="uppercase  w-5/6 mx-auto  md:text-3xl p-3 my-5 font-bold text-center text-xl "> add a new event </h3>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="name" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event name:
//                         </label>
//                         <input 
//                             type="text" 
//                             name="name" 
//                             id="name" 
//                             className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event name"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="name" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event pic:
//                         </label>
                 
//                         <input 
//                             type="file" 
//                             name="image" 
//                             id="image" 
//                             className="p-1 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event image"
//                             // value={image}
//                             // onChange={(e) => setImage(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="type" className="block font-bold text-xl  p-2 capitalize ml-2">
//                             event type:
//                         </label>
//                         <select 
                         
//                             name="type" 
//                             id="type" 
//                             className="p-2 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             value={type}
//                             onChange={(e) => setType(e.target.value)}
                          
//                       >
//                         <option value="concert">concert</option>
//                         <option value="cinema">cinema</option>
//                         <option value="comedy ">comedy </option>
//                         <option value="tv-show">tv-show</option>
//                         </select>
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="location" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event location:
//                         </label>
//                         <input 
//                             type="text" 
//                             name="location" 
//                             id="location" 
//                             className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event location"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="center" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event center:
//                         </label>
//                         <input 
//                             type="text" 
//                             name="center" 
//                             id="center" 
//                             className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event center"
//                             value={center}
//                             onChange={(e) => setCenter(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="time" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event time:
//                         </label>
//                         <input 
//                             type="datetime" 
//                             name="time" 
//                             id="time" 
//                             className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event time"
//                             value={time}
//                             onChange={(e) => setTime(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="date" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event date:
//                         </label>
//                         <input 
//                             type="date" 
//                             name="date" 
//                             id="date" 
//                             className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             placeholder="event date"
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                       />
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
//                         <label htmlFor="details" className="block font-bold text-xl  p-2 capitalize ml-2">
//                              event details:
//                         </label>
//                         <textarea 
//                             name="details"
//                             placeholder="event details" 
//                             id="details" 
//                             className="p-3 max-h-20 min-h-20 h-20 m-2 min-h-11/12 w-11/12 max-w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
//                             value={details}
//                             onChange={(e) => setDetails(e.target.value)}
//                       ></textarea>
                   
//                     </div>
//                     <div className=" py-3 p-2 mx-auto md:w-5/6">
                       
//                         <button 
//                             className="border bg-blue-300  h-20 p-2 w-3/5 font-bold text-2xl mx-auto block  capitalize  rounded-md shadow-lg"
//                             type="submit"> add event</button>
                   
//                     </div>
//                  </form>
                   
//             </div>
//         </div>
//   </section>
//   )
// }

// export default EditEvent

import React, { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';

const EditEvent = ({ updateEventSubmit }) => {
  const event = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState(event.title);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(event.type);
  const [location, setLocation] = useState(event.location);
  const [time, setTime] = useState(event.time);
  const [center, setCenter] = useState(event.center);
  const [date, setDate] = useState(event.date);
  const [details, setDetails] = useState(event.details);

  const updateForm = async (e) => {
    e.preventDefault();

    const updateEvent = {
      id,
      title,
      type,
      location,
      image,
      time,
      center,
      date,
      details
    };

   await updateEventSubmit(updateEvent);
   navigate(`/browse/${id}`)
  };

  return (
    <section className="p-2 mt-28 scroll-m-36 bg-blue-100 scroll-smooth">
      <div className="p-1 text-blue-500 m-2">
        <div className="m-5 p-2 border my-6 w-5/6 h-full mx-auto">
          <form onSubmit={updateForm} className="py-4 w-full md:w-[600px] mx-auto">
            <h3 className="uppercase w-5/6 mx-auto md:text-3xl p-3 my-5 font-bold text-center text-xl">Edit Event</h3>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="name" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Name:
              </label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Handle Image Upload */}
            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="image" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Image:
              </label>
              <input 
                type="file" 
                name="image" 
                id="image" 
                className="p-1 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Image"
                 onChange={(e) => setImage(e.target.files[1])}
              />
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="type" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Type:
              </label>
              <select 
                name="type" 
                id="type" 
                className="p-2 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="concert">Concert</option>
                <option value="cinema">Cinema</option>
                <option value="comedy">Comedy</option>
                <option value="tv-show">TV Show</option>
              </select>
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="location" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Location:
              </label>
              <input 
                type="text" 
                name="location" 
                id="location" 
                className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="center" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Center:
              </label>
              <input 
                type="text" 
                name="center" 
                id="center" 
                className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Center"
                value={center}
                onChange={(e) => setCenter(e.target.value)}
              />
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
            <label htmlFor="time" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Time:
            </label>
            <input 
                type="time" 
                name="time" 
                id="time" 
                className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="date" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Date:
              </label>
              <input 
                type="date" 
                name="date" 
                id="date" 
                className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                placeholder="Event Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <label htmlFor="details" className="block font-bold text-xl p-2 capitalize ml-2">
                Event Details:
              </label>
              <textarea 
                name="details"
                placeholder="Event Details" 
                id="details" 
                className="p-3 max-h-20 min-h-20 h-20 m-2 min-h-11/12 w-11/12 max-w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>

            <div className="py-3 p-2 mx-auto md:w-5/6">
              <button 
                className="border bg-blue-300 h-20 p-2 w-3/5 font-bold text-2xl mx-auto block capitalize rounded-md shadow-lg"
                type="submit">
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditEvent;
