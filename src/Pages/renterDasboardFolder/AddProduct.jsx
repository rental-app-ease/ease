import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdverts = () => {
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const saveAdvert = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/adverts`,
        formData
      );
      setFeedbackMessage("Advert added successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setFeedbackMessage("Failed to add advert. Please try again.");
      setIsError(true);
    }

    setTimeout(() => setFeedbackMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-10">
      <div className="w-full max-w-4xl bg-black shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Add an Apartment
        </h1>

        {/* Feedback message */}
        {feedbackMessage && (
          <div
            className={`text-center p-4 mb-4 rounded-lg ${
              isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {feedbackMessage}
          </div>
        )}

        <form
          className="space-y-6 bg-black text-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={saveAdvert}
        >
          {/* Left column */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Title</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="text"
              placeholder="Enter title"
              required
              name="title"
            />
          </div>

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
              name="mapLink"
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
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              required
              name="category"
            >
              <option value="">Select a category</option>
              <option value="single-room">Single Room</option>
              <option value="chamber-and-hall">Chamber and Hall</option>
              <option value="two-bedroom">Two Bedroom</option>
              <option value="three-bedroom">Three Bedroom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Room Status</label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              required
              name="status"
            >
              <option value="">Select room status</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Icon</label>
            <input
              className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
              type="file"
              required
              name="icon"
            />
          </div>

          <button
            className="col-span-1 md:col-span-2 w-full py-3 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdverts;
