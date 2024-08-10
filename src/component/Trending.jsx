import React, { useState, useEffect } from 'react';
import Event from './Event';
import Spinner from './Spinner';

export const getRandomevent = (events, slices) => {
  if (events.length === 0) return [];
  const random = Math.floor(Math.random() * (events.length - slices + 1)); // Fix index bounds
  return events.slice(random, random + slices);
};

const Trending = () => {
  const [randomEvent, setRandomEvent] = useState([]);
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    if (events.length > 0) {
      setRandomEvent(getRandomevent(events, 4));
    }
  }, [events]);

  return (
    <section className="p-2 bg-blue-100">
      <div className="p-3 md:w-5/6 md:mx-auto">
        <h4 className="font-bold text-3xl md:text-6xl text-blue-700 uppercase font-mono">Trending</h4>
      </div>
      <div className="p-2 my-4 mx-auto">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="flex flex-wrap md:mx-auto flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4 ">
            {randomEvent.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Trending;
