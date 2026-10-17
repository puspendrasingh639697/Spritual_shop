


// // import React, { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
// // import useAuthStore from "../store/useAuthStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";

// // const eShopCategories = [
// //   { label: "Puja Samagri", href: "/puja-samagri" },
// //   { label: "Puja Kits", href: "/puja-kits" },
// //   { label: "Yantra", href: "/yantra" },
// //   { label: "Rudraksha", href: "/rudraksha" },
// //   { label: "Gemstones", href: "/gemstones" },
// //   { label: "Idols", href: "/idols" },
// //   { label: "Remedies", href: "/remedies" },
// //   { label: "Festivals", href: "/festivals" },
// // ];

// // function Navbar() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
// //   const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const { token, logout } = useAuthStore();
// //   const { fetchCart, setUserId, resetCart } = useCartStore();
// //   const { fetchWishlist, resetWishlist } = useWishlistStore();

// //   useEffect(() => {
// //     const initUserData = async () => {
// //       const currentToken = useAuthStore.getState().token;
// //       if (!currentToken) return;

// //       const user = JSON.parse(localStorage.getItem("user") || "{}");
// //       const userId = user.id || user._id || localStorage.getItem("cartUserId");

// //       if (userId) {
// //         setUserId(userId);
// //         await fetchCart(userId);
// //       }
// //       await fetchWishlist();
// //     };
// //     initUserData();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [token]);

// //   const handleLogout = () => {
// //     logout();
// //     if (resetCart) resetCart();
// //     if (resetWishlist) resetWishlist();
// //     navigate("/login");
// //   };

// //   const handleAccountClick = (e) => {
// //     e.preventDefault();
// //     if (!token) navigate("/login");
// //     else navigate("/account");
// //   };

// //   return (
// //     <header className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] shadow-md border-b border-amber-900/10">
// //       <div className="w-full px-4 md:px-10 py-3">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="flex items-center justify-between gap-4">
// //             {/* Logo */}
// //             <Link to="/" className="flex items-center gap-2">
// //               <span className="text-xl md:text-2xl font-bold text-[#4a2e18] tracking-wider">
// //                 Astro
// //               </span>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden lg:flex items-center">
// //               <ul className="flex items-center gap-6 font-medium text-sm tracking-wide text-[#4a2e18]">
// //                 <li>
// //                   <Link
// //                     to="/"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Home
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/pooja-booking"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/pooja-booking" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Puja
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/temples"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/temples" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Temples
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/pandit-booking"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/pandit-booking" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Book Pandit Ji
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/chadhawa"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/chadhawa" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Chadwa
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     to="/siddh-coins"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/siddh-coins" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Siddh Coins
// //                   </Link>
// //                 </li>

// //                 {/* E-Shop Dropdown */}
// //                 <li
// //                   className="relative group cursor-pointer py-1"
// //                   onMouseEnter={() => setIsShopDropdownOpen(true)}
// //                   onMouseLeave={() => setIsShopDropdownOpen(false)}
// //                 >
// //                   <div
// //                     className={`flex items-center gap-1 hover:text-[#c27803] ${eShopCategories.some((c) => location.pathname === c.href) ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     <span>E-Shop</span>
// //                     <BiChevronDown
// //                       className={`transform transition-transform duration-200 ${isShopDropdownOpen ? "rotate-180" : ""}`}
// //                     />
// //                   </div>

// //                   {isShopDropdownOpen && (
// //                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-xl py-2 z-50 border border-gray-100 text-gray-800">
// //                       {eShopCategories.map((cat) => (
// //                         <Link
// //                           key={cat.label}
// //                           to={cat.href}
// //                           className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === cat.href ? "bg-orange-50 text-[#c27803]" : "text-gray-700 hover:bg-orange-50 hover:text-[#c27803]"}`}
// //                         >
// //                           {cat.label}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </li>

// //                 <li>
// //                   <Link
// //                     to="/blogs"
// //                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/blogs" ? "text-[#c27803] font-semibold" : ""}`}
// //                   >
// //                     Blogs
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </nav>

// //             {/* Right Actions */}
// //             <div className="flex items-center gap-4">
// //               <button
// //                 onClick={handleAccountClick}
// //                 className="hidden sm:flex items-center cursor-pointer text-sm font-semibold transition-colors bg-[#df972b] hover:bg-[#c27803] text-white px-5 py-1.5 rounded-full shadow-sm"
// //               >
// //                 <span>{token ? "Account" : "Login"}</span>
// //               </button>

// //               {token && (
// //                 <button
// //                   onClick={handleLogout}
// //                   className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition"
// //                 >
// //                   Logout
// //                 </button>
// //               )}

// //               <button
// //                 className="lg:hidden text-2xl focus:outline-none text-[#4a2e18]"
// //                 onClick={() => setIsMobileMenuOpen(true)}
// //               >
// //                 <BiMenu />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Drawer */}
// //       {isMobileMenuOpen && (
// //         <div className="fixed inset-0 z-50 flex">
// //           <div
// //             className="fixed inset-0 bg-black/60 transition-opacity"
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           ></div>
// //           <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
// //             <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
// //               <span className="font-bold text-lg text-[#c27803]">Menu</span>
// //               <button
// //                 className="text-gray-600 text-2xl focus:outline-none hover:text-black"
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //               >
// //                 <BiX />
// //               </button>
// //             </div>
// //             <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// //               <ul className="space-y-3 font-medium text-sm">
// //                 <li>
// //                   <Link to="/" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/pooja-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Puja</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/temples" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Temples</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/pandit-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Book Pandit Ji</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/chadhawa" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Chadwa</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/siddh-coins" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Siddh Coins</Link>
// //                 </li>

// //                 <li className="border-b border-gray-100 pb-2">
// //                   <div
// //                     className="flex items-center justify-between cursor-pointer"
// //                     onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
// //                   >
// //                     <span>E-Shop</span>
// //                     <BiChevronDown
// //                       className={`transform transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`}
// //                     />
// //                   </div>
// //                   {isMobileShopOpen && (
// //                     <ul className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200">
// //                       {eShopCategories.map((cat) => (
// //                         <li key={cat.label}>
// //                           <Link
// //                             to={cat.href}
// //                             className="block text-xs py-1 text-gray-600"
// //                             onClick={() => setIsMobileMenuOpen(false)}
// //                           >
// //                             {cat.label}
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}
// //                 </li>

// //                 <li>
// //                   <Link to="/blogs" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
// //                 </li>
// //               </ul>

// //               <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
// //                 <button
// //                   onClick={(e) => {
// //                     setIsMobileMenuOpen(false);
// //                     handleAccountClick(e);
// //                   }}
// //                   className="flex items-center justify-center cursor-pointer hover:bg-[#c27803] bg-[#df972b] text-white w-full py-2 rounded-full text-sm"
// //                 >
// //                   <span>{token ? "Account" : "Login"}</span>
// //                 </button>
// //                 {token && (
// //                   <button
// //                     onClick={() => {
// //                       setIsMobileMenuOpen(false);
// //                       handleLogout();
// //                     }}
// //                     className="flex items-center justify-center cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border border-red-200 py-2 rounded-full text-sm"
// //                   >
// //                     <span>Logout</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// // export default Navbar;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";
// import logo from "../assets/logoAstology.png"; // 👈 Logo import kiya

// const eShopCategories = [
//   { label: "Puja Samagri", href: "/puja-samagri" },
//   { label: "Puja Kits", href: "/puja-kits" },
//   { label: "Yantra", href: "/yantra" },
//   { label: "Rudraksha", href: "/rudraksha" },
//   { label: "Gemstones", href: "/gemstones" },
//   { label: "Idols", href: "/idols" },
//   { label: "Remedies", href: "/remedies" },
//   { label: "Festivals", href: "/festivals" },
// ];

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
//   const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const { token, logout } = useAuthStore();
//   const { fetchCart, setUserId, resetCart } = useCartStore();
//   const { fetchWishlist, resetWishlist } = useWishlistStore();

//   useEffect(() => {
//     const initUserData = async () => {
//       const currentToken = useAuthStore.getState().token;
//       if (!currentToken) return;

//       const user = JSON.parse(localStorage.getItem("user") || "{}");
//       const userId = user.id || user._id || localStorage.getItem("cartUserId");

//       if (userId) {
//         setUserId(userId);
//         await fetchCart(userId);
//       }
//       await fetchWishlist();
//     };
//     initUserData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [token]);

//   const handleLogout = () => {
//     logout();
//     if (resetCart) resetCart();
//     if (resetWishlist) resetWishlist();
//     navigate("/login");
//   };

//   const handleAccountClick = (e) => {
//     e.preventDefault();
//     if (!token) navigate("/login");
//     else navigate("/account");
//   };

//   return (
//     <header className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] shadow-md border-b border-amber-900/10">
//       <div className="w-full px-4 md:px-10 py-3">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-between gap-4">
//             {/* Logo */}
//             {/* Logo */}
// <Link to="/" className="flex items-center gap-2 overflow-hidden">
//   <img
//     src={logo}
//     alt="Astro Logo"
//     className="h-34 md:h-0 w-auto object-cover scale-110"
//   />
// </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center">
//               <ul className="flex items-center gap-6 font-medium text-sm tracking-wide text-[#4a2e18]">
//                 <li>
//                   <Link
//                     to="/"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/pooja-booking"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/pooja-booking" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Puja
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/temples"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/temples" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Temples
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/pandit-booking"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/pandit-booking" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Book Pandit Ji
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/chadhawa"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/chadhawa" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Chadwa
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/siddh-coins"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/siddh-coins" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Siddh Coins
//                   </Link>
//                 </li>

//                 {/* E-Shop Dropdown */}
//                 <li
//                   className="relative group cursor-pointer py-1"
//                   onMouseEnter={() => setIsShopDropdownOpen(true)}
//                   onMouseLeave={() => setIsShopDropdownOpen(false)}
//                 >
//                   <div
//                     className={`flex items-center gap-1 hover:text-[#c27803] ${eShopCategories.some((c) => location.pathname === c.href) ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     <span>E-Shop</span>
//                     <BiChevronDown
//                       className={`transform transition-transform duration-200 ${isShopDropdownOpen ? "rotate-180" : ""}`}
//                     />
//                   </div>

//                   {isShopDropdownOpen && (
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-xl py-2 z-50 border border-gray-100 text-gray-800">
//                       {eShopCategories.map((cat) => (
//                         <Link
//                           key={cat.label}
//                           to={cat.href}
//                           className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === cat.href ? "bg-orange-50 text-[#c27803]" : "text-gray-700 hover:bg-orange-50 hover:text-[#c27803]"}`}
//                         >
//                           {cat.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>

//                 <li>
//                   <Link
//                     to="/blogs"
//                     className={`transition-colors hover:text-[#c27803] ${location.pathname === "/blogs" ? "text-[#c27803] font-semibold" : ""}`}
//                   >
//                     Blogs
//                   </Link>
//                 </li>
//               </ul>
//             </nav>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={handleAccountClick}
//                 className="hidden sm:flex items-center cursor-pointer text-sm font-semibold transition-colors bg-[#df972b] hover:bg-[#c27803] text-white px-5 py-1.5 rounded-full shadow-sm"
//               >
//                 <span>{token ? "Account" : "Login"}</span>
//               </button>

//               {token && (
//                 <button
//                   onClick={handleLogout}
//                   className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-red-800 transition"
//                 >
//                   Logout
//                 </button>
//               )}

//               <button
//                 className="lg:hidden text-2xl focus:outline-none text-[#4a2e18]"
//                 onClick={() => setIsMobileMenuOpen(true)}
//               >
//                 <BiMenu />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="fixed inset-0 bg-black/60 transition-opacity"
//             onClick={() => setIsMobileMenuOpen(false)}
//           ></div>
//           <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
//             <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
//               <span className="font-bold text-lg text-[#c27803]">Menu</span>
//               <button
//                 className="text-gray-600 text-2xl focus:outline-none hover:text-black"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <BiX />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
//               <ul className="space-y-3 font-medium text-sm">
//                 <li>
//                   <Link to="/" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/pooja-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Puja</Link>
//                 </li>
//                 <li>
//                   <Link to="/temples" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Temples</Link>
//                 </li>
//                 <li>
//                   <Link to="/pandit-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Book Pandit Ji</Link>
//                 </li>
//                 <li>
//                   <Link to="/chadhawa" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Chadwa</Link>
//                 </li>
//                 <li>
//                   <Link to="/siddh-coins" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Siddh Coins</Link>
//                 </li>

//                 <li className="border-b border-gray-100 pb-2">
//                   <div
//                     className="flex items-center justify-between cursor-pointer"
//                     onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
//                   >
//                     <span>E-Shop</span>
//                     <BiChevronDown
//                       className={`transform transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`}
//                     />
//                   </div>
//                   {isMobileShopOpen && (
//                     <ul className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200">
//                       {eShopCategories.map((cat) => (
//                         <li key={cat.label}>
//                           <Link
//                             to={cat.href}
//                             className="block text-xs py-1 text-gray-600"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                           >
//                             {cat.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>

//                 <li>
//                   <Link to="/blogs" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
//                 </li>
//               </ul>

//               <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
//                 <button
//                   onClick={(e) => {
//                     setIsMobileMenuOpen(false);
//                     handleAccountClick(e);
//                   }}
//                   className="flex items-center justify-center cursor-pointer hover:bg-[#c27803] bg-[#df972b] text-white w-full py-2 rounded-full text-sm"
//                 >
//                   <span>{token ? "Account" : "Login"}</span>
//                 </button>
//                 {token && (
//                   <button
//                     onClick={() => {
//                       setIsMobileMenuOpen(false);
//                       handleLogout();
//                     }}
//                     className="flex items-center justify-center cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border border-red-200 py-2 rounded-full text-sm"
//                   >
//                     <span>Logout</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";
import logo from "../assets/logoAstology.png";

const eShopCategories = [
  { label: "Puja Samagri", href: "/puja-samagri" },
  { label: "Puja Kits", href: "/puja-kits" },
  { label: "Yantra", href: "/yantra" },
  { label: "Rudraksha", href: "/rudraksha" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "Idols", href: "/idols" },
  { label: "Remedies", href: "/remedies" },
  { label: "Festivals", href: "/festivals" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { token, logout } = useAuthStore();
  const { fetchCart, setUserId, resetCart } = useCartStore();
  const { fetchWishlist, resetWishlist } = useWishlistStore();

  useEffect(() => {
    const initUserData = async () => {
      const currentToken = useAuthStore.getState().token;
      if (!currentToken) return;

      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user.id || user._id || localStorage.getItem("cartUserId");

      if (userId) {
        setUserId(userId);
        await fetchCart(userId);
      }
      await fetchWishlist();
    };
    initUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleLogout = () => {
    logout();
    if (resetCart) resetCart();
    if (resetWishlist) resetWishlist();
    navigate("/login");
  };

  const handleAccountClick = (e) => {
    e.preventDefault();
    if (!token) navigate("/login");
    else navigate("/account");
  };

  return (
    <>
      {/* 🔴 TOP ANNOUNCEMENT BAR (thin maroon strip) */}
      <div className="w-full bg-[#7b1e2b] text-white text-[11px] md:text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between">
          <span className="tracking-wider opacity-90 hidden sm:block">
            || Har Har Mahadev ||
          </span>
          <span className="tracking-wide text-center flex-1">
            ✦ Spreading Faith, Devotion & Positive Karma ✦
          </span>
          <div className="hidden sm:flex items-center gap-4 opacity-90">
            <span>Download App</span>
            <span>|</span>
            <span>Help</span>
            <span>|</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* ⚪ MAIN NAVBAR (white background) */}
      <header className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]  shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="w-full px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 h-16 md:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center shrink-0">
                <img
                  src={logo}
                  alt="Astro Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </Link>

              {/* Desktop Navigation - Center */}
              <nav className="hidden lg:flex items-center flex-1 justify-center">
                <ul className="flex items-center gap-7 font-semibold text-sm text-gray-800">
                  <li>
                    <Link
                      to="/"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/temples"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/temples" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Temples
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pooja-booking"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/pooja-booking" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Pujas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chadhawa"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/chadhawa" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Chadhava
                    </Link>
                  </li>
                  <li>
                    {/* <Link
                      to="/pandit-booking"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/pandit-booking" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Book Pandit Ji
                    </Link> */}
                  </li>
                  <li>
                    <Link
                      to="/siddh-coins"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/siddh-coins" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Siddh Coins
                    </Link>
                  </li>

                  {/* E-Shop Dropdown */}
                  <li
                    className="relative group cursor-pointer py-2"
                    onMouseEnter={() => setIsShopDropdownOpen(true)}
                    onMouseLeave={() => setIsShopDropdownOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-1 hover:text-[#7b1e2b] ${eShopCategories.some((c) => location.pathname === c.href) ? "text-[#7b1e2b]" : ""}`}
                    >
                      <span>Store</span>
                      <BiChevronDown
                        className={`transform transition-transform duration-200 ${isShopDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    {isShopDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-xl py-2 z-50 border border-gray-100 text-gray-800 rounded-md">
                        {eShopCategories.map((cat) => (
                          <Link
                            key={cat.label}
                            to={cat.href}
                            className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === cat.href ? "bg-rose-50 text-[#7b1e2b]" : "text-gray-700 hover:bg-rose-50 hover:text-[#7b1e2b]"}`}
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/blogs"
                      className={`transition-colors hover:text-[#7b1e2b] ${location.pathname === "/blogs" ? "text-[#7b1e2b]" : ""}`}
                    >
                      Content
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleAccountClick}
                  className="hidden sm:flex items-center cursor-pointer text-sm font-semibold transition-colors bg-[#7b1e2b] hover:bg-[#5e1620] text-white px-6 py-2 rounded-md shadow-sm"
                >
                  <span>{token ? "Account" : "Login"}</span>
                </button>

                {token && (
                  <button
                    onClick={handleLogout}
                    className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-2 rounded-md font-semibold hover:bg-red-800 transition"
                  >
                    Logout
                  </button>
                )}

                <button
                  className="lg:hidden text-2xl focus:outline-none text-gray-800"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <BiMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
              <span className="font-bold text-lg text-[#7b1e2b]">Menu</span>
              <button
                className="text-gray-600 text-2xl focus:outline-none hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BiX />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
              <ul className="space-y-3 font-medium text-sm">
                <li>
                  <Link to="/" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/temples" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Temples</Link>
                </li>
                <li>
                  <Link to="/pooja-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Pujas</Link>
                </li>
                <li>
                  <Link to="/chadhawa" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Chadhava</Link>
                </li>
                <li>
                  <Link to="/pandit-booking" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Book Pandit Ji</Link>
                </li>
                <li>
                  <Link to="/siddh-coins" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Siddh Coins</Link>
                </li>

                <li className="border-b border-gray-100 pb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                  >
                    <span>Store</span>
                    <BiChevronDown
                      className={`transform transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  {isMobileShopOpen && (
                    <ul className="pl-4 mt-2 space-y-2 border-l-2 border-rose-200">
                      {eShopCategories.map((cat) => (
                        <li key={cat.label}>
                          <Link
                            to={cat.href}
                            className="block text-xs py-1 text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/blogs" className="block border-b border-gray-100 pb-2" onClick={() => setIsMobileMenuOpen(false)}>Content</Link>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
                <button
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleAccountClick(e);
                  }}
                  className="flex items-center justify-center cursor-pointer bg-[#7b1e2b] hover:bg-[#5e1620] text-white w-full py-2 rounded-md text-sm"
                >
                  <span>{token ? "Account" : "Login"}</span>
                </button>
                {token && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center justify-center cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border border-red-200 py-2 rounded-md text-sm"
                  >
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;