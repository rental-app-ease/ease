// import React, { useState } from "react";
// import SearchFilter from "./History";

// const Cart = () => {
//   const [searchResults, setSearchResults] = useState([]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-2xl font-bold mb-4">Search for Apartments</h1>

//       {/* Search and Filter Component */}
//       <SearchFilter setSearchResults={setSearchResults} />

//       {/* Results Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//         {searchResults.map((advert) => (
//           <div key={advert.id} className="bg-white shadow-md rounded-lg p-4">
//             <h2 className="text-xl font-semibold">{advert.title}</h2>
//             <p className="text-gray-600">{advert.location}</p>
//             <p className="text-gray-800">${advert.price}</p>
//             <p className="text-gray-500">{advert.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
