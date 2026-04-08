import React from 'react'
import { IoSearch } from "react-icons/io5";
import Otheruser from './OtherUsers';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form className='flex items-center gap-2' action="">
        <input className='input input-bordered rounded-md bg-white text-black outline-none' type="text" placeholder='Search' />
        <button type='submit' className='btn bg-white/10 backdrop-blur-lg border-white/20 rounded-xl text-white' ><IoSearch className='w-6 h-6 outline-none' /></button>
      </form>
     <div className="divider px-3"></div>
     <Otheruser/>

     <div className='mt-2'>
        <button className=' btn btn-sm'>Logout</button>
     </div>
    </div>
  )
}

export default Sidebar
