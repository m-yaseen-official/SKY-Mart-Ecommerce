import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaArrowRight, FaBolt, FaLock, FaRegEyeSlash } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

const Register = () => {
  return (
          <div className=' h-screen  flex flex-col justify-center  items-center bg-black text-white'>
            <div className="flex gap-3 items-center mb-8">
                      <div className="h-9 w-9 rounded-lg bg-lime-400 flex items-center justify-center">
                      <FaBolt className="text-black" />
                    </div>
                    <h1 className="font-syne font-bold text-3xl">
                      Sky<span className="text-lime-400">Mart</span>
                    </h1>
                    </div>
          
            <div className="border border-zinc-800 rounded-2xl w-110 py-8 flex flex-col items-center justify-center  bg-[#111111]">
            <div className="flex flex-col ">
              <h2 className="font-syne text-2xl font-bold mb-1">Create account</h2>
              <p className="text-zinc-500 mb-8">Join SkyMart and start shopping</p>
            </div>
            <form >
              <div className="flex w-100 items-center gap-4 mb-5  border border-zinc-800 p-3  px-4 rounded-2xl">
                <CgProfile />
                <input type="text" className='w-full h-full py-2' placeholder="Full name" id="" />
              </div>
              
              <div className="flex w-100 items-center gap-4 mb-5  border border-zinc-800 p-3  px-4 rounded-2xl">
                <MdOutlineEmail />
                <input type="text" className='w-full h-full py-2' placeholder="Email adress" id="" />
              </div>

              <div className="flex w-100 justify-between items-center gap-4 border border-zinc-800  mb-5 p-3 px-5 rounded-2xl">
                <div className="flex gap-4 items-center">
                <FaLock />
                <input type="text" className='w-full h-full py-2' placeholder="Password" id="" />
                </div>
                <div className="flex items-center gap-2">
                {
                true ?(
                <IoEyeOutline />
                  ) :(
                    <FaRegEyeSlash />
                  )

                
                
                }
                </div>
              </div>
    
              <button className="text-black font-bold font-syne bg-lime-500 mb-5 w-100 rounded-2xl justify-center p-3 flex items-center gap-2">
                Create Account <FaArrowRight />
              </button>
              <p className="items-center justify-center font-semibold text-gray-600 flex gap-2">
                Don't have an account?
                <span className="text-lime-400">Create one</span>
              </p>
            </form>
          </div>
          
          
          </div>
  )
}

export default Register