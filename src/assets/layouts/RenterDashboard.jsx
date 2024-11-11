import React from 'react';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

export const RenterDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 justify-center">
        {/* Sidebar */}
        <div className="flex-none">
          <SideBar />
        </div>

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
