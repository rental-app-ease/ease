import React from 'react'

import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 w-[95vw] h-[50vh] mx-auto flex flex-col justify-center items-center relative rounded-[50px] border border-gray-300 overflow-hidden bg-cover bg-center text-center bg-black text-white">
      {/* Title and Description */}
      <h3 className="text-3xl font-semibold mb-2">Let's Connect!</h3>
      <p className="text-gray-400 text-sm mb-6">Stay up to date with our latest product updates and announcements</p>

      {/* Email Subscription Form */}
      <form className="flex items-center mb-6">
        <input
          type="email"
          placeholder="Type your e-mail here..."
          className="p-3 rounded-l-full border-none focus:outline-none w-72 md:w-96"
        />
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-r-full transition duration-300"
        >
          Join
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <FaFacebookF className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
        <FaGooglePlusG className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
        <FaInstagram className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
        <FaLinkedinIn className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
        <FaTwitter className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
        <FaYoutube className="text-gray-400 hover:text-white text-xl transition duration-300 cursor-pointer" />
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 text-xs mt-6">&copy; 2024 home ride. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;


