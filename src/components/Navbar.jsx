import React from 'react'
import { useState } from 'react';
// import pic from "../assets/images/logo2.png"
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Services dropdown

  return (
    <div className="bg-white px-4 md:px-8 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex items-center justify-between h-[60px]">
        <h3 className="font-audiowide text-2xl md:text-3xl text-orangeAccent">
          HOME<span className="text-black">RIDE</span>
        </h3>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop only) */}
        <ul className="hidden md:flex space-x-6 text-base font-medium text-gray-800">

          <Link to="/"> <li className="hover:text-orange-600 cursor-pointer">Home</li></Link>
          <li className="hover:text-orange-600 cursor-pointer">About Us</li>
          <li className="relative cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className="flex items-center space-x-1 hover:text-orange-600">
              <span>Services</span>
              <FiChevronDown />
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-orange-600 shadow-lg rounded-md text-white w-40">
                <Link to= "/service-dash"><li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Singleroom sef</li></Link>
                
                <li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Two Bedrooms</li>
                <li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Chamber & halls</li>
                <li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Three Bedrooms</li>
              </ul>
            )}
          </li>
          <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
        </ul>
        <Link to="/login"> <h4>Login</h4> </Link>


        {/* Sign Up Button */}
        <Link to="/signin">
          <button className="hidden md:flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300">
            <span>Sign Up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L19 10l-5.5 5.5M5 10h14" />
            </svg>
          </button>
        </Link>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-2 space-y-2 text-base font-medium text-gray-800 md:hidden">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">About Us</li>
          <li className="hover:text-orange-600 cursor-pointer">Services</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
