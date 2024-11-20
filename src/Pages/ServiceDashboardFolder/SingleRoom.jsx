import React from 'react'
import { apiGetProducts } from '../../services/products';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PageContentContext } from '../../assets/layouts/ServicesDashboard'; // Import the context

export const SingleRoom = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setPageTitle, setPageDescription } = useContext(PageContentContext); // Access the context

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiGetProducts();
      
      if (!response.data) {
        throw new Error('No data received from the server');
      }

      // Filter products for single room category
      const singleRoomProducts = response.data.filter(
        product => product.category.housetype.toLowerCase() === "single room"
      );

      if (singleRoomProducts.length === 0) {
        setError('No single room properties found');
      }

      setProducts(singleRoomProducts);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Set the title and description for this page
    setPageTitle("SINGLEROOM SELF-CONTAINED");
    setPageDescription("Single-Room");

    getProducts();
  }, [setPageTitle, setPageDescription]);

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="text-center text-red-600 p-4 rounded-lg">
          <p className="text-xl font-semibold">Error</p>
          <p>{error}</p>
          <button 
            onClick={getProducts}
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95vw] mx-auto flex flex-col justify-center items-center relative rounded-[50px] overflow-hidden bg-cover bg-center text-center bg-[#fff8f6] mt-10">
      <div className="text-center my-10 space-y-2 mt-30">
        <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
          <span className="text-orange-600">✱</span>
          <span>Our Services</span>
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Explore our wide range of <br /> single room self contained
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
                  src={`https://savefiles.org/${product.image}?shareable_link=507`}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold text-gray-800 text-center">{product.title}</h3>
                <p className="text-sm text-gray-600 text-center">{product.category.housetype}</p>
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

