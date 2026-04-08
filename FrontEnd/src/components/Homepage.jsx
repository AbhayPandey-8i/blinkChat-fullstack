import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const Homepage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md 
    bg-white/10 backdrop-blur-lg border border-white/20' >
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Homepage
