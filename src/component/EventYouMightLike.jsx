


import React from 'react';
import Event from './Event';
import { getRandomevent } from './Trending';
import { Datas } from './Data';
import Spinner from './Spinner';


const EventYouMightLike = () => {
  return (
    <section className="p-2 mt-32 scroll-m-36 bg-blue-100 scroll-smooth">
      
      <div className="p-3 md:w-5/6 md:mx-auto">
        <h4 className="font-bold text-3xl md:text-2xl text-blue-700 uppercase font-mono">
          Event You Might Like
        </h4>
      </div>
      <div className="p-2 my-4">
      <div className="flex flex-wrap md:mx-auto flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4 ">
          <Datas>
            {(events, loading) => {
              if (loading) {
                return <Spinner loading={loading}/>;
              } else {
          
                const randomEvent = getRandomevent(events, 5);
                return (
                  <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4">
                    {randomEvent.map((event) => (
                      <Event key={event.id} event={event} />
                    ))}
                  </div>
                );
              }
            }}
          </Datas>
        </div>
      </div>
    </section>
  );
};

export default EventYouMightLike;
