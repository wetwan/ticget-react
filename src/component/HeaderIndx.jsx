
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/terget logo.png'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Event from './Event';

const HeaderIndx = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const res = await fetch('http://localhost:5000/events');
          const data = await res.json();
          setEvents(data);
        } catch (error) {
          console.log('Data fetching error:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchEvents();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission
    };
  
    // Filter events based on search input
    const filteredEvents = events.filter(event => {
      return event.title.toLowerCase().includes(search.toLowerCase());
    });
  return (
    <>
             <header id="h" className="px-1 mb-2  bg-blue-800 scroll-smooth">
    <div className="  md:w-5/6 mx-auto py-4 px-2 my-4  rounded">
        <Link to='/' className="flex items-center  justify-around h-40 mx-auto ">
             <div className=" rounded md:mx-3 mx-auto w-3/12 h-5/6 md:w-4/12">
                  <img src={logo} alt="logo" className="w-full h-full "/>
            </div>
             <div className=" md:px-3 md:py-0 py-7 rounded mr-3 w-4/12  h-5/6 ">
                <h1 className="  md:text-8xl text-4xl text-center w-fit  font-sans uppercase text-blue-50 font-extrabold">
                    ticget
                </h1>
             </div>
        </Link>
       
    </div>
    <div className="w-full h-auto p-4 mx-auto">
         <form  onSubmit={handleSubmit} className="gap-1  h-20  mx-auto flex items-center rounded-xl justify-center w-5/6 md:w-5/12  my-4 bg-blue-50">
            <label htmlFor="search" className="absolute left-[-1000000px]">
                search
            </label>
            <input 
                type="search"
                className="w-5/6 m-3 outline-none bg-transparent h-5/6 p-1 text-xl py-3  capitalize"
                placeholder="search for your event"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <FaMagnifyingGlass className="p-4 fa-solid fa-magnifying-glass    h-4/5 text-3xl md:p-4 text-blue-700"/>
         </form> 
    </div>
    </header>
    <section className="p-2 bg-blue-100 mt-20">
        {loading ? (
          <p>Loading...</p>
        ) : (
            <>
            {search !== '' && (
              <>
                {filteredEvents.length > 0 ? (
                  <div className="flex flex-wrap flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4">
                    {filteredEvents.map(event => (
                      <Event key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <p>No events found</p>
                )}
              </>
            )}
          </>

        )}
      </section>
    </>
    
   
  )
}

export default HeaderIndx