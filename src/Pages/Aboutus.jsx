import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <div className="text-center my-10 space-y-2 mt-40">
          {/* Subheading */}
          <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
            <span className="text-orange-600">✱</span>
            <span>Vision Mission</span>
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Explore our wide range of <br /> rental <br /> services
          </h1>
        </div>
        <Footer/>
    </div>
  )
}
