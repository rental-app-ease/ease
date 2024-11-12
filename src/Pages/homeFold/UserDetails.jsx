import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import pic from "../aboutfolder/house1.jpg"
import pic1 from "../aboutfolder/house2.jpg"
import pic2 from "../aboutfolder/house3.jpg"

export const UserDetails = () => {
  const params = useParams();
  const productId = params.id
  const navigate = useNavigate

  const [productDetail, setProductDetail] = useState({});

  const fetchProduct = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/adverts/${productId}`
    );
    setProductDetail(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);


  return (
    <div>
      <div className="w-full md:w-[30vw] p-6 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105">
        <img
          src={`https://savefiles.org/${productDetail.icon}?shareable_link=437`}
          alt={productDetail.title}
          className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          {productDetail.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{productDetail.description}</p>
        <p className="text-lg font-semibold text-gray-700">
          Category: <span className="text-blue-600">{productDetail.category}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          Price: <span className="text-green-600">${productDetail.price}</span>
        </p>
      </div>





      <div className="bg-gray-100 min-h-screen p-6">
        {/* Title and Action */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">3 Bed Room Commercial Villa in Jumeirah</h1>
              <p className="text-gray-500">Jumeirah, Dubai</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition duration-300">
              Book a Tour
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <img className="col-span-2 w-full h-80 object-cover rounded-lg" src={pic} alt="Main House" />
            <img className="w-full h-48 object-cover rounded-lg" src={pic1} alt="House" />
            <img className="w-full h-48 object-cover rounded-lg" src={pic2} alt="House" />
          </div>

          {/* Property Details */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Status</h2>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <span>Price:</span> <strong>$2,500/mo</strong>
              </div>
              <div className="flex items-center space-x-2">
                <span>Status:</span> <strong>Available</strong>
              </div>
            </div>

            {/* Property Space */}
            <div className="mt-6 flex space-x-8 text-gray-700">
              <div>
                <h3 className="font-bold">Rooms</h3>
                <p>3 Bedrooms</p>
              </div>
              <div>
                <h3 className="font-bold">Baths</h3>
                <p>2 Bathrooms</p>
              </div>
              <div>
                <h3 className="font-bold">Size</h3>
                <p>3200 sq ft</p>
              </div>
              <div>
                <h3 className="font-bold">Floor</h3>
                <p>2 Floors</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Swimming Pool</li>
                <li>Garden</li>
                <li>Gym</li>
                <li>Parking</li>
                <li>High-Speed Internet</li>
              </ul>
            </div>

            {/* Location */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="w-full h-48 bg-gray-200 rounded-lg">
                {/* Replace with actual map iframe or image */}
                <p className="text-center text-gray-500">Map goes here</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                This spacious villa offers the perfect balance of luxury and comfort. Located in the heart of Jumeirah, it features a beautiful garden, private pool, and modern amenities. Ideal for families looking for a serene and upscale living experience.
              </p>
            </div>

            {/* Agent Contact */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Agent Contact</h2>
              <p className="text-gray-700">Angela Morris</p>
              <p className="text-gray-500">Real Estate Agent</p>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition duration-300">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserDetails