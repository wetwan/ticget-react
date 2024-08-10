import React, { useState, useEffect } from 'react';
import logo from '../assets/terget logo.png';
import { Link } from 'react-router-dom';
import Event from './Event';
import { motion } from 'framer-motion';

const Nav = () => {
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
      <motion.header 
         initial={{y:-300}}
         animate={{y:-20}}
         transition={{delay: 1}}
         className="fixed top-0 py-2 shadow-md shadow-blue-700 bg-blue-100 z-10 border w-full mb-5">
        <div 
          className="flex items-center justify-evenly px-2 text-blue-600 m-2"
          >
          <Link to="/" className="block w-full whitespace-nowrap">
            <motion.div className="w-5/12 p-2 h-16 mx-3 my-1 flex items-center justify-evenly"
             initial={{x: '-100vw'}}
             animate={{x: 0}} 
             transition={{delay: 1.2}}
             >
              <div className="w-1/6 p-0.5 h-full mx-1 rounded">
                 
                <img src={logo} alt="logo" className="h-full w-full" />
              </div>
              <div className="w-4/6 p-0.5 h-full mx-1 overflow-hidden">
                <h1 className="font-bold w-full capitalize font-serif text-3xl leading-[.9] h-full">
                  Ticget
                </h1>
              </div>
            </motion.div>
          </Link>
          <div className="w-4/6 p-0.5 h-10 mx-3 my-1">
            <form onSubmit={handleSubmit} className="p-1 flex items-center justify-evenly w-full h-full">
              <div className="w-5/6 border border-blue-400 rounded h-full">
                <label htmlFor="search" className="absolute left-[-10000000px]">
                  Search
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-full text-blue-600 rounded-sm h-full outline-none p-1 text-sm bg-transparent capitalize"
                  placeholder="Enter your event"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </motion.header>
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
  );
};

export default Nav;




