import React from 'react'
import { Outlet } from 'react-router-dom'
import EventYouMightLike from '../component/EventYouMightLike'
import Footer from '../component/Footer'
import Nav from '../component/Nav'

const Eventlayout = () => {
  return (
    <>  
        <Nav />
        <Outlet />
        <EventYouMightLike />
        <Footer />
    </>
   
  )
}

export default Eventlayout