import React from 'react'
import { IoIosSend } from "react-icons/io";

const Sendinput = () => {
  return (
    <form className='px-4 my-3' >
        <div className='w-full relative' >
           <input className='border text-sm rounded-lg p-3 block border-none outline-none w-full  bg-black/40 text-white' type="text" placeholder='Type here' />
           <button className='absolute inset-y-0 right-0 flex items-center pr-4 text-2xl' >
            <IoIosSend /> 
           </button>
        </div>
    </form>
  )
}

export default Sendinput
