import axios from 'axios';
import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';

const Sendinput = () => {
const [message, setMessage] = useState("")
const dispatch = useDispatch()
const {selectedUser} = useSelector(store=>store.user)
const {messages} = useSelector(store=>store.message)

const onSubmitHandler = async (e) => {
  


  e.preventDefault()
  setMessage("")

  try {
    const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`, {message}, {
      headers:{
        'Content-Type':'application/json'
      },
      withCredentials:true
    })
    console.log(res)
    dispatch(setMessages([...messages, res?.data?.newMessage]))
  } catch (error) {
    console.log(error)
  }

}


  return (
    <form onSubmit={onSubmitHandler} className='px-4 my-3' >
        <div className='w-full relative' >
           <input value={message} onChange={(e) => setMessage(e.target.value)} className='border text-sm rounded-lg p-3 block border-none outline-none w-full  bg-black/40 text-white' type="text" placeholder='Type here' />
           <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-4 text-2xl' >
            <IoIosSend /> 
           </button>
        </div>
    </form>
  )
}

export default Sendinput
