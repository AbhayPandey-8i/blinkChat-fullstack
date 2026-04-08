import React from 'react'
import Sendinput from './Sendinput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    
       <div className='md:min-w-[550px] flex flex-col'>

       <div className='flex gap-2 items-center  bg-black/40  px-4 py-2 mb-2 ' >
         <div className='avatar'>
           <div className='w-10 rounded-full avatar-online'>
            <img src="https://i.pinimg.com/736x/54/86/d9/5486d987b94707df3e352c2de0a11914.jpg" alt="" />
           </div>
         </div>
        <div className='avatar '>
          <div className='flex gap-2 flex-1 items-center'>
            <p>Anushka</p>
          </div>
        </div>
       </div>
       <Messages/>
       <Sendinput/>
    </div>
    
  )
}

export default MessageContainer
