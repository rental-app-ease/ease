import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
   </div>
  )
}

export default UserDetails