import React from 'react'
import { BsDisplay } from 'react-icons/bs'
import  ClipLoader  from 'react-spinners/ClipLoader'
const override ={
    Display: 'block',
    magrin:' 100px auto'
}

const Spinner = ({loading}) => {
  return (
  <ClipLoader 
    color='#2563eb'
    loading={loading}
    cssOverride={override}
    size={150}
    
  />
  )
}

export default Spinner