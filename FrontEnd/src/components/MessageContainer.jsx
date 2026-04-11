import React, { useEffect } from 'react'
import Sendinput from './Sendinput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { setSelectedUser } from '../redux/userSlice'

const MessageContainer = () => {
  const {selectedUser, authUser} = useSelector(store=>store.user)
  const dispatch = useDispatch()
  useEffect(() => {
    return() => dispatch(setSelectedUser(null))
  }, [])
  
  return (

    <>
    {
      selectedUser !== null ? (<div className='md:min-w-[550px] flex flex-col'>

       <div className='flex gap-2 items-center  bg-black/40  px-4 py-2 mb-2 h-16 overflow-hidden ' >
         <div className='avatar'>
           <div className='w-10 rounded-full avatar-online'>
            <img src={selectedUser?.profilePhoto} alt="" />
           </div>
         </div>
        <div className='avatar '>
          <div className=' flex gap-2 flex-1 items-center'>
          <p className='truncate' > {selectedUser?.fullName} </p>
          </div>
        </div>
       </div>
       <Messages/>
       <Sendinput/>
    </div>) : (
      <div className='md:min-w-[550px] flex flex-col justify-center items-center '>       
      <h1 className='text-4xl font-bold'>Hi, {authUser?.fullName} </h1> 
      <h1 className='text-2xl ' >Lets start convo baby</h1>
      </div>
    )
    }
    </>
    
       
    
  )
}

export default MessageContainer
