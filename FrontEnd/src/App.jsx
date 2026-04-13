import { useEffect, useRef } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { io } from "socket.io-client"
import { setOnlineUsers } from './redux/userSlice'
import { setSocket } from './redux/socketSlice'

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/register", element: <Signup /> },
  { path: "/login", element: <Login /> },
])

function App() {
  const { authUser } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const socketRef = useRef(null)

  useEffect(() => {
    if (authUser) {
      if (socketRef.current) {
        socketRef.current.close()
        socketRef.current = null
      }

      console.log("CLIENT: creating socket for user", authUser._id)

      // ✅ autoConnect: false — lets us attach listeners BEFORE connecting
      const newSocket = io("http://localhost:8080", {
        query: { userId: authUser._id },
        transports: ["websocket"],
        autoConnect: false,
      })

      socketRef.current = newSocket
      dispatch(setSocket(newSocket))

      // ✅ Attach ALL listeners before connecting
      newSocket.on("connect", () => {
        console.log("CLIENT: socket connected, id =", newSocket.id)
      })

      newSocket.on("connect_error", (err) => {
        console.log("CLIENT: connection error =", err.message)
      })

      newSocket.on("disconnect", (reason) => {
        console.log("CLIENT: socket disconnected, reason =", reason)
      })

      newSocket.on("getOnlineUsers", (users) => {
        console.log("CLIENT: got online users =", users)
        dispatch(setOnlineUsers(users))
      })

      // ✅ Connect AFTER listeners are attached
      newSocket.connect()

      return () => {
        console.log("CLIENT: cleanup — closing socket")
        newSocket.close()
        socketRef.current = null
        dispatch(setSocket(null))
      }

    } else {
      if (socketRef.current) {
        console.log("CLIENT: authUser gone — closing socket")
        socketRef.current.close()
        socketRef.current = null
        dispatch(setSocket(null))
        dispatch(setOnlineUsers([]))
      }
    }
  }, [authUser])

  return (
    <div className='p-4 h-screen items-center flex justify-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App