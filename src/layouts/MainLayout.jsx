import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen font-clash bg-[#0B0B0B] text-white overflow-y-auto'>
      <div>
        <Navbar />  
      </div >
      <div className=' h-full mb-10 '>

      <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout