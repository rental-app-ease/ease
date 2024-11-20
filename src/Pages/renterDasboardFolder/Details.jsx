import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const addId = params.id;
  const [categories, setCategories] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Fetch Categories
  const getCategories = async () => {
    const response = await axios.get(`https://rentease-api-zedw.onrender.com/categories`);
    setCategories(response.data); // Set categories from API response
  };
  
  // FetchAdd details
  const fetchAdd = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/items/${addId}`
    );
    setProductDetail(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    fetchAdd();
    getCategories();
  }, [addId]);

  const deleteAdd = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/items/${addId}`);
      setFeedbackMessage("apartment deleted successfully!");
      setTimeout(() => navigate("/renterdash"), 1000);
    } catch (error) {
      setFeedbackMessage("Failed! try again.");
    }
  };

  const updateAdvert = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.target);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/items/${addId}`,
        formData
      );
      setFeedbackMessage("apartment updated successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/renterdash");
      }, 1000);
    } catch (error) {
      setFeedbackMessage("Failed! try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Advert Image and Info */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full hover:shadow-3xl transition-shadow duration-300">
          <img
            src={`https://savefiles.org/${productDetail.image}?shareable_link=507`}
            alt={productDetail.title}
            className="w-full h-[300px] rounded-lg shadow-lg mb-6 object-cover hover:scale-[1.02] transition-transform duration-300"
          />
          
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 border-b pb-2">
            {productDetail.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6 italic">
            {productDetail.description}
          </p>

          <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-700">Category:</span>
              <span className="text-gray-700 bg-blue-50 px-3 py-1 rounded-full">
                {productDetail.category?.housetype}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-700">Price:</span>
              <span className="text-gray-700 bg-green-50 px-3 py-1 rounded-full font-bold">
                ${productDetail.price}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-700">Amenities</p>
                <ul className="list-disc pl-5 mt-2">
                  {productDetail.amenities?.split(',').map((amenity, index) => (
                    <li key={index} className="text-gray-700">{amenity.trim()}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-700">Location</p>
                <span className="text-gray-700">{productDetail.location}</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg font-semibold text-gray-700">Google Maps</p>
              <a 
                href={productDetail.googlemaplink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View on Google Maps
              </a>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-700">Renter:</span>
                  <span className="text-gray-600">{productDetail.rentername}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-700">Contact:</span>
                  <span className="text-gray-600">{productDetail.rentercontact}</span>
                </p>
                <a 
                  href={productDetail.whatsapplink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mt-2"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">Status:</span>
              <span className={`px-3 py-1 rounded-full ${
                productDetail.roomstatus === 'available' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {productDetail.roomstatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Editing Form and Actions */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-10">
        {isEditing ? (
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full hover:shadow-3xl transition-shadow duration-300">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
              Edit Apartment Detail
            </h1>
            <form className="space-y-6" onSubmit={updateAdvert}>
              {/* Title */}
              <div className="flex flex-col ">
                <label className="font-semibold text-gray-700">Title</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your title"
                  required
                  name="title"
                  defaultValue={productDetail.title}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Description
                </label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your description"
                  required
                  name="description"
                  defaultValue={productDetail.description}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Price</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your price"
                  required
                  name="price"
                  defaultValue={productDetail.price}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Location</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your price"
                  required
                  name="location"
                  defaultValue={productDetail.location}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Googlemap link</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your price"
                  required
                  name="googlemaplink"
                  defaultValue={productDetail.googlemaplink}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Amenities</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter available amenities. seperate with coma"
                  required
                  name="amenities"
                  defaultValue={productDetail.amenities}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Renter's name</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="rentername"
                  defaultValue={productDetail.rentername}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Renter's contact</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="number"
                  placeholder="Enter your full name"
                  required
                  name="rentercontact"
                  defaultValue={productDetail.rentercontact}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">WhatsAPP link</label>
                <input
                  className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="whatsapplink"
                  defaultValue={productDetail.whatsapplink}
                />
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Select a category</label>
                <div className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50">

                  <select name="category" required >

                    {categories.map((category) => {
                      return <option key={category.id} value={category.id}>
                        {category.housetype}
                      </option>
                    })}

                  </select>
                </div>

              </div>

              <select
                className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all hover:shadow-md bg-gray-50"
                required
                name="roomstatus"
              >
                <option value="">Select room status</option>
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>

              {/* Upload Image */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Upload Image
                </label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
                  type="file"
                  name="icon"
                />
              </div>

              {/* Submit Button */}
              <button
                className={`w-full bg-orange-600 text-white p-4 rounded-lg font-bold transition-all hover:bg-orange-500 transform hover:scale-[1.02] shadow-lg ${
                  isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update apartment"}
              </button>

              {/* Cancel Button */}
              <button
                onClick={() => setIsEditing(false)}
                className="w-full bg-black text-white p-4 rounded-lg font-bold transition-all hover:bg-gray-800 transform hover:scale-[1.02] shadow-lg mt-4"
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full hover:shadow-3xl transition-shadow duration-300 ">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2 ">
              Edit Apartment Details
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-orange-600 text-white p-4 rounded-lg font-bold transition-all hover:bg-orange-500 transform hover:scale-[1.02] shadow-lg"
              >
                Edit
              </button>
              <button
                onClick={deleteAdd}
                className="flex-1 bg-black text-white p-4 rounded-lg font-bold transition-all hover:bg-gray-900 transform hover:scale-[1.02] shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className="mt-6 max-w-md w-full bg-white p-4 rounded-xl shadow-lg border-l-4 border-orange-500">
            <p className="text-gray-800 font-medium">{feedbackMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
