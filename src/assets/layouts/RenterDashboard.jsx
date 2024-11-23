import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

export const RenterDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Hamburger Menu Button (visible on mobile) */}
        <button 
          className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 transition duration-200 ease-in-out
          z-30 lg:flex-none bg-white
        `}>
          <SideBar />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Outlet Content */}
        <div className="flex-1 flex justify-center items-center p-6">
          <div className="w-full max-w-4xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
