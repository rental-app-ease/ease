import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddAdverts = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getCategories = async () => {
   
      const response = await axios.get(`https://rentease-api-zedw.onrender.com/categories`);
      setCategories(response.data); // Set categories from API response
  };
useEffect(() => {
        getCategories();
      }, [])
  const saveAdvert = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/items`,
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
        navigate("/renterdash");
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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-10">
      <div className="w-full max-w-4xl bg-black shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Add an Apartment
        </h1>

        <form
          className="space-y-6 bg-black text-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={saveAdvert}
        >
          {/* Basic Information Group */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Title</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter title"
              required
              name="title"
            />
          </div>

          {/* Location Group */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Location</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter location"
              required
              name="location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Google Map Link</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter map link"
              required
              name="googlemaplink"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Price</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter price"
              required
              name="price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Renter name</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter your name"
              required
              name="rentername"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Renter contact</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter your number"
              required
              name="rentercontact"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Whatsapp number</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="tel"
              placeholder="Enter your whatsapp number (e.g., +254123456789)"
              pattern="^\+[1-9]\d{1,14}$"
              required
              name="whatsapplink"
            />
          </div>

          {/* Right column */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              placeholder="Enter description"
              required
              name="description"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Amenities</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              placeholder="Enter amenities"
              required
              name="amenities"
            ></textarea>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-300">Category</label>
          <select name="category" required className="w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition">
           
            {categories.map((category) => {
              return <option key={category.id} value={category.id}>
              {category.housetype} 
            </option>
            })}
            
          </select>
        </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Room Status</label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              required
              name="roomstatus"
            >
              <option value="">Select room status</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">image</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="file"
              required
              name="image"
            />
          </div>

          <button
            className="col-span-1 md:col-span-2 w-full py-3 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                Uploading...
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdverts;
