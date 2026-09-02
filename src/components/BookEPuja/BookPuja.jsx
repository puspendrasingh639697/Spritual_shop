


// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import TempleCarousel from "./TempleCarousel";
// import BigTempleCarousel from "./BigTempleCarousel";
// import PoojaDetailsSection from "./PoojaDetailsSection";
// // import MainLoader from "../Loaders/MainLoader";

// function EPoojaBooking() {
//   const { id } = useParams();

//   const [loader, setLoader] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Static Temple Details Mock Data
//   const [templeDetails, setTempleDetails] = useState({
//     name: "Shri Kashi Vishwanath Temple",
//     significance: "One of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh.",
//     description: "Kashi Vishwanath Temple stands proudly on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas, the holiest of Shiva temples.",
//     img: [
//       { imageurl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1200&auto=format&fit=crop" },
//       { imageurl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop" },
//       { imageurl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" }
//     ]
//   });

//   // Static Pooja Options Mock Data
//   const [poojaOptions] = useState([
//     { _id: "p1", poojaName: "Maha Rudrabhishek" },
//     { _id: "p2", poojaName: "Mahamrityunjaya Jap" },
//     { _id: "p3", poojaName: "Kaal Sarp Dosh Nivaran" },
//     { _id: "p4", poojaName: "Navgrah Shanti Puja" }
//   ]);

//   // Static Top Poojas List (Updated with 4 items for full grid layout)
//   const [topPoojas] = useState([
//     {
//       pooja: {
//         poojaName: "Maha Rudrabhishek",
//         sloks: "Om Tatpurushaya Vidmahe Mahadevaya Dhimahi...",
//         images: [{ imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" }]
//       }
//     },
//     {
//       pooja: {
//         poojaName: "Mahamrityunjaya Jap",
//         sloks: "Tryambakam Yajamahe Sugandhim Pushtivardhanam...",
//         images: [{ imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop" }]
//       }
//     },
//     {
//       pooja: {
//         poojaName: "Kaal Sarp Dosh Nivaran",
//         sloks: "Anant Vasukiji Takshakashcha Karkotakah...",
//         images: [{ imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" }]
//       }
//     },
//     {
//       pooja: {
//         poojaName: "Navgrah Shanti Puja",
//         sloks: "Brahma Murari Surarchita Sturyat...",
//         images: [{ imageUrl: "https://images.unsplash.com/photo-1621570279613-376259020697?q=80&w=600&auto=format&fit=crop" }]
//       }
//     }
//   ]);
// // Updated Pooja Details with correct nested package structure
//   const [poojaDetails, setPoojaDetails] = useState({
//     poojaName: "Maha Rudrabhishek",
//     description: "Special ritual performed with milk, honey, gangajal, and bilva leaves to invoke Lord Shiva's blessings.",
//     significance: "Brings peace, prosperity, and removes negative energies.",
//     ingredients: ["Milk", "Honey", "Gangajal", "Bilva Leaves", "Ghee"],
//     procedure: "Sankalp followed by Abhishek and Mantra chanting.",
//     images: [
//       { imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" },
//       { imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop" },
//       { imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" },
//       { imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" }
//     ],
//     packages: [
//       {
//         _id: "pkg1",
//         poojaPackages: {
//           typeOfPackage: "onlinepooja",
//           title: "Single",
//           price: 1100,
//           NoPepoles: 1,
//           subtitle: "For 1 Person Sankalp",
//           CustomDescription: "Puja performed with your name and gotra."
//         }
//       },
//       {
//         _id: "pkg2",
//         poojaPackages: {
//           typeOfPackage: "onlinepooja",
//           title: "Couple",
//           price: 2100,
//           NoPepoles: 2,
//           subtitle: "For Couple Sankalp",
//           CustomDescription: "Puja performed for husband and wife."
//         }
//       },
//       {
//         _id: "pkg3",
//         poojaPackages: {
//           typeOfPackage: "onlinepooja",
//           title: "Family",
//           price: 3100,
//           NoPepoles: 6,
//           subtitle: "For Whole Family",
//           CustomDescription: "Puja performed including all family members names."
//         }
//       }
//     ]
//   });

//   const poojaDetailsRef = useRef(null);

//   const [formData, setFormData] = useState({
//     temple_id: id || "1",
//     pooja_id: "p1",
//     dateOfPoja: "",
//     packageId: "",
//     gotra: "",
//     name: [],
//   });

//   // Search and filtration of pooja
//   const [searchTerm, setSearchTerm] = useState("Maha Rudrabhishek");
//   const [showOptions, setShowOptions] = useState(false);
//   const filteredPoojas = poojaOptions.filter((pooja) =>
//     pooja.poojaName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const dropdownRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowOptions(false);
//     }
//   };

//   const handleSubmit = (newPackageId, memberNames) => {
//     const updatedFormData = {
//       ...formData,
//       packageId: newPackageId,
//       name: memberNames,
//     };

//     setFormData(updatedFormData);

//     // Validate all required fields
//     if (
//       !updatedFormData.gotra ||
//       !updatedFormData.dateOfPoja ||
//       !updatedFormData.packageId ||
//       updatedFormData.name.length === 0
//     ) {
//       toast.error("Please fill all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return;
//     }

//     // Static success modal trigger without backend
//     setShowModal(true);
//     toast.success("Pooja booked successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       {loader ? (
//         <MainLoader />
//       ) : (
//         <div className="min-h-screen bg-yellow-50">
//           {/* Header Section */}
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-8">
//             <div className="flex flex-col bg-white rounded-2xl shadow-lg lg:flex-row justify-evenly p-5 gap-5 h-full">
//               {/* Temple Images */}
//               <div className="w-full lg:w-1/2 ">
//                 <div className="overflow-hidden">
//                   {templeDetails?.img?.[0]?.imageurl && (
//                     <BigTempleCarousel data={templeDetails?.img} />
//                   )}
//                   {templeDetails?.img?.[0]?.imageurl && (
//                     <div className="p-4">
//                       <TempleCarousel data={templeDetails?.img} />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Temple Details */}
//               <div className="w-full lg:w-1/2 space-y-6">
//                 <div className="py-6 pl-6 sm:border-l-2">
//                   <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
//                     {templeDetails?.name}
//                   </h1>
//                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//                     {templeDetails?.significance}
//                   </p>

//                   <div className="border-t pt-6">
//                     <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
//                       <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mr-3"></span>
//                       About Temple
//                     </h2>
//                     <p className="text-gray-600 leading-relaxed">
//                       {templeDetails?.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Booking Form Section */}
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 ">
//             <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
//               <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
//                 Book Your Pooja
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Date Input */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Date
//                   </label>
//                   <input
//                     required
//                     type="date"
//                     value={formData.dateOfPoja || ""}
//                     onChange={(e) => {
//                       setFormData({ ...formData, dateOfPoja: e.target.value });
//                     }}
//                     className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>

//                 {/* Gotra Input */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Gotra for Sankalp
//                   </label>
//                   <input
//                     required
//                     type="text"
//                     placeholder="Enter your Gotra"
//                     value={formData.gotra}
//                     onChange={(e) => {
//                       setFormData((prev) => ({ ...prev, gotra: e.target.value }));
//                     }}
//                     className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
//                   />
//                 </div>

//                 {/* Pooja Search */}
//                 <div className="space-y-2 relative" ref={dropdownRef}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Select Pooja
//                   </label>
//                   <div className="relative">
//                     <input
//                       required
//                       type="text"
//                       placeholder="Search for a Pooja..."
//                       value={searchTerm}
//                       onChange={(e) => {
//                         setSearchTerm(e.target.value);
//                         setShowOptions(true);
//                       }}
//                       className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
//                     />
                    
//                     {showOptions && (
//                       <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
//                         {filteredPoojas.length > 0 ? (
//                           filteredPoojas.map((pooja) => (
//                             <div
//                               key={pooja._id}
//                               onClick={() => {
//                                 setFormData((prev) => ({
//                                   ...prev,
//                                   pooja_id: pooja._id,
//                                 }));
//                                 setSearchTerm(pooja.poojaName);
//                                 setShowOptions(false);
//                               }}
//                               className="p-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
//                             >
//                               <span className="text-gray-800 font-medium">
//                                 {pooja.poojaName}
//                               </span>
//                             </div>
//                           ))
//                         ) : (
//                           <div className="p-3 text-gray-500 text-center">
//                             No matching pooja found
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pooja Details Section */}
//           {!loading && (
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 ">
//               <PoojaDetailsSection
//                 poojaDetails={poojaDetails}
//                 poojaDetailsRef={poojaDetailsRef}
//                 formData={formData}
//                 setFormData={setFormData}
//                 handleSubmit={handleSubmit}
//               />
//             </div>
//           )}

//           {/* Top Poojas Section */}
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Poojas</span> For This Temple
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {topPoojas?.map((pooja, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="h-48 sm:h-56 overflow-hidden">
//                     <img
//                       src={pooja?.pooja?.images[0]?.imageUrl}
//                       className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
//                       alt={pooja?.pooja?.poojaName}
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
//                       {pooja?.pooja?.poojaName}
//                     </h3>
//                     <p className="text-sm text-gray-600 italic leading-relaxed line-clamp-3">
//                       "{pooja?.pooja?.sloks}"
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Enhanced Modal */}
//           {showModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//               <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 text-center">
//                 <div className="mb-6">
//                   <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-3xl">🎉</span>
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
//                     Booking Confirmed!
//                   </h2>
//                 </div>
                
//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center justify-center space-x-3">
//                     <span className="text-2xl">✅</span>
//                     <p className="text-lg text-gray-700">Your booking has been received</p>
//                   </div>
//                   <div className="flex items-center justify-center space-x-3">
//                     <span className="text-2xl">📞</span>
//                     <p className="text-lg text-gray-700">We will contact you soon</p>
//                   </div>
//                   <div className="flex items-center justify-center space-x-3">
//                     <span className="text-2xl">🕉️</span>
//                     <p className="text-lg text-gray-700">Pandit will be allotted</p>
//                   </div>
//                 </div>
                
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
//                 >
//                   Close
//                 </button>
                
//                 <p className="mt-6 text-gray-600 font-medium text-lg">
//                   🙏 Thanks for choosing us
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </>
//   );
// }

// export default EPoojaBooking;


import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TempleCarousel from "./TempleCarousel";
import BigTempleCarousel from "./BigTempleCarousel";
import PoojaDetailsSection from "./PoojaDetailsSection";

function EPoojaBooking() {
  const { id } = useParams();

  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Static Temple Details Mock Data
  const [templeDetails, setTempleDetails] = useState({
    name: "Shri Kashi Vishwanath Temple",
    significance: "One of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh.",
    description: "Kashi Vishwanath Temple stands proudly on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas, the holiest of Shiva temples.",
    img: [
      { imageurl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1200&auto=format&fit=crop" },
      { imageurl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop" },
      { imageurl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" }
    ]
  });

  // Static Pooja Options Mock Data
  const [poojaOptions] = useState([
    { _id: "p1", poojaName: "Maha Rudrabhishek" },
    { _id: "p2", poojaName: "Mahamrityunjaya Jap" },
    { _id: "p3", poojaName: "Kaal Sarp Dosh Nivaran" },
    { _id: "p4", poojaName: "Navgrah Shanti Puja" }
  ]);

  // Static Top Poojas List
  const [topPoojas] = useState([
    {
      pooja: {
        poojaName: "Maha Rudrabhishek",
        sloks: "Om Tatpurushaya Vidmahe Mahadevaya Dhimahi...",
        images: [{ imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" }]
      }
    },
    {
      pooja: {
        poojaName: "Mahamrityunjaya Jap",
        sloks: "Tryambakam Yajamahe Sugandhim Pushtivardhanam...",
        images: [{ imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop" }]
      }
    },
    {
      pooja: {
        poojaName: "Kaal Sarp Dosh Nivaran",
        sloks: "Anant Vasukiji Takshakashcha Karkotakah...",
        images: [{ imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" }]
      }
    },
    {
      pooja: {
        poojaName: "Navgrah Shanti Puja",
        sloks: "Brahma Murari Surarchita Sturyat...",
        images: [{ imageUrl: "https://images.unsplash.com/photo-1621570279613-376259020697?q=80&w=600&auto=format&fit=crop" }]
      }
    }
  ]);

  // Pooja Details
  const [poojaDetails, setPoojaDetails] = useState({
    poojaName: "Maha Rudrabhishek",
    description: "Special ritual performed with milk, honey, gangajal, and bilva leaves to invoke Lord Shiva's blessings.",
    significance: "Brings peace, prosperity, and removes negative energies.",
    ingredients: ["Milk", "Honey", "Gangajal", "Bilva Leaves", "Ghee"],
    procedure: "Sankalp followed by Abhishek and Mantra chanting.",
    images: [
      { imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=600&auto=format&fit=crop" }
    ],
    packages: [
      {
        _id: "pkg1",
        poojaPackages: {
          typeOfPackage: "onlinepooja",
          title: "Single",
          price: 1100,
          NoPepoles: 1,
          subtitle: "For 1 Person Sankalp",
          CustomDescription: "Puja performed with your name and gotra."
        }
      },
      {
        _id: "pkg2",
        poojaPackages: {
          typeOfPackage: "onlinepooja",
          title: "Couple",
          price: 2100,
          NoPepoles: 2,
          subtitle: "For Couple Sankalp",
          CustomDescription: "Puja performed for husband and wife."
        }
      },
      {
        _id: "pkg3",
        poojaPackages: {
          typeOfPackage: "onlinepooja",
          title: "Family",
          price: 3100,
          NoPepoles: 6,
          subtitle: "For Whole Family",
          CustomDescription: "Puja performed including all family members names."
        }
      }
    ]
  });

  const poojaDetailsRef = useRef(null);

  const [formData, setFormData] = useState({
    temple_id: id || "1",
    pooja_id: "p1",
    dateOfPoja: "",
    packageId: "",
    gotra: "",
    name: [],
  });

  // Search and filtration of pooja
  const [searchTerm, setSearchTerm] = useState("Maha Rudrabhishek");
  const [showOptions, setShowOptions] = useState(false);
  const filteredPoojas = poojaOptions.filter((pooja) =>
    pooja.poojaName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleSubmit = (newPackageId, memberNames) => {
    const updatedFormData = {
      ...formData,
      packageId: newPackageId,
      name: memberNames,
    };

    setFormData(updatedFormData);

    if (
      !updatedFormData.gotra ||
      !updatedFormData.dateOfPoja ||
      !updatedFormData.packageId ||
      updatedFormData.name.length === 0
    ) {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setShowModal(true);
    toast.success("Pooja booked successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Red Color Constants
  const primaryColor = "#8B3A2B";
  const primaryLight = "#FDF2F0";
  const primaryHover = "#6B2314";

  return (
    <>
      {loader ? (
        <div>Loading...</div>
      ) : (
        // ============================================
        // MAIN CONTAINER - bg-[#fff3df]
        // ============================================
        <div className="min-h-screen bg-[#fff3df]">
          
          {/* ========================================== */}
          {/* HEADER SECTION - Temple Details */}
          {/* ========================================== */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-8">
            <div className="flex flex-col  bg-[#fff3df]  lg:flex-row justify-evenly p-5 gap-5 h-full">
              
              {/* Temple Images */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden">
                  {templeDetails?.img?.[0]?.imageurl && (
                    <BigTempleCarousel data={templeDetails?.img} />
                  )}
                  {templeDetails?.img?.[0]?.imageurl && (
                    <div className="p-4">
                      <TempleCarousel data={templeDetails?.img} />
                    </div>
                  )}
                </div>
              </div>

              {/* Temple Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="py-6 pl-6 sm:border-l-2" style={{ borderColor: primaryColor }}>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {templeDetails?.name}
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {templeDetails?.significance}
                  </p>

                  <div className="border-t pt-6" style={{ borderColor: "#e5e7eb" }}>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span 
                        className="w-1 h-6 rounded-full mr-3"
                        style={{ background: primaryColor }}
                      ></span>
                      About Temple
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {templeDetails?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* BOOKING FORM SECTION */}
          {/* ========================================== */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 
                className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center"
                style={{ color: primaryColor }}
              >
                Book Your Pooja
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Date Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.dateOfPoja || ""}
                    onChange={(e) => {
                      setFormData({ ...formData, dateOfPoja: e.target.value });
                    }}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ focusRingColor: primaryColor }}
                    onFocus={(e) => {
                      e.target.style.borderColor = primaryColor;
                      e.target.style.boxShadow = `0 0 0 2px ${primaryColor}33`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Gotra Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Gotra for Sankalp
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your Gotra"
                    value={formData.gotra}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, gotra: e.target.value }));
                    }}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ focusRingColor: primaryColor }}
                    onFocus={(e) => {
                      e.target.style.borderColor = primaryColor;
                      e.target.style.boxShadow = `0 0 0 2px ${primaryColor}33`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e5e7eb";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Pooja Search */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Pooja
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Search for a Pooja..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowOptions(true);
                      }}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-all duration-200"
                      style={{ focusRingColor: primaryColor }}
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryColor;
                        e.target.style.boxShadow = `0 0 0 2px ${primaryColor}33`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    
                    {showOptions && (
                      <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                        {filteredPoojas.length > 0 ? (
                          filteredPoojas.map((pooja) => (
                            <div
                              key={pooja._id}
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  pooja_id: pooja._id,
                                }));
                                setSearchTerm(pooja.poojaName);
                                setShowOptions(false);
                              }}
                              className="p-3 hover:bg-[#FDF2F0] cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
                            >
                              <span className="text-gray-800 font-medium">
                                {pooja.poojaName}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="p-3 text-gray-500 text-center">
                            No matching pooja found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* POOJA DETAILS SECTION */}
          {/* ========================================== */}
          {!loading && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
              <PoojaDetailsSection
                poojaDetails={poojaDetails}
                poojaDetailsRef={poojaDetailsRef}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
            </div>
          )}

          {/* ========================================== */}
          {/* TOP POOJAS SECTION - RED COLOR */}
          {/* ========================================== */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Top <span style={{ color: primaryColor }}>Poojas</span> For This Temple
              </h2>
              <div 
                className="w-24 h-1 mx-auto rounded-full"
                style={{ background: primaryColor }}
              ></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topPoojas?.map((pooja, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 sm:h-56 overflow-hidden">
                    <img
                      src={pooja?.pooja?.images[0]?.imageUrl}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                      alt={pooja?.pooja?.poojaName}
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-lg font-bold mb-3 line-clamp-2"
                      style={{ color: primaryColor }}
                    >
                      {pooja?.pooja?.poojaName}
                    </h3>
                    <p className="text-sm text-gray-600 italic leading-relaxed line-clamp-3">
                      "{pooja?.pooja?.sloks}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* SUCCESS MODAL - RED COLOR */}
          {/* ========================================== */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 text-center">
                <div className="mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: primaryColor }}
                  >
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: primaryColor }}
                  >
                    Booking Confirmed!
                  </h2>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <p className="text-lg text-gray-700">Your booking has been received</p>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <p className="text-lg text-gray-700">We will contact you soon</p>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🕉️</span>
                    <p className="text-lg text-gray-700">Pandit will be allotted</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
                  style={{ background: primaryColor }}
                  onMouseEnter={(e) => {
                    e.target.style.background = primaryHover;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = primaryColor;
                  }}
                >
                  Close
                </button>
                
                <p className="mt-6 text-gray-600 font-medium text-lg">
                  🙏 Thanks for choosing us
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default EPoojaBooking;