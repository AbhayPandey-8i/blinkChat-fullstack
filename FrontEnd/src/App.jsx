import { useEffect, useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client"
import { setOnlineUsers } from './redux/userSlice'
import { setSocket } from './redux/socketSlice'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])

function App() {
  const { socket } = useSelector(store => store.socket)
  const {authUser} = useSelector(store=>store.user)
  const dispatch = useDispatch()

  useEffect(() => {
   if (authUser) {
    const newSocket = io("http://localhost:8080",{
      query:{
       userId:authUser._id
      }

    })
     dispatch(setSocket(newSocket))

     newSocket.on("getOnlineUsers", (onlineUsers) => {
       dispatch(setOnlineUsers(onlineUsers))
     })

     return ()=> newSocket.close()
     
   } else{
    if (socket) {
      socket.close()
     dispatch(setSocket(null)) 
    }
   }
  }, [authUser])
  

  return (
    <>
      <div className='p-4 h-screen items-center flex justify-center' >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
