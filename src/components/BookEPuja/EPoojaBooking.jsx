import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TempleCarousel from "./TempleCarousel";
import BigTempleCarousel from "./BigTempleCarousel";
import PoojaDetailsSection from "./PoojaDetailsSection";
import MainLoader from "../Loaders/MainLoader";

function EPoojaBooking() {
  const { id } = useParams();

  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Static Temple Details Mock Data
  const [templeDetails, setTempleDetails] = useState({
    
   
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
    }
  ]);

  // Static Pooja Details for Packages Section
  const [poojaDetails, setPoojaDetails] = useState({
    poojaName: "Maha Rudrabhishek",
    description: "Special ritual performed with milk, honey, gangajal, and bilva leaves to invoke Lord Shiva's blessings.",
    packages: [
      { _id: "pkg1", packageName: "Individual Sankalp", price: 1100 },
      { _id: "pkg2", packageName: "Family Sankalp", price: 2100 }
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

    // Validate all required fields
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

    // Static success modal trigger without backend
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

  return (
    <>
      {loader ? (
        <MainLoader />
      ) : (
        <div className="min-h-screen bg-yellow-50">
          {/* Header Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-8">
            <div className="flex flex-col bg-white rounded-2xl shadow-lg lg:flex-row justify-evenly p-5 gap-5 h-full">
              {/* Temple Images */}
              <div className="w-full lg:w-1/2 ">
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
                <div className="py-6 pl-6 sm:border-l-2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {templeDetails?.name}
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {templeDetails?.significance}
                  </p>

                  <div className="border-t pt-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mr-3"></span>
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

          {/* Booking Form Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 ">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
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
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
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
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
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
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
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
                              className="p-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
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

          {/* Pooja Details Section */}
          {!loading && (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 ">
              <PoojaDetailsSection
                poojaDetails={poojaDetails}
                poojaDetailsRef={poojaDetailsRef}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
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