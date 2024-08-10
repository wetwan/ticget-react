import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const Missingpage = () => {
  return (
    <section className="text-center flex flex-col justify-center mt-1 items-center h-[90vh]">
    <FaExclamationTriangle className="text-yellow-400 fa-4x mb-4"/>
    <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    <p className="text-xl mb-5">This page does not exist</p>
    <Link
      to="/"
      className="text-white bg-blue-700 hover:bg-blue-900 rounded-md px-3 py-2 mt-4"
      >Go Back</Link
    >
  </section>
  )
}

export default Missingpage