// // // import React, { useState, useRef, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //     BiSearch,
// // //     BiFilter,
// // //     BiChevronDown,
// // //     BiTimeFive,
// // //     BiCheck,
// // // } from "react-icons/bi";
// // // import { FaStar } from "react-icons/fa";

// // // /* ================= IMAGE IMPORTS ================= */
// // // import coins from "../../assets/TampleImage/coines.webp";
// // // import tample18 from "../../assets/TampleImage/tample18.png";
// // // import pojaKit2 from "../../assets/pojakit_2.jpg";

// // // /* ================= FILTER OPTIONS ================= */
// // // const deityOptions = [
// // //     "All",
// // //     "Baglamukhi",
// // //     "Sheetla",
// // //     "Durga",
// // //     "Kali",
// // //     "Hanuman",
// // //     "Shiv",
// // // ];
// // // const locationOptions = [
// // //     "All",
// // //     "Ujjain",
// // //     "Haldwani",
// // //     "Varanasi",
// // //     "Kolkata",
// // //     "Ayodhya",
// // //     "Nashik",
// // // ];
// // // const templeOptions = [
// // //     "All",
// // //     "Baglamukhi Dham",
// // //     "Sheetla Mandir",
// // //     "Durga Mandir",
// // //     "Kali Mandir",
// // //     "Hanuman Mandir",
// // // ];
// // // const themeOptions = [
// // //     "All",
// // //     "Protection",
// // //     "Wealth",
// // //     "Victory",
// // //     "Health",
// // //     "Peace",
// // //     "Special",
// // // ];

// // // /* ================= CHADHAWA DATA ================= */
// // // const allChadhavasData = [
// // //     {
// // //         id: 1,
// // //         title: "Baglamukhi Lakshmi Chadhava",
// // //         subtitle:
// // //             "For the destruction of enemies and the attainment of wealth",
// // //         temple: "Maa Baglamukhi Dham, Ujjain",
// // //         deity: "Baglamukhi",
// // //         location: "Ujjain",
// // //         theme: "Wealth",
// // //         date: "Thu, 3 Sept 2026",
// // //         timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
// // //         image: coins,
// // //         link: "/chadhawa/1",
// // //         booked: "31,414 people already booked",
// // //         rating: "4.8",
// // //         isSpecial: true,
// // //     },
// // //     {
// // //         id: 2,
// // //         title: "Sheetla Saptami Vishesh: Maa Sheetla Santan Sampoorna Raksha Chadhava",
// // //         subtitle:
// // //             "For the long life of your child, protection from evil eyes.",
// // //         temple: "Siddhapeeth Sheetla Mata Mandir, Haldwani",
// // //         deity: "Sheetla",
// // //         location: "Haldwani",
// // //         theme: "Protection",
// // //         date: "Thu, 3 Sept 2026",
// // //         timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
// // //         image: tample18,
// // //         link: "/chadhawa/2",
// // //         booked: "28,756 people already booked",
// // //         rating: "4.9",
// // //         isSpecial: false,
// // //     },
// // //     {
// // //         id: 3,
// // //         title: "Maa Baglamukhi Special Chadhava",
// // //         subtitle: "Destruction of enemies and protection from evil eye",
// // //         temple: "Maa Baglamukhi Dham, Ujjain",
// // //         deity: "Baglamukhi",
// // //         location: "Ujjain",
// // //         theme: "Protection",
// // //         date: "Thu, 3 Sept 2026",
// // //         timeLeft: "0 Days : 2 Hrs : 55 Min : 35 Sec",
// // //         image: pojaKit2,
// // //         link: "/chadhawa/3",
// // //         booked: "19,234 people already booked",
// // //         rating: "4.7",
// // //         isSpecial: false,
// // //     },
// // //     {
// // //         id: 4,
// // //         title: "Baglamukhi Sankat-Naashak Mirchi Havan",
// // //         subtitle: "Complete freedom from crises, fear, and opponents",
// // //         temple: "Maa Baglamukhi Dham, Ujjain",
// // //         deity: "Baglamukhi",
// // //         location: "Ujjain",
// // //         theme: "Victory",
// // //         date: "Thu, 3 Sept 2026",
// // //         timeLeft: "0 Days : 2 Hrs : 37 Min : 1 Sec",
// // //         image: coins,
// // //         link: "/chadhawa/4",
// // //         booked: "31,998 people already booked",
// // //         rating: "4.8",
// // //         isSpecial: true,
// // //     },
// // //     {
// // //         id: 5,
// // //         title: "Shiv Baglamukhi Chadhava",
// // //         subtitle: "For victory over enemies & end of challenges",
// // //         temple: "Maa Baglamukhi Dham, Ujjain",
// // //         deity: "Shiv",
// // //         location: "Ujjain",
// // //         theme: "Victory",
// // //         date: "Thu, 3 Sept 2026",
// // //         timeLeft: "0 Days : 2 Hrs : 37 Min : 1 Sec",
// // //         image: tample18,
// // //         link: "/chadhawa/5",
// // //         booked: "22,543 people already booked",
// // //         rating: "4.6",
// // //         isSpecial: false,
// // //     },
// // //     {
// // //         id: 6,
// // //         title: "Maa Durga Vishesh Chadhava",
// // //         subtitle: "For protection, courage and removal of obstacles",
// // //         temple: "Maa Durga Mandir, Varanasi",
// // //         deity: "Durga",
// // //         location: "Varanasi",
// // //         theme: "Protection",
// // //         date: "Fri, 4 Sept 2026",
// // //         timeLeft: "1 Days : 5 Hrs : 20 Min : 15 Sec",
// // //         image: pojaKit2,
// // //         link: "/chadhawa/6",
// // //         booked: "15,678 people already booked",
// // //         rating: "4.7",
// // //         isSpecial: false,
// // //     },
   
// // // ];

// // // /* ================= DROPDOWN COMPONENT — FIXED ================= */
// // // function FilterDropdown({ label, options, value, onChange }) {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [openUpward, setOpenUpward] = useState(false);
// // //     const dropdownRef = useRef(null);
// // //     const buttonRef = useRef(null);

// // //     // ✅ Close on outside click
// // //     useEffect(() => {
// // //         const handleClickOutside = (e) => {
// // //             if (
// // //                 dropdownRef.current &&
// // //                 !dropdownRef.current.contains(e.target)
// // //             ) {
// // //                 setIsOpen(false);
// // //             }
// // //         };
// // //         document.addEventListener("mousedown", handleClickOutside);
// // //         return () =>
// // //             document.removeEventListener("mousedown", handleClickOutside);
// // //     }, []);

// // //     // ✅ Auto-detect if dropdown should open upward
// // //     const handleToggle = () => {
// // //         if (!isOpen && buttonRef.current) {
// // //             const rect = buttonRef.current.getBoundingClientRect();
// // //             const spaceBelow = window.innerHeight - rect.bottom;
// // //             const spaceNeeded = options.length * 44 + 20;
// // //             setOpenUpward(spaceBelow < spaceNeeded);
// // //         }
// // //         setIsOpen(!isOpen);
// // //     };

// // //     const displayValue = value === "All" ? label : value;

// // //     return (
// // //         <div className="relative" ref={dropdownRef}>
// // //             <button
// // //                 ref={buttonRef}
// // //                 onClick={handleToggle}
// // //                 className={`flex items-center gap-1.5 px-4 py-2 rounded-md  shadow-sm transition-all cursor-pointer ${
// // //                     value !== "All"
// // //                         ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
// // //                         : "bg-gradient-to-r from-[#df972b] to-[#c27803] b hover:border-[#df972b] text-white"
// // //                 }`}
// // //             >
// // //                 <span className="truncate max-w-[100px]">{displayValue}</span>
// // //                 <BiChevronDown
// // //                     className={`text-base transition-transform ${
// // //                         isOpen ? "rotate-180" : ""
// // //                     } ${value !== "All" ? "text-white" : "text-[#c27803]"}`}
// // //                 />
// // //             </button>

// // //             {isOpen && (
// // //                 /* ✅ FIXED: right-0 for right-aligned dropdown */
// // //                 <div
// // //                     className={`absolute right-0 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-1 border-black rounded-md shadow-2xl z-[9999] min-w-[180px] max-h-[320px] overflow-y-auto ${
// // //                         openUpward ? "bottom-full mb-2" : "top-full mt-2"
// // //                     }`}
// // //                 >
// // //                     <div className="p-1.5">
// // //                         {options.map((option) => (
// // //                             <div
// // //                                 key={option}
// // //                                 onClick={() => {
// // //                                     onChange(option);
// // //                                     setIsOpen(false);
// // //                                 }}
// // //                                 className={`px-3 py-2.5 text-xs font-semibold rounded-md cursor-pointer transition-all flex items-center justify-between whitespace-nowrap ${
// // //                                     value === option
// // //                                         ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
// // //                                         : "text-[#7a1c1c] hover:bg-amber-50"
// // //                                 }`}
// // //                             >
// // //                                 <span>{option}</span>
// // //                                 {value === option && (
// // //                                     <BiCheck className="text-base ml-2 shrink-0" />
// // //                                 )}
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }
// // // /* ================= MAIN SECTION ================= */
// // // function AllChadhavasSection() {
// // //     const [searchTerm, setSearchTerm] = useState("");
// // //     const [filters, setFilters] = useState({
// // //         deity: "All",
// // //         location: "All",
// // //         temple: "All",
// // //         theme: "All",
// // //     });

// // //     // ✅ Filter Logic
// // //     const filteredChadhavas = allChadhavasData.filter((item) => {
// // //         const matchesSearch =
// // //             item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //             item.temple.toLowerCase().includes(searchTerm.toLowerCase());

// // //         const matchesDeity =
// // //             filters.deity === "All" || item.deity === filters.deity;

// // //         const matchesLocation =
// // //             filters.location === "All" ||
// // //             item.location === filters.location;

// // //         const matchesTemple =
// // //             filters.temple === "All" || item.temple.includes(filters.temple);

// // //         const matchesTheme =
// // //             filters.theme === "All" || item.theme === filters.theme;

// // //         return (
// // //             matchesSearch &&
// // //             matchesDeity &&
// // //             matchesLocation &&
// // //             matchesTemple &&
// // //             matchesTheme
// // //         );
// // //     });

// // //     const handleFilterChange = (key, value) => {
// // //         setFilters((prev) => ({ ...prev, [key]: value }));
// // //     };

// // //     const handleClearFilters = () => {
// // //         setFilters({
// // //             deity: "All",
// // //             location: "All",
// // //             temple: "All",
// // //             theme: "All",
// // //         });
// // //         setSearchTerm("");
// // //     };

// // //     const activeFilterCount = Object.values(filters).filter(
// // //         (v) => v !== "All"
// // //     ).length;

// // //     return (
// // //         <section className="max-w-7xl py-6 px-2 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative overflow-hidden">
// // //             {/* Ambient Glow */}
// // //             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
// // //             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

// // //             <div className="max-w-7xl mx-auto relative z-10">
// // //                 {/* HEADER */}
// // //                 <div className="text-center mb-2">
// // //                     <div className="inline-flex items-center gap-2 mb-2">
// // //                         <span className="text-xs font-bold tracking-[3px] text-[#c27803] uppercase">
// // //                             Divine Offerings
// // //                         </span>
// // //                     </div>
// // //                     <h2 className="text-2xl md:text-4xl  font-bold text-[#7a1c1c] mb-2">
// // //                         All Chadhavas
// // //                     </h2>
// // //                     <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto"></div>
// // //                 </div>

// // //                 {/* SEARCH & FILTERS */}
// // //                 <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between mb-8">
// // //                     {/* Search */}
// // //                     <div className="relative w-full lg:w-96">
// // //                         <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#c27803] text-lg">
// // //                             <BiSearch className="text-white" />
// // //                         </span>
// // //                         <input
// // //                             type="text"
// // //                             placeholder="Search Chadhava, Temple, God Name"
// // //                             value={searchTerm}
// // //                             onChange={(e) => setSearchTerm(e.target.value)}
// // //                             className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] border-1 border-black rounded-md pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#df972b] shadow-sm text-[#7a1c1c] placeholder:text-white transition-colors"
// // //                         />
// // //                     </div>

// // //                     {/* Filter Buttons Row */}
// // //                     <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
// // //                         {activeFilterCount > 0 && (
// // //                             <button
// // //                                 onClick={handleClearFilters}
// // //                                 className="flex items-center gap-1.5 bg-[#7a1c1c] hover:bg-[#5c1414] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
// // //                             >
// // //                                 <BiFilter className="text-sm" />
// // //                                 <span>Clear ({activeFilterCount})</span>
// // //                             </button>
// // //                         )}

// // //                         <FilterDropdown
// // //                             label="Deity"
// // //                             options={deityOptions}
// // //                             value={filters.deity}
// // //                             onChange={(v) => handleFilterChange("deity", v)}
// // //                         />
// // //                         <FilterDropdown
// // //                             label="Location"
// // //                             options={locationOptions}
// // //                             value={filters.location}
// // //                             onChange={(v) => handleFilterChange("location", v)}
// // //                         />
// // //                         <FilterDropdown
// // //                             label="Temple"
// // //                             options={templeOptions}
// // //                             value={filters.temple}
// // //                             onChange={(v) => handleFilterChange("temple", v)}
// // //                         />
// // //                         <FilterDropdown
// // //                             label="Theme"
// // //                             options={themeOptions}
// // //                             value={filters.theme}
// // //                             onChange={(v) => handleFilterChange("theme", v)}
// // //                         />
// // //                     </div>
// // //                 </div>

                

// // //                 {/* GRID */}
// // //                 {filteredChadhavas.length > 0 ? (
// // //                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // //                         {filteredChadhavas.map((item) => (
// // //                             <Link
// // //                                 to={item.link}
// // //                                 key={item.id}
// // //                                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 hover:border-[#df972b] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
// // //                             >
// // //                                 <div>
// // //                                     {/* Image */}
// // //                                     <div className="relative h-48 w-full overflow-hidden">
// // //                                         <img
// // //                                             src={item.image}
// // //                                             alt={item.title}
// // //                                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // //                                         />
// // //                                         <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

// // //                                         {item.isSpecial && (
// // //                                             <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
// // //                                                 Special
// // //                                             </div>
// // //                                         )}

// // //                                         <div className="absolute top-3 right-3 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
// // //                                             <span className="text-xs font-bold text-black">
// // //                                                 {item.rating}
// // //                                             </span>
// // //                                             <FaStar className="text-[#df972b] text-[10px]" />
// // //                                         </div>

// // //                                         <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
// // //                                             <h3 className="text-sm md:text-base font-bold leading-snug line-clamp-2 drop-shadow-md">
// // //                                                 {item.title}
// // //                                             </h3>
// // //                                         </div>
// // //                                     </div>

// // //                                     {/* Date + Countdown */}
// // //                                     <div className="px-3 py-2 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-b border-amber-200/40 flex items-center justify-between text-[10px] font-semibold flex-wrap gap-1">
// // //                                         <span className="text-gray-600">
// // //                                             {item.date}
// // //                                         </span>
// // //                                         <span className="flex items-center gap-1 text-black font-bold">
// // //                                             <BiTimeFive /> {item.timeLeft}
// // //                                         </span>
// // //                                     </div>

// // //                                     {/* Body */}
// // //                                     <div className="p-3 space-y-2">
// // //                                         <p className="text-xs text-black line-clamp-2 leading-relaxed min-h-[32px]">
// // //                                             {item.subtitle}
// // //                                         </p>

// // //                                         <div className="flex items-center gap-1.5 text-[11px] text-black font-medium">
// // //                                             <svg
// // //                                                 viewBox="0 0 24 24"
// // //                                                 className="w-3 h-3 text-[#c27803] shrink-0"
// // //                                                 fill="none"
// // //                                                 stroke="currentColor"
// // //                                                 strokeWidth="1.5"
// // //                                             >
// // //                                                 <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
// // //                                             </svg>
// // //                                             <span className="truncate">
// // //                                                 {item.temple}
// // //                                             </span>
// // //                                         </div>

// // //                                         <div className="pt-2 border-t border-amber-200/40">
// // //                                             <p className="text-[14px] font-bold text-black">
// // //                                                 {item.booked}
// // //                                             </p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="p-3 pt-0">
// // //                                     <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-[#c27803] group-hover:to-[#c27803] text-white text-xs font-bold py-2.5 px-4 rounded-md text-center shadow-md group-hover:shadow-lg transition-all duration-300 active:scale-[0.98]">
// // //                                         Offer Chadhava
// // //                                     </div>
// // //                                 </div>
// // //                             </Link>
// // //                         ))}
// // //                     </div>
// // //                 ) : (
// // //                     <div className="text-center py-16 bg-white rounded-2xl border-2 border-amber-200/50">
// // //                         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center mx-auto mb-4">
// // //                             <BiSearch className="text-white text-3xl" />
// // //                         </div>
// // //                         <h3 className="text-lg font-bold text-[#7a1c1c] mb-2">
// // //                             No Chadhava Found
// // //                         </h3>
// // //                         <p className="text-sm text-gray-500 mb-5">
// // //                             Try changing filters or search term
// // //                         </p>
// // //                         <button
// // //                             onClick={handleClearFilters}
// // //                             className="inline-flex items-center gap-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
// // //                         >
// // //                             Clear All Filters
// // //                         </button>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </section>
// // //     );
// // // }

// // // export default AllChadhavasSection;



// // import React, { useState, useRef, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   BiSearch,
// //   BiFilter,
// //   BiChevronDown,
// //   BiCheck,
// // } from "react-icons/bi";
// // import { FaStar, FaArrowRight } from "react-icons/fa";
// // import useChadhavaStore from "../../store/useChadhavaStore";

// // /* ================= FILTER OPTIONS ================= */
// // const typeOptions = [
// //   "All",
// //   "phool",
// //   "vastra",
// //   "prasad",
// //   "nariyal",
// //   "sindoor",
// //   "chunri",
// //   "mala",
// //   "gangajal",
// //   "belpatra",
// //   "cow_seva",
// //   "deepak",
// //   "bhog",
// //   "kalash",
// //   "havan",
// //   "shringar",
// //   "charanamrit",
// //   "annadaan",
// // ];

// // const deityOptions = [
// //   "All",
// //   "shiva",
// //   "vishnu",
// //   "devi",
// //   "ganesh",
// //   "hanuman",
// //   "krishna",
// //   "ram",
// //   "durga",
// //   "lakshmi",
// //   "saraswati",
// //   "sai_baba",
// //   "other",
// // ];

// // /* ================= DROPDOWN ================= */
// // function FilterDropdown({ label, options, value, onChange }) {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [openUpward, setOpenUpward] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const buttonRef = useRef(null);

// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
// //         setIsOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const handleToggle = () => {
// //     if (!isOpen && buttonRef.current) {
// //       const rect = buttonRef.current.getBoundingClientRect();
// //       const spaceBelow = window.innerHeight - rect.bottom;
// //       const spaceNeeded = options.length * 44 + 20;
// //       setOpenUpward(spaceBelow < spaceNeeded);
// //     }
// //     setIsOpen(!isOpen);
// //   };

// //   const displayValue = value === "All" ? label : value.replace("_", " ");

// //   return (
// //     <div className="relative" ref={dropdownRef}>
// //       <button
// //         ref={buttonRef}
// //         onClick={handleToggle}
// //         className="flex items-center gap-1.5 px-4 py-2 rounded-md shadow-sm transition-all cursor-pointer bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
// //       >
// //         <span className="truncate max-w-[100px] capitalize">
// //           {displayValue}
// //         </span>
// //         <BiChevronDown
// //           className={`text-base transition-transform ${
// //             isOpen ? "rotate-180" : ""
// //           }`}
// //         />
// //       </button>

// //       {isOpen && (
// //         <div
// //           className={`absolute right-0 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-2 border-black rounded-md shadow-2xl z-[9999] min-w-[180px] max-h-[320px] overflow-y-auto ${
// //             openUpward ? "bottom-full mb-2" : "top-full mt-2"
// //           }`}
// //         >
// //           <div className="p-1.5">
// //             {options.map((option) => (
// //               <div
// //                 key={option}
// //                 onClick={() => {
// //                   onChange(option);
// //                   setIsOpen(false);
// //                 }}
// //                 className={`px-3 py-2.5 text-xs font-semibold rounded-md cursor-pointer transition-all flex items-center justify-between whitespace-nowrap capitalize ${
// //                   value === option
// //                     ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
// //                     : "text-[#7a1c1c] hover:bg-amber-50"
// //                 }`}
// //               >
// //                 <span>{option.replace("_", " ")}</span>
// //                 {value === option && <BiCheck className="text-base" />}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // /* ================= MAIN ================= */
// // function AllChadhavasSection() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filters, setFilters] = useState({
// //     chadhavaType: "All",
// //     deity: "All",
// //   });

// //   const {
// //     chadhavas = [],
// //     loading = false,
// //     error = null,
// //     fetchChadhavas,
// //   } = useChadhavaStore();

// //   // ⭐ Fetch — limit 10
// //   useEffect(() => {
// //     if (typeof fetchChadhavas !== "function") return;

// //     const timer = setTimeout(() => {
// //       const apiFilters = { limit: 10, page: 1 };

// //       if (searchTerm.trim()) apiFilters.search = searchTerm.trim();
// //       if (filters.chadhavaType !== "All")
// //         apiFilters.chadhavaType = filters.chadhavaType;
// //       if (filters.deity !== "All") apiFilters.deity = filters.deity;

// //       console.log("🔍 Fetching chadhavas:", apiFilters);
// //       fetchChadhavas(apiFilters);
// //     }, 400);

// //     return () => clearTimeout(timer);
// //   }, [searchTerm, filters, fetchChadhavas]);

// //   const handleFilterChange = (key, value) => {
// //     setFilters((prev) => ({ ...prev, [key]: value }));
// //   };

// //   const handleClearFilters = () => {
// //     setFilters({ chadhavaType: "All", deity: "All" });
// //     setSearchTerm("");
// //   };

// //   const activeFilterCount = Object.values(filters).filter(
// //     (v) => v !== "All"
// //   ).length;

// //   return (
// //     <section className="max-w-7xl py-6 px-2 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative ">
// //       {/* Ambient glow */}
// //       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* HEADER */}
// //         <div className="text-center mb-6">
// //           <div className="inline-flex items-center gap-2 mb-2">
// //             <span className="text-xs font-bold tracking-[3px] text-[#c27803] uppercase">
// //               Divine Offerings
// //             </span>
// //           </div>
// //           <h2 className="text-2xl md:text-4xl font-bold text-[#7a1c1c] mb-2">
// //             All Chadhavas
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto"></div>
// //         </div>

// //         {/* SEARCH + FILTERS */}
// //         <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between mb-8">
// //           {/* Search */}
// //           <div className="relative w-full lg:w-96">
// //             <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white text-lg">
// //               <BiSearch />
// //             </span>
// //             <input
// //               type="text"
// //               placeholder="Search Chadhava, Temple..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] border-2 border-black rounded-md pl-10 pr-4 py-2.5 text-sm outline-none text-white placeholder:text-white"
// //             />
// //           </div>

// //           {/* Filter buttons */}
// //           <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
// //             {activeFilterCount > 0 && (
// //               <button
// //                 onClick={handleClearFilters}
// //                 className="flex items-center gap-1.5 bg-[#7a1c1c] hover:bg-[#5c1414] text-white px-4 py-2 rounded-md text-xs font-bold shadow-md transition-all cursor-pointer"
// //               >
// //                 <BiFilter className="text-sm" />
// //                 <span>Clear ({activeFilterCount})</span>
// //               </button>
// //             )}

// //             <FilterDropdown
// //               label="Type"
// //               options={typeOptions}
// //               value={filters.chadhavaType}
// //               onChange={(v) => handleFilterChange("chadhavaType", v)}
// //             />
// //             <FilterDropdown
// //               label="Deity"
// //               options={deityOptions}
// //               value={filters.deity}
// //               onChange={(v) => handleFilterChange("deity", v)}
// //             />
// //           </div>
// //         </div>

// //         {/* GRID */}
// //         {loading ? (
// //           <div className="text-center py-16">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
// //             <p className="mt-3 text-[#7a1c1c] font-semibold">
// //               Loading chadhavas...
// //             </p>
// //           </div>
// //         ) : error ? (
// //           <div className="text-center py-16 text-red-600 font-semibold">
// //             ⚠️ Error: {error}
// //           </div>
// //         ) : chadhavas.length > 0 ? (
// //           <>
// //             {/* Grid — 10 cards */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
// //               {chadhavas.map((item) => (
// //                 <Link
// //                   to={`/chadhawa/${item._id}`}
// //                   key={item._id}
// //                   className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 hover:border-[#df972b] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
// //                 >
// //                   <div>
// //                     {/* Image */}
// //                     <div className="relative h-48 w-full overflow-hidden">
// //                       <img
// //                         src={
// //                           item.image && item.image.trim() !== ""
// //                             ? item.image
// //                             : "https://via.placeholder.com/400x300?text=Chadhawa"
// //                         }
// //                         alt={item.name}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                         onError={(e) => {
// //                           e.target.src =
// //                             "https://via.placeholder.com/400x300?text=Chadhawa";
// //                         }}
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

// //                       {/* Type Badge */}
// //                       <div className="absolute top-3 left-3 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
// //                         {item.chadhavaType?.replace("_", " ") || "Chadhawa"}
// //                       </div>

// //                       {/* Rating */}
// //                       <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
// //                         <span className="text-xs font-bold text-black">
// //                           {item.rating || "4.8"}
// //                         </span>
// //                         <FaStar className="text-[#df972b] text-[10px]" />
// //                       </div>

// //                       {/* Name */}
// //                       <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
// //                         <h3 className="text-sm md:text-base font-bold leading-snug line-clamp-2 drop-shadow-md">
// //                           {item.name}
// //                         </h3>
// //                       </div>
// //                     </div>

// //                     {/* Body */}
// //                     <div className="p-3 space-y-2">
// //                       <p className="text-xs text-black line-clamp-2 leading-relaxed min-h-[32px]">
// //                         {item.description || item.shortDescription}
// //                       </p>

// //                       {/* Temple */}
// //                       <div className="flex items-center gap-1.5 text-[11px] text-black font-medium">
// //                         <svg
// //                           viewBox="0 0 24 24"
// //                           className="w-3 h-3 text-[#c27803] shrink-0"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           strokeWidth="1.5"
// //                         >
// //                           <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
// //                         </svg>
// //                         <span className="truncate">
// //                           {item.templeName}
// //                           {item.location?.city && `, ${item.location.city}`}
// //                         </span>
// //                       </div>

// //                       {/* Price */}
// //                       <div className="pt-2 border-t border-amber-200/40 flex items-center justify-between">
// //                         <p className="text-[13px] font-bold text-[#7a1c1c]">
// //                           ₹{item.pricing?.single || item.price}
// //                         </p>
// //                         <p className="text-[10px] text-gray-500">
// //                           {item.bookingCount || 0} booked
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* CTA */}
// //                   <div className="p-3 pt-0">
// //                     <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-[#c27803] group-hover:to-[#c27803] text-white text-xs font-bold py-2.5 px-4 rounded-md text-center shadow-md transition-all duration-300">
// //                       Offer Chadhava
// //                     </div>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>

// //             {/* ⭐ View All Button — agar 10 se zyada hain */}
// //             {chadhavas.length === 10 && (
// //               <div className="text-center mt-10">
// //                 <Link
// //                   to="/chadhawa/all"
// //                   className="inline-flex items-center gap-2 bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white font-bold px-8 py-3 rounded-md text-sm shadow-lg hover:shadow-xl transition-all duration-300"
// //                 >
// //                   <span>View All Chadhawas</span>
// //                   <FaArrowRight className="text-sm" />
// //                 </Link>
// //               </div>
// //             )}
// //           </>
// //         ) : (
// //           <div className="text-center py-16 bg-white rounded-2xl border-2 border-amber-200/50">
// //             <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center mx-auto mb-4">
// //               <BiSearch className="text-white text-3xl" />
// //             </div>
// //             <h3 className="text-lg font-bold text-[#7a1c1c] mb-2">
// //               No Chadhava Found
// //             </h3>
// //             <p className="text-sm text-gray-500 mb-5">
// //               Try changing filters or search term
// //             </p>
// //             <button
// //               onClick={handleClearFilters}
// //               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
// //             >
// //               Clear All Filters
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // export default AllChadhavasSection;



// import React, { useState, useRef, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { Link } from "react-router-dom";
// import {
//   BiSearch,
//   BiFilter,
//   BiChevronDown,
//   BiCheck,
// } from "react-icons/bi";
// import { FaStar } from "react-icons/fa";
// import useChadhavaStore from "../../store/useChadhavaStore";

// /* ================= FILTER OPTIONS ================= */
// const typeOptions = [
//   "All",
//   "phool",
//   "vastra",
//   "prasad",
//   "nariyal",
//   "sindoor",
//   "chunri",
//   "mala",
//   "gangajal",
//   "belpatra",
//   "cow_seva",
//   "deepak",
//   "bhog",
//   "kalash",
//   "havan",
//   "shringar",
//   "charanamrit",
//   "annadaan",
// ];

// const deityOptions = [
//   "All",
//   "shiva",
//   "vishnu",
//   "devi",
//   "ganesh",
//   "hanuman",
//   "krishna",
//   "ram",
//   "durga",
//   "lakshmi",
//   "saraswati",
//   "sai_baba",
//   "other",
// ];

// /* ================= DROPDOWN (PORTAL + FIXED) ================= */
// function FilterDropdown({ label, options, value, onChange }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [coords, setCoords] = useState({
//     top: 0,
//     left: 0,
//     width: 200,
//     openUpward: false,
//   });

//   const buttonRef = useRef(null);
//   const menuRef = useRef(null);

//   /* ---------- Position calculator ---------- */
//   const calculatePosition = () => {
//     if (!buttonRef.current) return;

//     const rect = buttonRef.current.getBoundingClientRect();
//     const menuWidth = 220;
//     const menuHeight = Math.min(options.length * 42 + 16, 320);
//     const gap = 8;

//     const spaceBelow = window.innerHeight - rect.bottom;
//     const openUpward = spaceBelow < menuHeight + gap;

//     // Right-align with button, but keep inside viewport
//     let left = rect.right - menuWidth;
//     if (left < gap) left = gap;
//     if (left + menuWidth > window.innerWidth - gap) {
//       left = window.innerWidth - menuWidth - gap;
//     }

//     setCoords({
//       top: openUpward ? rect.top - gap : rect.bottom + gap,
//       left,
//       width: menuWidth,
//       openUpward,
//     });
//   };

//   /* ---------- Toggle ---------- */
//   const handleToggle = () => {
//     if (!isOpen) calculatePosition();
//     setIsOpen((prev) => !prev);
//   };

//   /* ---------- Close on outside click ---------- */
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleClickOutside = (e) => {
//       if (
//         buttonRef.current?.contains(e.target) ||
//         menuRef.current?.contains(e.target)
//       ) {
//         return;
//       }
//       setIsOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   /* ---------- Reposition on scroll / resize ---------- */
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleReposition = () => calculatePosition();

//     window.addEventListener("scroll", handleReposition, true);
//     window.addEventListener("resize", handleReposition);

//     return () => {
//       window.removeEventListener("scroll", handleReposition, true);
//       window.removeEventListener("resize", handleReposition);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isOpen]);

//   /* ---------- Close on Escape ---------- */
//   useEffect(() => {
//     if (!isOpen) return;
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [isOpen]);

//   const displayValue = value === "All" ? label : value.replace("_", " ");

//   return (
//     <div className="relative">
//       <button
//         ref={buttonRef}
//         onClick={handleToggle}
//         className="flex items-center gap-1.5 px-4 py-2 rounded-md shadow-sm transition-all cursor-pointer bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
//       >
//         <span className="truncate max-w-[100px] capitalize">
//           {displayValue}
//         </span>
//         <BiChevronDown
//           className={`text-base transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {isOpen &&
//         createPortal(
//           <div
//             ref={menuRef}
//             style={{
//               position: "fixed",
//               top: coords.openUpward ? "auto" : `${coords.top}px`,
//               bottom: coords.openUpward
//                 ? `${window.innerHeight - coords.top}px`
//                 : "auto",
//               left: `${coords.left}px`,
//               width: `${coords.width}px`,
//               zIndex: 99999,
//             }}
//             className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-2 border-black rounded-md shadow-2xl max-h-[320px] overflow-y-auto"
//           >
//             <div className="p-1.5">
//               {options.map((option) => (
//                 <div
//                   key={option}
//                   onClick={() => {
//                     onChange(option);
//                     setIsOpen(false);
//                   }}
//                   className={`px-3 py-2.5 text-xs font-semibold rounded-md cursor-pointer transition-all flex items-center justify-between whitespace-nowrap capitalize ${
//                     value === option
//                       ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
//                       : "text-[#7a1c1c] hover:bg-amber-50"
//                   }`}
//                 >
//                   <span>{option.replace("_", " ")}</span>
//                   {value === option && (
//                     <BiCheck className="text-base shrink-0 ml-2" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>,
//           document.body
//         )}
//     </div>
//   );
// }

// /* ================= MAIN SECTION ================= */
// function AllChadhavasSection() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     chadhavaType: "All",
//     deity: "All",
//   });

//   const {
//     chadhavas = [],
//     loading = false,
//     error = null,
//     fetchChadhavas,
//   } = useChadhavaStore();

//   /* ---------- Fetch chadhavas ---------- */
//   useEffect(() => {
//     if (typeof fetchChadhavas !== "function") return;

//     const timer = setTimeout(() => {
//       const apiFilters = { limit: 50, page: 1 };

//       if (searchTerm.trim()) apiFilters.search = searchTerm.trim();
//       if (filters.chadhavaType !== "All")
//         apiFilters.chadhavaType = filters.chadhavaType;
//       if (filters.deity !== "All") apiFilters.deity = filters.deity;

//       console.log("🔍 Fetching chadhavas:", apiFilters);
//       fetchChadhavas(apiFilters);
//     }, 400);

//     return () => clearTimeout(timer);
//   }, [searchTerm, filters, fetchChadhavas]);

//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleClearFilters = () => {
//     setFilters({ chadhavaType: "All", deity: "All" });
//     setSearchTerm("");
//   };

//   const activeFilterCount = Object.values(filters).filter(
//     (v) => v !== "All"
//   ).length;

//   return (
//     <section className="max-w-7xl py-6 px-2 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative">
//       {/* Ambient glow */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#df972b]/10 to-[#c27803]/10 rounded-full blur-3xl pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* HEADER */}
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center gap-2 mb-2">
//             <span className="text-xs font-bold tracking-[3px] text-[#c27803] uppercase">
//               Divine Offerings
//             </span>
//           </div>
//           <h2 className="text-2xl md:text-4xl font-bold text-[#7a1c1c] mb-2">
//             All Chadhavas
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#df972b] to-[#c27803] rounded-full mx-auto"></div>
//         </div>

//         {/* SEARCH + FILTERS */}
//         <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between mb-8">
//           {/* Search */}
//           <div className="relative w-full lg:w-96">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white text-lg">
//               <BiSearch />
//             </span>
//             <input
//               type="text"
//               placeholder="Search Chadhava, Temple..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] border-2 border-black rounded-md pl-10 pr-4 py-2.5 text-sm outline-none text-white placeholder:text-white"
//             />
//           </div>

//           {/* Filter buttons */}
//           <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
//             {activeFilterCount > 0 && (
//               <button
//                 onClick={handleClearFilters}
//                 className="flex items-center gap-1.5 bg-[#7a1c1c] hover:bg-[#5c1414] text-white px-4 py-2 rounded-md text-xs font-bold shadow-md transition-all cursor-pointer"
//               >
//                 <BiFilter className="text-sm" />
//                 <span>Clear ({activeFilterCount})</span>
//               </button>
//             )}

//             <FilterDropdown
//               label="Type"
//               options={typeOptions}
//               value={filters.chadhavaType}
//               onChange={(v) => handleFilterChange("chadhavaType", v)}
//             />
//             <FilterDropdown
//               label="Deity"
//               options={deityOptions}
//               value={filters.deity}
//               onChange={(v) => handleFilterChange("deity", v)}
//             />
//           </div>
//         </div>

//         {/* GRID */}
//         {loading ? (
//           <div className="text-center py-16">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df972b] mx-auto"></div>
//             <p className="mt-3 text-[#7a1c1c] font-semibold">
//               Loading chadhavas...
//             </p>
//           </div>
//         ) : error ? (
//           <div className="text-center py-16 text-red-600 font-semibold">
//             ⚠️ Error: {error}
//           </div>
//         ) : chadhavas.length > 0 ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
//             {chadhavas.map((item) => (
//               <Link
//                 to={`/chadhawa/${item._id}`}
//                 key={item._id}
//                 className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-amber-200/50 hover:border-[#df972b] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
//               >
//                 <div>
//                   {/* Image */}
//                   <div className="relative h-40 w-full overflow-hidden">
//                     <img
//                       src={
//                         item.image && item.image.trim() !== ""
//                           ? item.image
//                           : "https://via.placeholder.com/400x300?text=Chadhawa"
//                       }
//                       alt={item.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       onError={(e) => {
//                         e.target.src =
//                           "https://via.placeholder.com/400x300?text=Chadhawa";
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

//                     {/* Type Badge */}
//                     <div className="absolute top-2 left-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
//                       {item.chadhavaType?.replace("_", " ") || "Chadhawa"}
//                     </div>

//                     {/* Rating */}
//                     <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
//                       <span className="text-[10px] font-bold text-black">
//                         {item.rating || "4.8"}
//                       </span>
//                       <FaStar className="text-[#df972b] text-[9px]" />
//                     </div>

//                     {/* Name */}
//                     <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
//                       <h3 className="text-xs font-bold leading-snug line-clamp-2 drop-shadow-md">
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="p-2.5 space-y-1.5">
//                     <p className="text-[11px] text-black line-clamp-2 leading-relaxed min-h-[28px]">
//                       {item.description || item.shortDescription}
//                     </p>

//                     {/* Temple */}
//                     <div className="flex items-center gap-1 text-[10px] text-black font-medium">
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="w-3 h-3 text-[#c27803] shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="1.5"
//                       >
//                         <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
//                       </svg>
//                       <span className="truncate">{item.templeName}</span>
//                     </div>

//                     {/* Price */}
//                     <div className="pt-1.5 border-t border-amber-200/40 flex items-center justify-between">
//                       <p className="text-[12px] font-bold text-[#7a1c1c]">
//                         ₹{item.pricing?.single || item.price}
//                       </p>
//                       <p className="text-[9px] text-gray-500">
//                         {item.bookingCount || 0} booked
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="p-2.5 pt-0">
//                   <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold py-2 px-3 rounded-md text-center shadow-md">
//                     Offer Chadhava
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 bg-white rounded-2xl border-2 border-amber-200/50">
//             <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center mx-auto mb-4">
//               <BiSearch className="text-white text-3xl" />
//             </div>
//             <h3 className="text-lg font-bold text-[#7a1c1c] mb-2">
//               No Chadhava Found
//             </h3>
//             <p className="text-sm text-gray-500 mb-5">
//               Try changing filters or search term
//             </p>
//             <button
//               onClick={handleClearFilters}
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
//             >
//               Clear All Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default AllChadhavasSection;



import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  BiSearch,
  BiFilter,
  BiChevronDown,
  BiCheck,
} from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import useChadhavaStore from "../../store/useChadhavaStore";

/* ================= FILTER OPTIONS ================= */
const typeOptions = [
  "All",
  "phool",
  "vastra",
  "prasad",
  "nariyal",
  "sindoor",
  "chunri",
  "mala",
  "gangajal",
  "belpatra",
  "cow_seva",
  "deepak",
  "bhog",
  "kalash",
  "havan",
  "shringar",
  "charanamrit",
  "annadaan",
];

const deityOptions = [
  "All",
  "shiva",
  "vishnu",
  "devi",
  "ganesh",
  "hanuman",
  "krishna",
  "ram",
  "durga",
  "lakshmi",
  "saraswati",
  "sai_baba",
  "other",
];

/* ================= DROPDOWN (PORTAL + FIXED) ================= */
function FilterDropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    width: 200,
    openUpward: false,
  });

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  /* ---------- Position calculator ---------- */
  const calculatePosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const menuWidth = 220;
    const menuHeight = Math.min(options.length * 42 + 16, 320);
    const gap = 8;

    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < menuHeight + gap;

    // Right-align with button, but keep inside viewport
    let left = rect.right - menuWidth;
    if (left < gap) left = gap;
    if (left + menuWidth > window.innerWidth - gap) {
      left = window.innerWidth - menuWidth - gap;
    }

    setCoords({
      top: openUpward ? rect.top - gap : rect.bottom + gap,
      left,
      width: menuWidth,
      openUpward,
    });
  };

  /* ---------- Toggle ---------- */
  const handleToggle = () => {
    if (!isOpen) calculatePosition();
    setIsOpen((prev) => !prev);
  };

  /* ---------- Close on outside click ---------- */
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        buttonRef.current?.contains(e.target) ||
        menuRef.current?.contains(e.target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  /* ---------- Reposition on scroll / resize ---------- */
  useEffect(() => {
    if (!isOpen) return;

    const handleReposition = () => calculatePosition();

    window.addEventListener("scroll", handleReposition, true);
    window.addEventListener("resize", handleReposition);

    return () => {
      window.removeEventListener("scroll", handleReposition, true);
      window.removeEventListener("resize", handleReposition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  /* ---------- Close on Escape ---------- */
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const displayValue = value === "All" ? label : value.replace("_", " ");

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        // 🔴 Changed button background to maroon
        className="flex items-center gap-1.5 px-4 py-2 rounded-md shadow-sm transition-all cursor-pointer bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white"
      >
        <span className="truncate max-w-[100px] capitalize">
          {displayValue}
        </span>
        <BiChevronDown
          className={`text-base transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: coords.openUpward ? "auto" : `${coords.top}px`,
              bottom: coords.openUpward
                ? `${window.innerHeight - coords.top}px`
                : "auto",
              left: `${coords.left}px`,
              width: `${coords.width}px`,
              zIndex: 99999,
            }}
            className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border-2 border-[#7b1e2b]/30 rounded-md shadow-2xl max-h-[320px] overflow-y-auto"
          >
            <div className="p-1.5">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  // 🔴 Changed active option color to maroon, hover to light maroon
                  className={`px-3 py-2.5 text-xs font-semibold rounded-md cursor-pointer transition-all flex items-center justify-between whitespace-nowrap capitalize ${
                    value === option
                      ? "bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white"
                      : "text-[#7b1e2b] hover:bg-[#7b1e2b]/10"
                  }`}
                >
                  <span>{option.replace("_", " ")}</span>
                  {value === option && (
                    <BiCheck className="text-base shrink-0 ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

/* ================= MAIN SECTION ================= */
function AllChadhavasSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    chadhavaType: "All",
    deity: "All",
  });

  const {
    chadhavas = [],
    loading = false,
    error = null,
    fetchChadhavas,
  } = useChadhavaStore();

  /* ---------- Fetch chadhavas ---------- */
  useEffect(() => {
    if (typeof fetchChadhavas !== "function") return;

    const timer = setTimeout(() => {
      const apiFilters = { limit: 50, page: 1 };

      if (searchTerm.trim()) apiFilters.search = searchTerm.trim();
      if (filters.chadhavaType !== "All")
        apiFilters.chadhavaType = filters.chadhavaType;
      if (filters.deity !== "All") apiFilters.deity = filters.deity;

      console.log("🔍 Fetching chadhavas:", apiFilters);
      fetchChadhavas(apiFilters);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm, filters, fetchChadhavas]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({ chadhavaType: "All", deity: "All" });
    setSearchTerm("");
  };

  const activeFilterCount = Object.values(filters).filter(
    (v) => v !== "All"
  ).length;

  return (
    <section className="max-w-7xl py-6 px-2 md:px-4 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] relative">
      {/* Ambient glow 🔴 Changed to Maroon */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#7b1e2b]/10 to-[#5a1420]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            {/* 🔴 Changed top text to maroon */}
            <span className="text-xs font-bold tracking-[3px] text-[#7b1e2b] uppercase">
              Divine Offerings
            </span>
          </div>
          {/* 🔴 Changed heading to maroon */}
          <h2 className="text-2xl md:text-4xl font-bold text-[#7b1e2b] mb-2">
            All Chadhavas
          </h2>
          {/* 🔴 Changed underline to maroon */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] rounded-full mx-auto"></div>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between mb-8">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white text-lg">
              <BiSearch />
            </span>
            <input
              type="text"
              placeholder="Search Chadhava, Temple..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              // 🔴 Changed search background to maroon
              className="w-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] border-2 border-[#7b1e2b]/30 rounded-md pl-10 pr-4 py-2.5 text-sm outline-none text-white placeholder:text-white"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            {activeFilterCount > 0 && (
              <button
                onClick={handleClearFilters}
                // 🔴 Changed Clear button to maroon
                className="flex items-center gap-1.5 bg-[#7b1e2b] hover:bg-[#5a1420] text-white px-4 py-2 rounded-md text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <BiFilter className="text-sm" />
                <span>Clear ({activeFilterCount})</span>
              </button>
            )}

            <FilterDropdown
              label="Type"
              options={typeOptions}
              value={filters.chadhavaType}
              onChange={(v) => handleFilterChange("chadhavaType", v)}
            />
            <FilterDropdown
              label="Deity"
              options={deityOptions}
              value={filters.deity}
              onChange={(v) => handleFilterChange("deity", v)}
            />
          </div>
        </div>

        {/* GRID */}
        {loading ? (
          <div className="text-center py-16">
            {/* 🔴 Changed loader to maroon */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7b1e2b] mx-auto"></div>
            <p className="mt-3 text-[#7b1e2b] font-semibold">
              Loading chadhavas...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600 font-semibold">
            ⚠️ Error: {error}
          </div>
        ) : chadhavas.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {chadhavas.map((item) => (
              <Link
                to={`/chadhawa/${item._id}`}
                key={item._id}
                // 🔴 Changed card border to maroon tint
                className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden shadow-md hover:shadow-2xl border border-[#7b1e2b]/20 hover:border-[#7b1e2b]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={
                        item.image && item.image.trim() !== ""
                          ? item.image
                          : "https://via.placeholder.com/400x300?text=Chadhawa"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Chadhawa";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                    {/* Type Badge 🔴 Changed to maroon */}
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                      {item.chadhavaType?.replace("_", " ") || "Chadhawa"}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
                      <span className="text-[10px] font-bold text-black">
                        {item.rating || "4.8"}
                      </span>
                      {/* 🔴 Changed star to maroon */}
                      <FaStar className="text-[#7b1e2b] text-[9px]" />
                    </div>

                    {/* Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                      <h3 className="text-xs font-bold leading-snug line-clamp-2 drop-shadow-md">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-2.5 space-y-1.5">
                    <p className="text-[11px] text-black line-clamp-2 leading-relaxed min-h-[28px]">
                      {item.description || item.shortDescription}
                    </p>

                    {/* Temple */}
                    <div className="flex items-center gap-1 text-[10px] text-black font-medium">
                      {/* 🔴 Changed temple icon to maroon */}
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3 h-3 text-[#7b1e2b] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
                      </svg>
                      <span className="truncate">{item.templeName}</span>
                    </div>

                    {/* Price */}
                    <div className="pt-1.5 border-t border-[#7b1e2b]/10 flex items-center justify-between">
                      {/* 🔴 Changed price text to maroon */}
                      <p className="text-[12px] font-bold text-[#7b1e2b]">
                        ₹{item.pricing?.single || item.price}
                      </p>
                      <p className="text-[9px] text-gray-500">
                        {item.bookingCount || 0} booked
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA 🔴 Changed to maroon gradient */}
                <div className="p-2.5 pt-0">
                  <div className="w-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white text-[10px] font-bold py-2 px-3 rounded-md text-center shadow-md">
                    Offer Chadhava
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-[#7b1e2b]/20">
            {/* 🔴 Changed no-result icon to maroon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] flex items-center justify-center mx-auto mb-4">
              <BiSearch className="text-white text-3xl" />
            </div>
            <h3 className="text-lg font-bold text-[#7b1e2b] mb-2">
              No Chadhava Found
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Try changing filters or search term
            </p>
            <button
              onClick={handleClearFilters}
              // 🔴 Changed clear button to maroon
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7b1e2b] to-[#5a1420] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllChadhavasSection;