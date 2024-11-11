import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-black sticky top-0 flex flex-col py-6 px-4 rounded-lg shadow-md border border-gray-200 mt-10">
      {/* Our Services Section */}
      <div className="mb-6 p-4 bg-black rounded-lg ">
        <h3 className="text-lg font-semibold text-orange-600 mb-4 mt-10">Your Dashboard</h3>
        <ul className="space-y-4 text-white">

          <Link to= "/renterdash">
          <li className="flex justify-between items-center hover:text-orange-600 cursor-pointer">
            <span>Your Listings</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>
          
          <Link to= "/renterdash/add">
          <li className="flex justify-between items-center hover:text-orange-600 cursor-pointer">
            <span>Add A House</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>

          <Link to= "">
          <li className="flex justify-between items-center hover:text-orange-600 cursor-pointer">
            <span>Airport Transfer</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>

          <li className="flex justify-between items-center hover:text-orange-600 cursor-pointer">
            <span>Chauffeur Services</span>
            <FaArrowRight className="text-white" />
          </li>
        </ul>
      </div>

      {/* Need Help Section */}
      <div className="p-4 bg-orange-600 rounded-lg mt-auto text-center">
        {/* <div className="text-white text-3xl mb-2">❓</div> */}
        <h3 className="text-lg font-semibold text-white">Need help?</h3>
        <p className="text-white text-sm mt-2">
          Our support team is here to help you.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
