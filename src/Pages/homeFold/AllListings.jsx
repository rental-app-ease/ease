import React, { useEffect, useState } from 'react';
import { apiGetProducts } from '../../services/products';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const AllItems = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await apiGetProducts()

    setProducts(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <div>
      <Navbar />
      
      <div  className=" w-[95vw] mx-auto flex flex-col justify-center items-center relative rounded-[50px] overflow-hidden bg-cover bg-center text-center bg-[#fff8f6] mt-24">

        <div className="flex justify-center mt-5 mb-8 w-full">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for apartments..."
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600 transition-all duration-300">
              Search
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-20 ">
          {products.map((product) => (

            <Link to={`/userdetails/${product.id}`}
            key={product.id}
            className="relative block rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group">
             <div
              key={product.id}
              className="relative block rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group"
            >
              {/* Card Wrapper */}
              <div className="relative bg-white p-6 flex flex-col gap-y-4 overflow-hidden rounded-lg border border-gray-200 shadow-lg">

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
                  <h3 className="text-lg font-bold text-gray-800 text-center">{product.title}</h3>

                  <div className="flex items-center justify-center text-gray-600 mt-1">
                    <span className="text-sm">{product.location}</span>
                  </div>

                  {/* Price */}
                  <span className="block mt-4 text-lg font-semibold text-black">
                    ${product.price}
                  </span>
                </div>

              </div>
            </div>
            </Link>
           
          ))}
        </div>

      </div>

      <Footer />
    </div>

  );
};

export default AllItems;