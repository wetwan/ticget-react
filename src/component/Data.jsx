
// import { useState , useEffect} from 'react'

// export const Datas =({Children}) =>{
//     const [events , setEvents] = useState([])
//     const [loading , setLoading] = useState(true)

//     useEffect (() =>{
//         const fetchEvents = async () =>{
//             try {
//                 const res = await fetch('http://localhost:5000/events')
//                 const data  = await res.json()
//                 setEvents(data)
//         } catch (error){
//             console.log('data feching err', error)
//         } finally{
//             setLoading(false)
//         }
//     }
//         fetchEvents()
//     }, [])
    
//   return Children(events,loading)
  
// }


import  { useState, useEffect } from 'react';

export const Datas = ({ children }) => {
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

  return children(events, loading);
};

