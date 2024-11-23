import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Fraud = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
      }, [])
  const saveAdvert = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/fraudreport`,
        formData
      );
      toast.success('House added successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error('Failed to add house. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-orange-500 mb-8">
          Report Fraud
        </h1>

        <form className="space-y-8" onSubmit={saveAdvert}>
          {/* Reporter Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200">Reporter Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="nameofreporter"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Contact Number</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="text"
                  placeholder="Enter your contact"
                  required
                  name="contactofreporter"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Date of Event</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="date"
                  required
                  name="dateofevent"
                />
              </div>
            </div>
          </div>

          {/* Scammer Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-200">Scammer Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="text"
                  placeholder="Enter scammer's name"
                  required
                  name="nameofscammer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Contact Number</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  type="text"
                  placeholder="Enter scammer's contact"
                  required
                  name="contactofscammer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-200 mb-2">Description</label>
                <textarea
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-gray-600 transition duration-200"
                  placeholder="Enter any description about scammer"
                  required
                  name="description"
                  rows="3"
                />
              </div>
            </div>
          </div>

          {/* Incident Details Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Evidence</label>
                <input
                  className="appearance-none rounded-lg w-full px-5 py-3 bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                  type="file"
                  required
                  name="fraudimage"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 disabled:bg-orange-400 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Submit Report'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fraud;
