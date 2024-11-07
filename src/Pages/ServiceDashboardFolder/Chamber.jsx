import React from 'react'
import { apiGetProducts } from '../../services/products';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PageContentContext } from '../../assets/layouts/ServicesDashboard'; // Import the context

 const Chamber = () => {
  const [products, setProducts] = useState([]);
  const { setPageTitle, setPageDescription } = useContext(PageContentContext); // Access the context

  const getProducts = async () => {
    const response = await apiGetProducts();
    setProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    // Set the title and description for this page
    setPageTitle("CHAMBER AND HALL");
    setPageDescription("Chamber and Hall");

    getProducts();
  }, [setPageTitle, setPageDescription]);

  return (
    <div className="w-[95vw] mx-auto flex flex-col justify-center items-center relative rounded-[50px] overflow-hidden bg-cover bg-center text-center bg-[#fff8f6] mt-10">
      <div className="text-center my-10 space-y-2 mt-30">
        <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
          <span className="text-orange-600">✱</span>
          <span>Our Services</span>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Explore our wide range of <br /> Chamber and hall self contained
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/userdetails/${product.id}`}
            key={product.id}
            className="relative block rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 group"
          >
            <div className="relative bg-white p-6 flex flex-col gap-y-4 overflow-hidden rounded-lg border border-gray-200">
              <div className="absolute inset-0 bg-orange-600 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <img
                  src={`https://savefiles.org/${product.icon}?shareable_link=437`}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold text-gray-800 text-center">{product.title}</h3>
                <p className="text-sm text-gray-600 text-center">{product.category}</p>
                <span className="block mt-4 text-lg font-semibold text-blue-600">
                  ${product.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chamber