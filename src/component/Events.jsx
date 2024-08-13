



import React from 'react';
import { Datas } from './Data';
import Event from './Event';
import Spinner  from './Spinner'


const EventsList = ({ events, loading }) => {
  if (loading) {
    return <Spinner loading={loading} />;
  } else if (events.length === 0) {
    return <p>No events found</p>;
  } else {
    return events.map((event) => (
      <Event key={event.id} event={event} />
    ));
  }
};


const Events = ({ isHome = false }) => {

  return (
    <section className="p-2 bg-blue-100">
    <div className="p-3 md:w-5/6 md:mx-auto ">
      <h4 className="font-bold text 3xl md:text-6xl text-blue-700 capitalize font-mono">
        {isHome ? 'recent event' : 'browse event'}
      </h4>
    </div>
    <div className="p2 my-4">
      <div className="flex flex-wrap md:mx-auto flex-row items-center justify-center w-full md:w-5/6 mx-auto my-5 p-4 ">
        <Datas>
          {(events, loading) => {
            if (loading) {
              return <Spinner loading={loading}/>;
            } else {
              return events.map((event) => (
                <Event key={event.id} event={event} />
              ));
            }
          }}
        </Datas>
      </div>
    </div>
  </section>
);
};
  


export default Events