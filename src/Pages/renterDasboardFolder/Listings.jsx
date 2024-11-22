import React, { useState, useEffect } from 'react'
import { apiGetProducts, apiVendorsProduct } from '../../services/products';
import { Link } from 'react-router-dom';
import { BiMap, BiDollarCircle } from "react-icons/bi";


const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await apiVendorsProduct()

    setProducts(response.data.reverse())
    console.log(response.data)
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[70vw] mt-20 ">
          {products.map((product) => (
            <Link
              to={`/renterdash/products/${product.id}`}
              key={product.id}
              className="relative block rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group"
            >
              {/* Card Wrapper */}
              <div className="relative bg-white p-6 flex flex-col gap-y-4 overflow-hidden rounded-lg border border-gray-200">

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-orange-600 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4">

                  {/* Icon/Image */}
                  <img
                    src={`https://savefiles.org/${product.image}?shareable_link=507`}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300 text-center">{product.title}</h3>

                  {/* Category */}
                  <div className="flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-300">
                    <BiMap className="mr-1" />
                    <span className="text-sm">{product.location}</span>
                  </div>

                  {/* Price */}
                  <span className="block mt-4 text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
                    {product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      }

    </div>
  )
}

export default Home