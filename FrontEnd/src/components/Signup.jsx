import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md 
    bg-white/10 backdrop-blur-lg border border-white/20">

                <h1 className="text-3xl font-bold text-center">
                    Signup
                </h1>

                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Fullname</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type="text" placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Username</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type="text" placeholder='Enter Your Username' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type="password" placeholder='Enter Your Password' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' >Confirm Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type="password" placeholder='Confirm Your Password' />
                    </div>
                    <div className='flex items-center my-4' >
                        <div className='flex items-center' >
                            <p>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>

                        <div className='flex items-center'>
                            <p>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                    </div>

                    <div className=' text-center'>

                        <p>Already have an account ? <Link to="/login" >Login
                            <button className='btn btn-block btn-sm mt-2 text-lg border-slate-700'>Login</button>
                        </Link>
                        </p>
                    </div>

                </form>


            </div>
        </div>
    )
}

export default Signup
