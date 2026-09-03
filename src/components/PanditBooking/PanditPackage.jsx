// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaCheckCircle, FaRupeeSign, FaInfoCircle, FaLeaf, FaBookOpen } from "react-icons/fa";

// const PanditPackage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [poojaDetails, setPoojaDetails] = useState({
//     poojaName: "Maha Rudrabhishek Puja",
//     description: "Rudrabhishek is a sacred ritual of abhishekam of Lord Shiva in his Rudra form, performed to invoke divine blessings, eliminate negative energies, and bring peace and prosperity to the household.",
//     significance: "Performing Rudrabhishek washes away past sins, brings spiritual awakening, improves health, and fulfills deep inner desires by pleasing Lord Shiva with holy offerings.",
//   });

//   const [packages, setPackages] = useState([
//     {
//       _id: "p1",
//       title: "Pandit Ji Only (Without Samagri)",
//       subtitle: "Experienced Vedic Pandit will guide all rituals at your home.",
//       price: 2100,
//       CustomDescription: "In this package, only expert Vedic Pandit Ji will arrive at your location to perform the complete puja vidhi. All required samagri and items will need to be arranged by you.",
//     },
//     {
//       _id: "p2",
//       title: "Complete Package (With Samagri)",
//       subtitle: "Includes Pandit Ji + All Puja Samagri & Essentials.",
//       price: 5100,
//       CustomDescription: "A hassle-free comprehensive package where our Pandit Ji brings all necessary sacred samagri, flowers, havan samagri, and ritual essentials required for the puja.",
//     },
//   ]);

//   // Agar backend se data fetch karna ho to ye function chalega, abhi fallback/mock data set hai
//   useEffect(() => {
//     // Agar real API integration karni ho to yahan fetch likh sakte hain
//     setLoading(false);
//   }, [id]);

//   const handlePackageClick = (pack) => {
//     console.log("Selected Package:", pack);
//     localStorage.setItem("selectedPackage", JSON.stringify(pack));
//     navigate("/panditform");
//   };

//   return (
//     <section className="scroll-smooth bg-gray-50 min-h-screen pb-16">
//       {/* Header Banner */}
//       <div className="bg-red-800 text-white py-12 px-6 text-center shadow-md">
//         <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
//           Select Your <span className="text-black">Arrangement</span>
//         </h1>
        
//       </div>

//       {/* Packages Cards Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {packages.map((pkg, index) => (
//             <div
//               key={pkg._id || index}
//               className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div>
//                 <div className="flex justify-between items-start gap-4">
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
//                     {pkg.title}
//                   </h3>
//                   <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     Package {index + 1}
//                   </span>
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-500 mt-1">
//                   {pkg.subtitle}
//                 </p>

//                 <div className="flex items-center text-amber-600 text-3xl sm:text-4xl font-black my-4">
//                   <FaRupeeSign className="text-2xl sm:text-3xl" />
//                   <span>{pkg.price}</span>
//                 </div>

//                 <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
//                   {pkg.CustomDescription}
//                 </p>

//                 <ul className="text-gray-600 text-sm space-y-2 mt-4 border-t border-gray-100 pt-4">
//                   <li className="flex items-center gap-2">
//                     <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
//                     <span>Expert Vedic Guidance & Mantras</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
//                     <span>{index === 0 ? "Convenient flexible timings" : "All standard puja samagri included"}</span>
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
//                     <span>Pure traditional rituals performance</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <a
//                   href="#materials"
//                   className="text-sky-600 hover:text-sky-700 text-xs sm:text-sm font-semibold flex items-center gap-1"
//                 >
//                   <FaInfoCircle /> View Samagri Details
//                 </a>
//                 <button
//                   onClick={() => handlePackageClick(pkg)}
//                   className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pooja Details & Significance Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 space-y-16">
        
//         {/* Pooja Overview */}
//         <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col lg:flex-row items-center gap-8">
//           <div className="lg:w-1/3 w-full">
//             <img
//               src="https://images.unsplash.com/photo-1609137144813-7524672e1407?auto=format&fit=crop&q=80&w=600"
//               alt="Pooja Details"
//               className="h-[300px] w-full object-cover rounded-2xl shadow-md"
//             />
//           </div>
//           <div className="lg:w-2/3 w-full space-y-4">
//             <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800">
//               {poojaDetails?.poojaName}
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
//               {poojaDetails?.description}
//             </p>
//           </div>
//         </div>

//         {/* Significance */}
//         <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
//             <FaBookOpen className="text-amber-500" /> Significance of this Pooja
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base text-justify mt-4 leading-relaxed">
//             {poojaDetails?.significance}
//           </p>
//         </div>

//         {/* Ingredients / Materials */}
//         <div id="materials" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col lg:flex-row items-center gap-8">
//           <div className="lg:w-2/3 w-full space-y-4">
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
//               <FaLeaf className="text-emerald-500" /> Ingredients Required for this Pooja
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
//               Each item used in this Pooja is symbolic and carries deep spiritual meaning. While you can arrange the materials based on the list shared, feel free to consult with our Pandit Ji for any substitutions or region-specific changes. Ensuring you have all essentials helps make the ritual smooth and auspicious.
//             </p>

//             <div className="flex flex-wrap gap-2.5 pt-2">
//               {["Modak", "Kumkum", "Coconut", "Agarbatti", "Gangajal", "Fresh Flowers", "Belpatra", "Fruits"].map(
//                 (item, index) => (
//                   <span
//                     key={index}
//                     className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full shadow-xs"
//                   >
//                     {item}
//                   </span>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="lg:w-1/3 w-full">
//             <img
//               src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600"
//               alt="Ingredients"
//               className="h-[280px] w-full object-cover rounded-2xl shadow-md"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PanditPackage;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaRupeeSign, FaInfoCircle, FaLeaf, FaBookOpen } from "react-icons/fa";

const PanditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [poojaDetails] = useState({
    poojaName: "Maha Rudrabhishek Puja",
    description: "Rudrabhishek is a sacred ritual of abhishekam of Lord Shiva in his Rudra form, performed to invoke divine blessings, eliminate negative energies, and bring peace and prosperity toetop household.",
    significance: "Performing Rudrabhishek washes away past sins, brings spiritual awakening, improves health, and fulfills deep inner desires by pleasing Lord Shiva with holy offerings.",
  });

  const [packages] = useState([
    {
      _id: "p1",
      title: "Pandit Ji Only (Without Samagri)",
      subtitle: "Experienced Vedic Pandit will guide all rituals at your home.",
      price: 2100,
      CustomDescription: "In this package, only expert Vedic Pandit Ji will arrive at your location to perform the complete puja vidhi. All required samagri and items will need to be arranged by you.",
    },
    {
      _id: "p2",
      title: "Complete Package (With Samagri)",
      subtitle: "Includes Pandit Ji + All Puja Samagri & Essentials.",
      price: 5100,
      CustomDescription: "A hassle-free comprehensive package where our Pandit Ji brings all necessary sacred samagri, flowers, havan samagri, and ritual essentials required for the puja.",
    },
  ]);

  useEffect(() => {
    setLoading(false);
  }, [id]);

  const handlePackageClick = (pack) => {
    console.log("Selected Package:", pack);
    localStorage.setItem("selectedPackage", JSON.stringify(pack));
    navigate("/panditform");
  };

  return (
    <section className="scroll-smooth bg-[#fff3df] min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-red-800 text-white py-16 px-6 text-center shadow-lg">
        
        <h1 className="text-2xl !text-white sm:text-5xl tracking-tight">
  Select Your Arrangement
</h1>
       
      </div>

      {/* Packages Cards Section - Fixed spacing to avoid cutting */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg._id || index}
              className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {pkg.title}
                  </h3>
                  <span className="bg-red-800 text-white text-xs font-bold px-3 py-1  uppercase tracking-wider">
                    Package {index + 1}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-black mt-1">
                  {pkg.subtitle}
                </p>

                <div className="flex items-center text-red-800 text-3xl sm:text-4xl font-black my-4">
                  <FaRupeeSign className="text-2xl sm:text-3xl" />
                  <span>{pkg.price}</span>
                </div>

                <p className="text-black text-sm sm:text-base text-justify leading-relaxed">
                  {pkg.CustomDescription}
                </p>

                <ul className="text-black text-sm space-y-2 mt-4 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-red-800 flex-shrink-0" />
                    <span>Expert Vedic Guidance & Mantras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-red-800  flex-shrink-0" />
                    <span>{index === 0 ? "Convenient flexible timings" : "All standard puja samagri included"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-red-800 flex-shrink-0" />
                    <span>Pure traditional rituals performance</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="#materials"
                  className="text-sky-600 hover:text-sky-700 text-xs sm:text-sm font-semibold flex items-center gap-1"
                >
                  <FaInfoCircle /> View Samagri Details
                </a>
                <button
                  onClick={() => handlePackageClick(pkg)}
                  className="w-full sm:w-auto bg-[#8c0a15] hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pooja Details & Significance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 space-y-12">
        
        {/* Pooja Overview */}
        <div className="bg-white  shadow-lg border border-gray-100 p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3 w-full">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1803129439/display_1500/stock-vector-vector-graphic-illustration-indian-pandit-is-seeing-the-palm-of-a-man-with-a-magnifying-glass-1803129439.jpg"
              alt="Pooja Details"
              className="h-[300px] w-full object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="lg:w-2/3 w-full space-y-4">
            <h2 className="text-2xl sm:text-4xl text-red-800">
              {poojaDetails?.poojaName}
            </h2>
            <p className="text-black text-sm sm:text-base text-justify leading-relaxed">
              {poojaDetails?.description}
            </p>
          </div>
        </div>

        {/* Significance */}
        <div className="bg-white rounded-xl    p-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <FaBookOpen className="text-red-800" /> Significance of this Pooja
          </h2>
          <p className="text-black text-sm sm:text-base text-justify mt-4 leading-relaxed">
            {poojaDetails?.significance}
          </p>
        </div>

        {/* Ingredients / Materials */}
        <div id="materials" className="bg-white   p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/3 w-full space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              <FaLeaf className="text-red-800" /> Ingredients Required for this Pooja
            </h2>
            <p className="text-black text-sm sm:text-base text-justify leading-relaxed">
              Each item used in this Pooja is symbolic and carries deep spiritual meaning. While you can arrange the materials based on the list shared, feel free to consult with our Pandit Ji for any substitutions.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {["Modak", "Kumkum", "Coconut", "Agarbatti", "Gangajal", "Fresh Flowers", "Belpatra", "Fruits"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="bg-[#fff3df] border border-amber-100 text-black px-4 py-1.5 text-xs sm:text-sm  rounded-full shadow-xs"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2164725893/display_1500/stock-vector-indian-pandit-is-talking-to-other-man-vector-graphic-illustration-individually-on-white-2164725893.jpg"
              alt="Ingredients"
              className="h-[280px] w-full object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PanditPackage;