import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers'
import axios from 'axios';
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setOtherUsers, setOnlineUsers, setSelectedUser } from '../redux/userSlice';  // ✅ import these

const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { otherUsers } = useSelector(store => store.user)
  const [search, setSearch] = useState("")

  const searchSubmitHandler = (e) => {
    e.preventDefault()
    const conversationUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    )
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]))
    } else {
      toast.error("User not found")
    }
  }

  const logoutHandler = async () => {
    try {
      await axios.get(`http://localhost:8080/api/v1/user/logout`, {
        withCredentials: true  // ✅ send cookie so server can clear it
      })

      // ✅ clear everything from Redux and localStorage
      dispatch(setAuthUser(null))
      dispatch(setOtherUsers(null))
      dispatch(setSelectedUser(null))
      dispatch(setOnlineUsers([]))

      toast.success("Logged out successfully")
      navigate("/login")

    } catch (error) {
      console.log(error)
      toast.error("Logout failed")
    }
  }

  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form onSubmit={searchSubmitHandler} className='flex items-center gap-2' action="">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='input input-bordered rounded-md bg-white text-black outline-none'
          type="text"
          placeholder='Search'
        />
        <button type='submit' className='btn bg-white/10 backdrop-blur-lg border-white/20 rounded-xl text-white'>
          <IoSearch className='w-6 h-6 outline-none' />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className='mt-2'>
        <button onClick={logoutHandler} className='btn btn-sm bg-white/10 backdrop-blur-lg border-white/20 rounded-xl text-white'>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar