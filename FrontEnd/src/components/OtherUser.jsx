import React from 'react'

const Otheruser = () => {
  return (
    <div>
       <div className='flex gap-2 items-center  bg-black/10  hover:bg-white/10 hover:backdrop-blur-lg hover:border-white/20 rounded-xl px-2  cursor-pointer' >
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

       <div className='divider my-0 py-0'></div>

    </div>
  )
}

export default Otheruser
