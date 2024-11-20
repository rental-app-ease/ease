import React from 'react';
import { FaArrowRight, FaHome, FaPlusCircle, FaHistory, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-black sticky top-0 flex flex-col py-6 px-4 rounded-lg shadow-md border border-gray-200 mt-10">
      {/* Our Services Section */}
      <div className="mb-6 p-4 bg-black rounded-lg ">
        <h3 className="text-lg font-semibold text-orange-600 mb-4 mt-10">Your Dashboard</h3>
        <ul className="space-y-4 text-white">

          <Link to= "/renterdash">
          <li className="flex items-center hover:text-orange-600 cursor-pointer">
            <FaHome className="mr-3 text-orange-600" />
            <span className="flex-grow">Your Listings</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>
          
          <Link to= "/renterdash/add">
          <li className="flex items-center hover:text-orange-600 cursor-pointer">
            <FaPlusCircle className="mr-3 text-orange-600" />
            <span className="flex-grow">Add A House</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>

          <Link to= "/renterdash/history">
          <li className="flex items-center hover:text-orange-600 cursor-pointer">
            <FaHistory className="mr-3 text-orange-600" />
            <span className="flex-grow">History</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>

          <Link to= "/renterdash/messages">
          <li className="flex items-center hover:text-orange-600 cursor-pointer">
            <FaEnvelope className="mr-3 text-orange-600" />
            <span className="flex-grow">Messages</span>
            <FaArrowRight className="text-white" />
          </li>
          </Link>
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
