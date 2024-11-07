import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

export const UserDashboard = () => {
  return (
    <div>
        <Navbar/>
        <SideBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
