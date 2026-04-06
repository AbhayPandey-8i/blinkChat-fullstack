import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'



const Login = () => {

const navigate = useNavigate()
const [user, setUser] = useState({
    username:"",
    password:"",
})

 const onSubmitHandler = async (e) => {
   e.preventDefault()

  try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
                headers: {
                    "Content-Type": 'application/json'
                },
                withCredentials: true
            
            });
            navigate("/")
       console.log(res)
           
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        }

   setUser({
    username:"",
    password:"",
   })
 }

    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md 
    bg-white/10 backdrop-blur-lg border border-white/20">

                <h1 className="text-3xl font-bold text-center">
                    Login
                </h1>

                <form onSubmit={onSubmitHandler} action="">

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Username</span>
                        </label>
                        <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} className='w-full input input-bordered h-10' type="text" placeholder='Enter Your Username' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Password</span>
                        </label>
                        <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} className='w-full input input-bordered h-10' type="password" placeholder='Enter Your Password' />
                    </div>

                    

                    <div className=' text-center my-4'>

                        <p>New to BlinkChat ? <Link to="/register" > <span className='text-blue-400'>Signup</span>

                        </Link></p>
                            <button type='submit' className='btn btn-block btn-sm mt-2 text-lg border-slate-700'>Login</button>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default Login
