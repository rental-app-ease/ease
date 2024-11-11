import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdverts = () => {
  const [feedbackMessage, setFeedbackMessage] = useState(null); // State to store feedback message
  const [isError, setIsError] = useState(false); // State to track error status
  const navigate = useNavigate();

  const saveAdvert = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      // Post the form data
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/adverts`,
        formData
      );
      // console.log("gyg", res);
      // setFeedbackMessage("Advert added successfully!");
      // setIsError(false); // Clear error state on success
      // navigate("/dashboard");
      setFeedbackMessage("Advert added successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
      //   const formData = new FormData(event.target)
      //  axios.post(`${import.meta.env.VITE_BASE_URL}/adverts`, formData)
    } catch (error) {
      setFeedbackMessage("Failed to add advert. Please try again.");
      setIsError(true); // Set error state
    }

    // Clear feedback message after a delay
    setTimeout(() => setFeedbackMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-10">
      <div className="w-full max-w-lg bg-black shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Add an Apartment
        </h1>

        {/* Feedback message */}
        {feedbackMessage && (
          <div
            className={`text-center p-4 mb-4 rounded-lg ${isError
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
              }`}
          >
            {feedbackMessage}
          </div>
        )}

<form className="space-y-6 bg-black text-white p-8 rounded-lg shadow-md" onSubmit={saveAdvert}>
  <div>
    <label className="block text-sm font-medium text-gray-300">Title</label>
    <input
      className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
      type="text"
      placeholder="Enter your title"
      required
      name="title"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Description</label>
    <textarea
      className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
      placeholder="Enter your description"
      required
      name="description"
    ></textarea>
  </div>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <label className="block text-sm font-medium text-gray-300">Price</label>
      <input
        className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
        type="text"
        placeholder="Enter your price"
        required
        name="price"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300">Category</label>
      <select
        className="w-full px-3 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
        required
        name="category"
      >
        <option value="">Select a category</option>
        <option value="condoms">Condoms</option>
        <option value="pills">Pills</option>
        <option value="Enhancements">Enhancements</option>
        <option value="lubricants">Lubricants</option>
      </select>
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Icon</label>
    <input
      className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
      type="file"
      required
      name="icon"
    />
  </div>

  <button
    className="w-full py-3 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
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
