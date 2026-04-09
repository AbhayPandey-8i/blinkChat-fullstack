import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'
import store from '../redux/store'

const Otheruser = ({user}) => {
  const dispatch = useDispatch()
  const {selectedUser} = useSelector(store=>store.user)
 
  const selectedUserHandler = (user) => {
    console.log(user)
    dispatch(setSelectedUser(user))
  }
  

  return (
    <div>
      <div onClick={()=>selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? "bg-black/40" : ""} flex gap-3 items-center h-14 px-2 rounded-xl bg-black/15 cursor-pointer`}>
        
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