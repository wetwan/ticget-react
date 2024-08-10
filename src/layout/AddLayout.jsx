import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Nav from '../component/Nav'

const AddLayout = () => {
  return (
    <>
         <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default AddLayout