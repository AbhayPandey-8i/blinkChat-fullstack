import React from 'react'

const Otheruser = (props) => {
  const user = props.user

  return (
    <div>
      <div className='flex gap-3 items-center h-14 px-2 rounded-xl bg-black/10 hover:bg-white/10 hover:backdrop-blur-lg hover:border-white/20 cursor-pointer'>
        
        {/* Avatar */}
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          <img 
            src={user?.profilePhoto} 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>

        {/* Username */}
        <div className='flex-1 overflow-hidden'>
          <p className='text-white text-sm font-medium truncate'>
            {user?.fullName}
          </p>
        </div>

      </div>

      <div className='divider my-0 py-0'></div>
    </div>
  )
}

export default Otheruser