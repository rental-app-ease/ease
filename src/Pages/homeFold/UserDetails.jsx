import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import pic from "../homeFold/mapp.jpg"

export const UserDetails = () => {
  const params = useParams();
  const productId = params.id
  const navigate = useNavigate

  const [productDetail, setProductDetail] = useState({});

  const fetchProduct = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/items/${productId}`
    );
    setProductDetail(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);


  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Title and Action */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto mb-6 mt-14">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-black mb-2">
                {productDetail.title}
              </h1>

              <p className="text-lg font-semibold text-black mt-2">
                Location: <span className="text-gray-700">{productDetail.location}</span>
              </p>

            </div>
            
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <img
              src={`https://savefiles.org/${productDetail.image}?shareable_link=507`}
              alt={productDetail.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
            />
            <img
              src={`https://savefiles.org/${productDetail.image}?shareable_link=507`}
              alt={productDetail.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
            />
            {/* <img
              src={`https://savefiles.org/${productDetail.image}?shareable_link=507`}
              alt={productDetail.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4 object-cover"
            /> */}
          </div>

          {/* Property Details */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Status</h2>

            <div className="flex items-center space-x-4 text-gray-600">

              <p className="text-lg font-semibold text-black mt-2">
                Price: <span className="text-gray-700">${productDetail.price}</span>
              </p>


              <p className="text-lg font-semibold text-gray-700 mt-2">
                Room status: <span className="text-green-600">{productDetail.roomstatus}</span>
              </p>
            </div>

            {/* Property Space */}
            <p className="text-lg font-semibold text-gray-700">
              Category: <span className="text-gray-700">{productDetail.category?.housetype}</span>
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Amenities</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {productDetail.amenities &&
                  productDetail.amenities
                    .split(',')
                    .map((amenity, index) => (
                      <li key={index} className="text-md">
                        {amenity.trim()}
                      </li>
                    ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                Google Map Link:{" "}
                <a
                  href={productDetail.googlemaplink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-300 ml-2"
                >
                  Click to view location. map
                </a>
              </p>

              <div className='w-[70vw] h-[50vh] my-6'>
                <img src={pic} alt="title" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>

            </div>


            {/* Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-lg text-gray-600 mb-4">{productDetail.description}</p>
            </div>

            {/* Agent Contact */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Agent Contact</h2>

              <p className="text-lg font-semibold text-gray-700 mt-2">
                Renter name: <span className="text-orange-700">{productDetail.rentername}</span>
              </p>

              <p className="text-lg font-semibold text-gray-700 mt-2">
                Renter's number:{" "}
                <a 
                  href={`sms:${productDetail.rentercontact};body=${encodeURIComponent(`Hi, I'm interested in your property listing: ${productDetail.title}`)}`}
                  className="text-orange-700 hover:underline"
                >
                  {productDetail.rentercontact}
                </a>
              </p>

              <p className="text-lg font-semibold text-gray-700 mt-2">
                WhatsApp Link:{" "}
                {productDetail.whatsapplink ? (
                  <a
                    href={`https://wa.me/${productDetail.whatsapplink}`}
                    // href={productDetail.whatsapplink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 underline"
                  >
                    Click to Chat
                  </a>
                ) : (
                  <span className="text-red-500">No WhatsApp link provided</span>
                )}
              </p>


              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition duration-300">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserDetails