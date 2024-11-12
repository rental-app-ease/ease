import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { apiSignup } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState("vendor");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
      };

      const response = await apiSignup(payload);
      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
      <div className="flex items-center justify-center min-h-screen pt-20 bg-black">
        <div className="w-full max-w-md p-8 space-y-6 bg-black rounded-lg shadow-lg mt-8">
          {/* Form Header */}
          <h2 className="text-2xl font-bold text-center text-orange-600">Vendor Signup</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              />
            </div>

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

            {/* Role Select */}
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                name="role"
                className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              >
                < option value="admin">admin </option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
