import React from 'react'
import {  useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddEventpage = ({AddEventSubmit}) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('concert')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState(null)
  const [time, setTime] = useState('')
  const [center, setCenter] = useState('')
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')
  
  const submitForm = (e) => {
    e.preventDefault()
   
    const newEvent ={
      title,
      type,
      location,
      image,
      time,
      center,
      date,
      details
    }
    AddEventSubmit(newEvent)
    return navigate('/browse')
  }
  return (
    <section className="p-2 mt-28 scroll-m-36  bg-blue-100 scroll-smooth">
        <div className="p-1   text-blue-500 m-2">
           
            <div className="m-5 p-2 border my-6  w-5/6 h-full mx-auto">
                <form onSubmit={submitForm} className="py-4  w-full md:w-[600px] mx-auto">
                    <h3 className="uppercase  w-5/6 mx-auto  md:text-3xl p-3 my-5 font-bold text-center text-xl "> add a new event </h3>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="name" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event name:
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            placeholder="event name"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="py-3 p-2 mx-auto md:w-5/6">
                      <label htmlFor="image" className="block font-bold text-xl p-2 capitalize ml-2">
                        Event Image:
                      </label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="p-1 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                        required
                        onChange={(e) => setImage(e.target.files[0])} 
                      />
                    </div>

                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="type" className="block font-bold text-xl  p-2 capitalize ml-2">
                            event type:
                        </label>
                        <select 
                         
                            name="type" 
                            id="type" 
                            className="p-2 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                          
                      >
                        <option value="concert">concert</option>
                        <option value="cinema">cinema</option>
                        <option value="comedy ">comedy </option>
                        <option value="tv-show">tv-show</option>
                        </select>
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="location" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event location:
                        </label>
                        <input 
                            type="text" 
                            name="location" 
                            id="location" 
                            className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            placeholder="event location"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="center" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event center:
                        </label>
                        <input 
                            type="text" 
                            name="center" 
                            id="center" 
                            className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            placeholder="event center"
                            required
                            value={center}
                            onChange={(e) => setCenter(e.target.value)}
                      />
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="time" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event time:
                        </label>
                        <input 
                            type="time" 
                            name="time" 
                            id="time" 
                            className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            placeholder="event time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="date" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event date:
                        </label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            className="p-3 h-10 m-2 w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            placeholder="event date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                        <label htmlFor="details" className="block font-bold text-xl  p-2 capitalize ml-2">
                             event details:
                        </label>
                        <textarea 
                            name="details"
                            placeholder="event details" 
                            id="details" 
                            className="p-3 max-h-20 min-h-20 h-20 m-2 min-h-11/12 w-11/12 max-w-11/12 outline-none border border-blue-700 capitalize bg-transparent rounded-sm"
                            required
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                      ></textarea>
                   
                    </div>
                    <div className=" py-3 p-2 mx-auto md:w-5/6">
                       
                        <button 
                            className="border bg-blue-300  h-20 p-2 w-3/5 font-bold text-2xl mx-auto block  capitalize  rounded-md shadow-lg"
                            type="submit"> add event</button>
                   
                    </div>
                 </form>
                   
            </div>
        </div>
  </section>

  )
}

export default AddEventpage