import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import picc from "../images/stephan.jpg"
import { createContext, useContext, useState } from 'react';




// Create a context to manage dynamic title and description
export const PageContentContext = createContext();

export const ServicesDashboard = () => {
  const [pageTitle, setPageTitle] = useState("Your Title Here");
  const [pageDescription, setPageDescription] = useState("Your description here...");

  return (
    <PageContentContext.Provider value={{ setPageTitle, setPageDescription }}>
      <div>
        <Navbar />

        <div
          className="mt-24 w-[95vw] h-[80vh] mx-auto flex flex-col justify-center items-center relative rounded-[50px] border border-gray-300 overflow-hidden bg-cover bg-center text-center"
          style={{ backgroundImage: `url(${picc})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Dynamic Content */}
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-bold">{pageTitle}</h1>
            <div className='flex space-x-2'>
             <Link to= "/"><p>Home /</p></Link> 
              <p>Services /</p>
              <p className='text-orange-600 font-extrabold text-lg'>{pageDescription}</p>
            </div>
          </div>
        </div>

        <div>
          <Outlet />
        </div>

        <Footer />
      </div>
    </PageContentContext.Provider>
  );
};
