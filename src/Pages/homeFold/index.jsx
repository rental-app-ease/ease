import React, { useState, useEffect } from 'react'
import { apiGetProducts } from '../../services/products';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import pic from '../homeFold/headhouse.jpg'
import Footer from '../../components/Footer';

const Home = () => {
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
      <div
        className="mt-[7vw] w-[95vw] h-[100vh] mx-auto flex flex-col justify-center items-center relative rounded-[50px] border border-gray-300 overflow-hidden bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${pic})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-white px-6 md:px-12 space-y-6">
          <h3 className="text-orange-600 text-sm md:text-base font-semibold">
            Welcome To Home Ride
          </h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Looking to rent a house that <br /> feels more like home?
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl text-gray-300">
            Whether you’re planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offer a wide range of vehicles to suit your needs.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-orange-700 text-white rounded-full font-semibold hover:bg-orange-600 transition duration-300">
              Book A Rental
              <span className="ml-2 text-xl">→</span>
            </button>
            <button className="flex items-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Learn More
              <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className=" w-[95vw] mx-auto flex flex-col justify-center items-center relative rounded-[50px] overflow-hidden bg-cover bg-center text-center bg-[#fff8f6] mt-10">

        <div className="text-center my-10 space-y-2 mt-40">
          {/* Subheading */}
          <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
            <span className="text-orange-600">✱</span>
            <span>Our Services</span>
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Explore our wide range of <br /> rental <br /> services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <Link
              to={`/userdetails/${product.id}`}
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
                    src={`https://savefiles.org/${product.icon}?shareable_link=437`}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 text-center">{product.title}</h3>

                  {/* Category */}
                  <p className="text-sm text-gray-600 text-center">{product.category}</p>

                  {/* Description */}
                  {/* <p className="text-sm text-gray-600 text-center">
            {product.description}
          </p> */}

                  {/* Price */}
                  <span className="block mt-4 text-lg font-semibold text-blue-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <form className="mt-4">
        <input type="text" placeholder='search' className="border p-2 rounded-md" />
      </form> */}
    <Footer/>
    </div>
    

  )
}

export default Home