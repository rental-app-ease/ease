// import React, { useState } from "react";
// import axios from "axios";

// const SearchFilter = ({ setSearchResults }) => {
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [category, setCategory] = useState("");
//   const [priceMin, setPriceMin] = useState("");
//   const [priceMax, setPriceMax] = useState("");

//   // Function to handle form submission
//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       // Send search and filter parameters to backend
//       const response = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/adverts`,
//         {
//           params: {
//             title,
//             location,
//             category,
//             priceMin,
//             priceMax,
//           },
//         }
//       );

//       // Update the parent component's search results
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error("Error fetching filtered data", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSearch} className="space-y-4 bg-gray-100 p-4 rounded-md shadow-md">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Search by title"
//             className="w-full px-4 py-2 border rounded-md"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Location</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             placeholder="Search by location"
//             className="w-full px-4 py-2 border rounded-md"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-gray-700">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md"
//           >
//             <option value="">All Categories</option>
//             <option value="single room">Single Room</option>
//             <option value="chamber and hall">Chamber and Hall</option>
//             <option value="two bedroom">Two Bedroom</option>
//             <option value="three bedroom">Three Bedroom</option>
//           </select>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700">Min Price</label>
//             <input
//               type="number"
//               value={priceMin}
//               onChange={(e) => setPriceMin(e.target.value)}
//               placeholder="Min Price"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Max Price</label>
//             <input
//               type="number"
//               value={priceMax}
//               onChange={(e) => setPriceMax(e.target.value)}
//               placeholder="Max Price"
//               className="w-full px-4 py-2 border rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchFilter;
