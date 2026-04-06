import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Login from './components/Login'

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

  return (
    <>
      <div className='p-4 h-screen items-center flex justify-center' >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
