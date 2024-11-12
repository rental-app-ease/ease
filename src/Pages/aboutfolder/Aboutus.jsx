import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from 'react';
import piccc from "../aboutfolder/house1.jpg"
import pic1 from "../aboutfolder/house3.jpg"
import pic2 from "../aboutfolder/house2.jpg"
import { FaCheckCircle } from 'react-icons/fa';


export const Aboutus = () => {
  const [activeSection, setActiveSection] = useState("vision"); // Initial section

  // Function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "vision":
        return (

          <div className="container mx-auto px-4 py-10 mt-20">
            {/* Subheading */}
            <div className="text-center space-y-2">
              <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
                <span className="text-orange-600">✱</span>
                <span>Our Mission</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mt-8 lg:mt-16">
              {/* Text Section */}
              <div className="lg:w-1/2 space-y-4">
                <p className="text-gray-700 text-lg">
                  Our vision is to become the leading platform for apartment rentals, recognized for our commitment to quality, convenience, and customer satisfaction. We aspire to transform the rental market by leveraging technology to create a seamless experience that empowers renters and property owners alike.

                  We envision a future where finding a home is effortless, transparent, and tailored to individual needs. Through our platform, we aim to build a community rooted in trust and reliability, setting the standard for excellence in the rental industry. Our goal is to make renting not just a transaction, but an experience that brings people closer to their ideal living spaces.
                </p>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Our customers are our top priority
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Quality is at the heart of everything we do
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Every vehicle leaves our care looking its absolute best
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <img
                  src={piccc}
                  alt="Luxury car"
                  className="rounded-lg object-cover w-full lg:w-[90%] shadow-lg"
                />
              </div>
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="container mx-auto px-4 py-10 mt-20">
            {/* Subheading */}
            <div className="text-center space-y-2">
              <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
                <span className="text-orange-600">✱</span>
                <span>Our Vission</span>
              </p>

            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mt-8 lg:mt-16">
              {/* Text Section */}
              <div className="lg:w-1/2 space-y-4">
                <p className="text-gray-700 text-lg">
                  Our mission is to redefine the rental experience by providing a seamless, user-friendly platform that connects individuals with high-quality apartments and rental spaces tailored to their needs. We are committed to making renting easy, transparent, and accessible for everyone, whether you’re looking for a short-term stay or a long-term home.

                  By prioritizing customer satisfaction, we aim to offer a diverse selection of well-maintained properties that meet high standards of safety, comfort, and quality. Through continuous innovation and dedication to service excellence, we strive to empower renters and property owners alike, creating a community built on trust and convenience.

                  At the core of our mission is a commitment to simplifying the rental process and helping you find the perfect space to call home.
                </p>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Our customers are our top priority
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Quality is at the heart of everything we do
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Every vehicle leaves our care looking its absolute best
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <img
                  src={pic2}
                  alt="Luxury car"
                  className="rounded-lg object-cover w-full lg:w-[90%] shadow-lg"
                />
              </div>
            </div>
          </div>
        );
      case "approach":
        return (
          <div className="container mx-auto px-4 py-10 mt-20">
            {/* Subheading */}
            <div className="text-center space-y-2">
              <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
                <span className="text-orange-600">✱</span>
                <span>Our Approach</span>
              </p>

            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mt-8 lg:mt-16">
              {/* Text Section */}
              <div className="lg:w-1/2 space-y-4">
                <p className="text-gray-700 text-lg">
                  Our approach centers on innovation, user-centric design, and a commitment to quality service. We believe that renting a home should be as smooth and transparent as possible, so we continuously improve our platform with the latest technology and customer feedback. Here’s how we approach making this vision a reality:

                  Customer-First Mindset
                  We listen closely to our users, tailoring our platform to address their unique needs, preferences, and challenges. Our goal is to ensure that both renters and property owners have a seamless experience from start to finish.

                  Technology-Driven Solutions
                  We leverage advanced tools to streamline the rental process—whether it’s through intuitive search options, secure online transactions, or real-time property updates. By prioritizing innovation, we make renting easier, safer, and more efficient.

                  Transparency and Trust
                  Building trust is essential. We ensure that every listing is accurate, verified, and detailed so that users can make informed decisions with confidence. Transparency is at the heart of our interactions, from property information to communication with landlords.

                  Sustainable and Inclusive Growth
                  We strive to create a rental community that is inclusive and accessible for everyone, while also promoting sustainable practices. From energy-efficient property recommendations to partnerships with eco-conscious landlords, we are dedicated to contributing positively to our communities.

                  Through these principles, we aim to elevate the apartment rental experience, making it reliable, enjoyable, and tailored to modern living.
                </p>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Our customers are our top priority
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Quality is at the heart of everything we do
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-2" /> Every vehicle leaves our care looking its absolute best
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <img
                  src={pic1}
                  alt="Luxury car"
                  className="rounded-lg object-cover w-full lg:w-[90%] shadow-lg"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />

      <div className="text-center my-10 space-y-2 mt-32">
        {/* Subheading */}
        <p className="text-orange-600 text-sm font-medium flex justify-center items-center space-x-1">
          <span className="text-orange-600">✱</span>
          <span>About us</span>
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Pioneering excellence in <br /> Apartment rental services
        </h1>

        {/* Button Group */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveSection("vision")}
            className={`px-4 py-2 rounded-md ${activeSection === "vision" ? "bg-orange-600 text-white" : "text-gray-700"} transition duration-300`}
          >
            Our Vision
          </button>
          <button
            onClick={() => setActiveSection("mission")}
            className={`px-4 py-2 rounded-md ${activeSection === "mission" ? "bg-orange-600 text-white" : "text-gray-700"} transition duration-300`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveSection("approach")}
            className={`px-4 py-2 rounded-md ${activeSection === "approach" ? "bg-orange-600 text-white" : "text-gray-700"} transition duration-300`}
          >
            Our Approach
          </button>
        </div>

        {/* Rendered Content */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};
