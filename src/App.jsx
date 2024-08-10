import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider   } from 'react-router-dom'
import Homepage from './pages/Homepage'
import BrowseEvent from './pages/BrowseEvent'
import MainLayout from './layout/MainLayout'
import Eventspage from './pages/Eventspage'
import Eventlayout from './layout/Eventlayout'
import Eventpage, { eventLoader } from './pages/Eventpage'
import AddLayout from './layout/AddLayout'
import Missingpage from './pages/Missingpage'
import EditEvent from './pages/EditEvent'
import AddEventpage from './pages/AddEventpage'

// add event 
const addEvent = async (newEvent) =>{
  const res = await fetch('http://localhost:5000/events',{ 
    method: 'POST',
    Headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEvent)
  })
  return
}

// delete event 
const deleteEvent = async (id) =>{
  const res = await fetch(`http://localhost:5000/events/${id}`,{ 
    method: 'DELETE'

  })
  return
}

// add event 
const updateEvent = async (event) =>{
  const res = await fetch(`http://localhost:5000/events/${event.id}`,{ 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  })
  if (!res.ok) {
    throw new Error('Failed to update event');
  }
  const data = await res.json();
  return data 
}




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Homepage />}/>
        <Route  element={<MainLayout/>}>
          <Route 
            path='/browse' 
            element={< BrowseEvent  
            className='bg-blue-100'/>} 
          />
          <Route 
            path='/event/:type' 
            element={< Eventspage  
            className='bg-blue-100'/>} 
          />
          <Route 
            path='*' 
            element={< Missingpage  
            className='bg-blue-100'/>} 
          />
         
         
        </Route>
        <Route element={<Eventlayout/>} >
           <Route 
            path='/browse/:id' 
            element={< Eventpage 
            deleteEvent={deleteEvent}  
            className='bg-blue-100'/>} 
            loader={eventLoader} 
          />
        </Route>
        <Route element={<AddLayout/>} >
           <Route 
            path='/add-event' 
            element={< AddEventpage  
            className='bg-blue-100' 
            AddEventSubmit={addEvent} />} />
           <Route 
            path='/edit-event/:id' 
            element={< EditEvent  
            className='bg-blue-100'  
            updateEventSubmit ={updateEvent}
           />}loader={eventLoader}  />
        </Route>
      </>
      
    )
  )
  return (
   <RouterProvider router={router}  />
  )
}

export default App