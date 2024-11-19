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
    <div className=" md:flex-row md:ml-[5vw] items-center md:items-start bg-gray-100 min-h-screen p-8 mt-32">
      {/* Advert Image and Info */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-10">
        <img
          src={`https://savefiles.org/${productDetail.image}?shareable_link=507`}
          alt={productDetail.title}
          className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          {productDetail.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{productDetail.description}</p>

        <p className="text-lg font-semibold text-gray-700">
          Category: <span className="text-blue-600">{productDetail.category?.housetype}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Price: <span className="text-green-600">${productDetail.price}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Amenities: <span className="text-green-600">{productDetail.amenities}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Location: <span className="text-green-600">{productDetail.location}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Googlemap link: <span className="text-green-600">{productDetail.googlemaplink}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Room status: <span className="text-green-600">{productDetail.roomstatus}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Renter name: <span className="text-green-600">{productDetail.rentername}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Renter contact: <span className="text-green-600">{productDetail.rentercontact}</span>
        </p>

        <p className="text-lg font-semibold text-gray-700 mt-2">
          Whatsapplink: <span className="text-green-600">{productDetail.whatsapplink}</span>
        </p>

      </div>

      {/* Editing Form and Actions */}
      <div className="min-h-screen flex flex-col items-center justify-center pt-10">
        {isEditing ? (
          <div className="min-h-screen flex flex-col items-center justify-center pt-105]">
            <h1 className="font-extrabold text-2xl mb-6 text-orange-600">
              Edit Apartment Detail
            </h1>
            <form className="space-y-4" onSubmit={updateAdvert}>
              {/* Title */}
              <div className="flex flex-col ">
                <label className="font-semibold text-gray-700">Title</label>
                <input
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md w-[40vw]"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                  className="border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:shadow-md"
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
                <div className=" border-2 rounded-lg p-3 focus:ring-blue-500 transition-all hover:shadow-md">

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
                className="w-full px-3 py-2 border border-gray-500 rounded-md text-gray-700 focus:outline-none focus:ring-2 "
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
                className={`w-full bg-orange-600 text-white p-3 rounded-lg font-bold mt-6 transition-all hover:bg-orange-400 transform hover:scale-105 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""
                  }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update apartment"}
              </button>
            </form>

            {/* Cancel Button */}
            <button
              onClick={() => setIsEditing(false)}
              className="mt-4 w-full bg-black text-white p-3 rounded-lg font-bold transition-all hover:bg-gray-800 transform hover:scale-105"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
            <h1 className="font-extrabold text-2xl mb-6 text-gray-800">
              Manage Advert
            </h1>
            <div className="flex space-x-4">
              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(true)}
                className="bg-black text-white p-3 rounded-lg font-bold transition-all hover:bg-gray
                transform hover:scale-105"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={deleteAdd}
                className="bg-orange-600 text-white p-3 rounded-lg font-bold transition-all hover:bg-red-600 transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md">
            {feedbackMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
