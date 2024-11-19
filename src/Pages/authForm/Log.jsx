import { useNavigate } from "react-router-dom"; // Use for navigation after login
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { apiSignin } from "../../services/auth";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; // Google auth
import { ToastContainer, toast } from "react-toastify"; // Toast library
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import { useUser } from "../../components/userContext";

const Log = () => {
  const {user, setUser}= useUser()
  const navigate = useNavigate(); // Initialize useNavigate for redirection after login
  const [role, setRole] = useState("vendor"); // State to store the selected role

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the page from reloading

    const formData = new FormData(event.target); // get data from the form
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiSignin({ email, password });
      if (response.status === 200) {
        // Store token
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify({email}))
        setUser({email})       
        //get user profile
        // const ProfileResponse = await apiGetProfile();
        // console.log(ProfileResponse.data);

        // Show success toast 
        toast.success("Login successful!");

        // Redirect user after successful login
          navigate("/renterdash"); // Change to your desired path
      }
    } catch (error) {
      // Show error toast
      toast.error("Login failed! Please check your credentials.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword"); // Navigate to the Forgot Password page
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-[#fff8f6] pt-20 bg-black">
        <div className="w-full max-w-md p-8 space-y-6 bg-black rounded-lg shadow-lg">
          {/* Form Header */}
          <h2 className="text-2xl font-bold text-center text-white">Vendor Login</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition"
            >
              Login
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <button
              className="text-orange-600 hover:text-orange-400 font-semibold transition"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>


      <Footer />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default Log;
