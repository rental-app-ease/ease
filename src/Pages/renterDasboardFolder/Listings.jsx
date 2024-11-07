import React, { useState, useEffect } from 'react'
import { apiGetProducts, apiVendorsProduct } from '../../services/products';
import { Link } from 'react-router-dom';
const Home = () => {
    
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await apiVendorsProduct()

        setProducts(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>

            {
                products.map((product) => {
                    return (
                        <Link
                        to={`/renterdash/products/${product.id}`}
                        key={product.id}
                        className="relative block p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
                      >
                        <div className="flex flex-col items-center space-y-4">
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
                          <p className="text-sm text-gray-600 text-center">
                            {product.description}
                          </p>
                          {/* Price */}
                          <span className="block mt-4 text-lg font-semibold text-blue-600">
                            ${product.price}
                          </span>
                        </div>
                      </Link>
                    )

                })
            }

        </div>
    )
}

export default Home