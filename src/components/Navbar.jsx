import React from 'react'
import { useState } from 'react';
// import pic from "../assets/images/logo2.png"
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useUser } from './userContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Services dropdown

  console.log("logged in user -->", user)


  const handleSignOut =  ()=>{
    // clear user from state
    setUser(null)
    // clear user from local storage
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
    }

    // navigate user out of dashboard
    navigate('/')
  }

  return (
    <div className="bg-white px-4 md:px-8 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex items-center justify-between h-[60px]">
        <h3 className="font-audiowide text-2xl md:text-3xl text-orangeAccent">
          RENT<span className="text-black">EASE</span>
        </h3>

        {/* Updated Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
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
          <Link to="/about"><li className="hover:text-orange-600 cursor-pointer">About Us</li></Link>
          {user && <Link to="/renterdash"><li className="hover:text-orange-600 cursor-pointer">Dashboard</li></Link>}
          <li className="relative cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className="flex items-center space-x-1 hover:text-orange-600">
              <span>Rooms</span>
              <FiChevronDown />
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-orange-600 shadow-lg rounded-md text-white w-40">
                <Link to="/service-dash"><li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Singleroom sef</li></Link>

                <Link to="/service-dash/twobedroom"><li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Twobedroom sef</li></Link>

                <Link to="/service-dash/chamber"><li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Chamber & halls</li></Link>

                <Link to="/service-dash/threebedroom"><li className="hover:bg-orange-300 px-4 py-2 cursor-pointer">Three Bedrooms</li></Link>
              </ul>
            )}
          </li>
        <Link to="/safety">
          <li className="hover:text-orange-600 cursor-pointer">
            <a 
              href={`${window.location.origin}/safety`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Safety Tips/Report form
            </a>
          </li>
        </Link>

        </ul>

        {
          user 
          ? <button 
              onClick={handleSignOut}
              className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
            >
              Log Out
            </button> 
          : 
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="border-2 border-orange-600 text-orange-600 px-4 py-1.5 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition duration-300">
                Login
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link to="/signin">
              <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300">
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
          </div>
        }



      </nav>

      {/* Updated Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[76px] left-0 right-0 bg-white shadow-lg rounded-b-lg md:hidden">
          <ul className="px-4 py-2 space-y-3 text-base font-medium text-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="hover:text-orange-600 cursor-pointer py-2">Home</li>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <li className="hover:text-orange-600 cursor-pointer py-2">About Us</li>
            </Link>
            {user && (
              <Link to="/renterdash" onClick={() => setIsOpen(false)}>
                <li className="hover:text-orange-600 cursor-pointer py-2">Dashboard</li>
              </Link>
            )}
            
            {/* Mobile Rooms Dropdown */}
            <li className="py-2">
              <div 
                className="flex items-center justify-between hover:text-orange-600 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Rooms</span>
                <FiChevronDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <Link to="/service-dash" onClick={() => setIsOpen(false)}>
                    <li className="hover:text-orange-600 py-1">Singleroom sef</li>
                  </Link>
                  <Link to="/service-dash/twobedroom" onClick={() => setIsOpen(false)}>
                    <li className="hover:text-orange-600 py-1">Twobedroom sef</li>
                  </Link>
                  <Link to="/service-dash/chamber" onClick={() => setIsOpen(false)}>
                    <li className="hover:text-orange-600 py-1">Chamber & halls</li>
                  </Link>
                  <Link to="/service-dash/threebedroom" onClick={() => setIsOpen(false)}>
                    <li className="hover:text-orange-600 py-1">Three Bedrooms</li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/safety" onClick={() => setIsOpen(false)}>
              <li className="hover:text-orange-600 cursor-pointer py-2">Safety Tips/Report form</li>
            </Link>

            {/* Mobile Authentication Buttons */}
            {!user ? (
              <div className="space-y-2 py-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/signin" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex items-center justify-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300">
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
              </div>
            ) : (
              <button 
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
              >
                Log Out
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
