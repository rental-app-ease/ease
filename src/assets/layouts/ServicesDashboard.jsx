import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import picc from "../images/stephan.jpg"

export const ServicesDashboard = () => {
  return (
    <div>
        <Navbar/>
        <div
  className="mt-10 w-[95vw] h-[80vh] mx-auto flex flex-col justify-center items-center relative rounded-[50px] border border-gray-300 overflow-hidden bg-cover bg-center text-center"
  style={{ backgroundImage: `url(${picc})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl font-bold">Your Title Here</h1>
    <p className="mt-4 text-lg">Your description here...</p>
  </div>
</div>

        <div>
        <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}
