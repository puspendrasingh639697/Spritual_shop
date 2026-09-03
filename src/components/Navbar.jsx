// // // import React, { useState, useEffect } from "react";
// // // import { Link, useLocation, useNavigate } from "react-router-dom";
// // // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // // import headerBg from "../assets/haderbener.png";
// // // import useAuthStore from "../store/useAuthStore";
// // // import useCartStore from "../store/useCartStore";
// // // import useWishlistStore from "../store/useWishlistStore";

// // // const navLinks = [
// // //     { label: "Puja Samagri", href: "/puja-samagri" },
// // //     { label: "Puja Kits", href: "/puja-kits" },
// // //     { label: "Yantra", href: "/yantra" },
// // //     { label: "Rudraksha", href: "/rudraksha" },
// // //     { label: "Gemstones", href: "/gemstones" },
// // //     { label: "Idols", href: "/idols" },
// // //     { label: "Remedies", href: "/remedies" },
// // //     { label: "Festivals", href: "/festivals" },
// // //     { label: "Blogs", href: "/blogs" },
// // // ];

// // // function Navbar() {
// // //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //     const location = useLocation(); 
// // //     const navigate = useNavigate();
    
// // //     const { token, logout } = useAuthStore();
// // //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// // //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
// // //     const messages = [
// // //         "✨ 100% Cashback available upto ₹500",
// // //         "🕉️ Free delivery on orders over ₹299",
// // //         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
// // //     ];
    
// // //     const [currentIndex, setCurrentIndex] = useState(0);
// // //     const wishlistCount = getWishlistCount();

// // //     useEffect(() => {
// // //         const timer = setInterval(() => {
// // //             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
// // //         }, 3000);
// // //         return () => clearInterval(timer);
// // //     }, [messages.length]);

// // //     useEffect(() => {
// // //         const initUserData = async () => {
// // //             const token = useAuthStore.getState().token; // Direct store se latest token lein
            
// // //             // Agar token nahi hai toh yahin se return ho jayein (401 error nahi aayegi)
// // //             if (!token) return;

// // //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// // //             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
// // //             if (userId) {
// // //                 setUserId(userId);
// // //                 await fetchCart(userId);
// // //             }
            
// // //             // Wishlist fetch sirf tabhi ho jab token ho
// // //             await fetchWishlist();
// // //         };
        
// // //         initUserData();
// // //     }, [token]);

// // //     const handleLogout = () => {
// // //         logout();
// // //         resetCart();
// // //         resetWishlist();
// // //         navigate("/login");
// // //     };

// // //     const handleAccountClick = (e) => {
// // //         e.preventDefault();
// // //         if (!token) {
// // //             navigate("/login");
// // //         } else {
// // //             navigate("/account");
// // //         }
// // //     };

// // //     return (
// // //         <header className="w-full relative shadow-md font-sans">
// // //             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
// // //                 <div className="whitespace-nowrap animate-scroll">
// // //                     {messages.map((msg, index) => (
// // //                         <span key={index} className="mx-8">{msg}</span>
// // //                     ))}
// // //                 </div>
// // //             </div>

// // //             <div className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative" style={{ backgroundImage: `url(${headerBg})` }}>
// // //                 <div className="relative z-10">
// // //                     <div className="flex items-center justify-between gap-4">
// // //                         <Link to="/" className="flex items-center">
// // //                             <img src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" alt="Puja Hetu Logo" className="h-10 md:h-12 object-contain" />
// // //                         </Link>

// // //                         <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
// // //                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// // //                             <button className="text-gray-600 hover:text-black text-lg"><BiSearch /></button>
// // //                         </div>

// // //                         <div className="flex items-center gap-5">
// // //                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors bg-transparent border-none">
// // //                                 <BiUser className="text-lg" /> <span>{token ? "Account" : "Login"}</span>
// // //                             </button>

// // //                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors relative">
// // //                                 <BiHeart className="text-lg" /> <span>Wishlist</span>
// // //                                 {wishlistCount > 0 && (
// // //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
// // //                                 )}
// // //                             </Link>

// // //                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
// // //                                 <BiShoppingBag className="text-xl" />
// // //                                 <span className="hidden sm:inline">Cart</span>
// // //                                 {cartTotalItems > 0 && (
// // //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
// // //                                 )}
// // //                             </Link>

// // //                             {token && (
// // //                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-2.5 py-1 rounded font-semibold hover:bg-red-800 transition">Logout</button>
// // //                             )}

// // //                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
// // //                         </div>
// // //                     </div>

// // //                     <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
// // //                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// // //                         <button className="text-gray-600 text-lg"><BiSearch /></button>
// // //                     </div>

// // //                     <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
// // //                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
// // //                             {navLinks.map((link) => {
// // //                                 const isActive = location.pathname === link.href;
// // //                                 return (
// // //                                     <li key={link.label}>
// // //                                         <Link to={link.href} className={`transition-colors pb-1 ${isActive ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>{link.label}</Link>
// // //                                     </li>
// // //                                 );
// // //                             })}
// // //                         </ul>
// // //                     </nav>
// // //                 </div>
// // //             </div>

// // //             {isMobileMenuOpen && (
// // //                 <div className="fixed inset-0 z-50 flex">
// // //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// // //                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
// // //                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
// // //                             <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
// // //                             <button className="text-gray-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// // //                         </div>
// // //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// // //                             <ul className="space-y-3 font-semibold">
// // //                                 {navLinks.map((link) => {
// // //                                     const isActive = location.pathname === link.href;
// // //                                     return (
// // //                                         <li key={link.label}>
// // //                                             <Link to={link.href} className={`block border-b border-gray-100 pb-2 transition-colors ${isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
// // //                                         </li>
// // //                                     );
// // //                                 })}
// // //                             </ul>
// // //                             <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
// // //                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
// // //                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
// // //                                 </button>
// // //                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // //                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
// // //                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
// // //                                 </Link>
// // //                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// // //                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
// // //                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
// // //                                 </Link>
// // //                                 {token && (
// // //                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </header>
// // //     );
// // // }

// // // export default Navbar;


// // import React, { useState, useEffect } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
// // import headerBg from "../assets/haderbener.png";
// // import useAuthStore from "../store/useAuthStore";
// // import useCartStore from "../store/useCartStore";
// // import useWishlistStore from "../store/useWishlistStore";

// // const navLinks = [
// //     { label: "Book Puja", href: "/book-puja" },
// //     { label: "Puja Samagri", href: "/puja-samagri" },
// //     { label: "Puja Kits", href: "/puja-kits" },
// //     { label: "Yantra", href: "/yantra" },
// //     { label: "Rudraksha", href: "/rudraksha" },
// //     { label: "Gemstones", href: "/gemstones" },
// //     { label: "Idols", href: "/idols" },
// //     { label: "Remedies", href: "/remedies" },
// //     { label: "Festivals", href: "/festivals" },
// //     { label: "Blogs", href: "/blogs" },
// // ];

// // function Navbar() {
// //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //     const location = useLocation(); 
// //     const navigate = useNavigate();
    
// //     const { token, logout } = useAuthStore();
// //     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
// //     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
// //     const messages = [
// //         "✨ 100% Cashback available upto ₹500",
// //         "🕉️ Free delivery on orders over ₹299",
// //         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
// //     ];
    
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const wishlistCount = getWishlistCount();

// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
// //         }, 3000);
// //         return () => clearInterval(timer);
// //     }, [messages.length]);

// //     useEffect(() => {
// //         const initUserData = async () => {
// //             const token = useAuthStore.getState().token; // Direct store se latest token lein
            
// //             // Agar token nahi hai toh yahin se return ho jayein (401 error nahi aayegi)
// //             if (!token) return;

// //             const user = JSON.parse(localStorage.getItem('user') || '{}');
// //             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
// //             if (userId) {
// //                 setUserId(userId);
// //                 await fetchCart(userId);
// //             }
            
// //             // Wishlist fetch sirf tabhi ho jab token ho
// //             await fetchWishlist();
// //         };
        
// //         initUserData();
// //     }, [token]);

// //     const handleLogout = () => {
// //         logout();
// //         resetCart();
// //         resetWishlist();
// //         navigate("/login");
// //     };

// //     const handleAccountClick = (e) => {
// //         e.preventDefault();
// //         if (!token) {
// //             navigate("/login");
// //         } else {
// //             navigate("/account");
// //         }
// //     };

// //     return (
// //         <header className="w-full relative shadow-md font-sans">
// //             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
// //                 <div className="whitespace-nowrap animate-scroll">
// //                     {messages.map((msg, index) => (
// //                         <span key={index} className="mx-8">{msg}</span>
// //                     ))}
// //                 </div>
// //             </div>

// //             <div className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative" style={{ backgroundImage: `url(${headerBg})` }}>
// //                 <div className="relative z-10">
// //                     <div className="flex items-center justify-between gap-4">
// //                         <Link to="/" className="flex items-center">
// //                             <img src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" alt="Puja Hetu Logo" className="h-10 md:h-12 object-contain" />
// //                         </Link>

// //                         <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
// //                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// //                             <button className="text-gray-600 hover:text-black text-lg"><BiSearch /></button>
// //                         </div>

// //                         <div className="flex items-center gap-5">
// //                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors bg-transparent border-none">
// //                                 <BiUser className="text-lg" /> <span>{token ? "Account" : "Login"}</span>
// //                             </button>

// //                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors relative">
// //                                 <BiHeart className="text-lg" /> <span>Wishlist</span>
// //                                 {wishlistCount > 0 && (
// //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
// //                                 )}
// //                             </Link>

// //                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
// //                                 <BiShoppingBag className="text-xl" />
// //                                 <span className="hidden sm:inline">Cart</span>
// //                                 {cartTotalItems > 0 && (
// //                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
// //                                 )}
// //                             </Link>

// //                             {token && (
// //                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-2.5 py-1 rounded font-semibold hover:bg-red-800 transition">Logout</button>
// //                             )}

// //                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
// //                         </div>
// //                     </div>

// //                     <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
// //                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
// //                         <button className="text-gray-600 text-lg"><BiSearch /></button>
// //                     </div>

// //                     <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
// //                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
// //                             {navLinks.map((link) => {
// //                                 const isActive = location.pathname === link.href;
// //                                 return (
// //                                     <li key={link.label}>
// //                                         <Link to={link.href} className={`transition-colors pb-1 ${isActive ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>{link.label}</Link>
// //                                     </li>
// //                                 );
// //                             })}
// //                         </ul>
// //                     </nav>
// //                 </div>
// //             </div>

// //             {isMobileMenuOpen && (
// //                 <div className="fixed inset-0 z-50 flex">
// //                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
// //                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
// //                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
// //                             <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
// //                             <button className="text-gray-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
// //                         </div>
// //                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
// //                             <ul className="space-y-3 font-semibold">
// //                                 {navLinks.map((link) => {
// //                                     const isActive = location.pathname === link.href;
// //                                     return (
// //                                         <li key={link.label}>
// //                                             <Link to={link.href} className={`block border-b border-gray-100 pb-2 transition-colors ${isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
// //                                         </li>
// //                                     );
// //                                 })}
// //                             </ul>
// //                             <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
// //                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
// //                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
// //                                 </button>
// //                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// //                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
// //                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
// //                                 </Link>
// //                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
// //                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
// //                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
// //                                 </Link>
// //                                 {token && (
// //                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             )}
// //         </header>
// //     );
// // }

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
// import headerBg from "../assets/haderbener.png";
// import useAuthStore from "../store/useAuthStore";
// import useCartStore from "../store/useCartStore";
// import useWishlistStore from "../store/useWishlistStore";

// const eShopCategories = [
//     { label: "Puja Samagri", href: "/puja-samagri" },
//     { label: "Puja Kits", href: "/puja-kits" },
//     { label: "Yantra", href: "/yantra" },
//     { label: "Rudraksha", href: "/rudraksha" },
//     { label: "Gemstones", href: "/gemstones" },
//     { label: "Idols", href: "/idols" },
//     { label: "Remedies", href: "/remedies" },
//     { label: "Festivals", href: "/festivals" },
// ];

// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
//     const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

//     const location = useLocation(); 
//     const navigate = useNavigate();
    
//     const { token, logout } = useAuthStore();
//     const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
//     const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
//     const messages = [
//         "✨ 100% Cashback available upto ₹500",
//         "🕉️ Free delivery on orders over ₹299",
//         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
//     ];
    
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const wishlistCount = getWishlistCount();

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
//         }, 3000);
//         return () => clearInterval(timer);
//     }, [messages.length]);

//     useEffect(() => {
//         const initUserData = async () => {
//             const token = useAuthStore.getState().token; 
//             if (!token) return;

//             const user = JSON.parse(localStorage.getItem('user') || '{}');
//             const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
//             if (userId) {
//                 setUserId(userId);
//                 await fetchCart(userId);
//             }
//             await fetchWishlist();
//         };
//         initUserData();
//     }, [token]);

//     const handleLogout = () => {
//         logout();
//         resetCart();
//         resetWishlist();
//         navigate("/login");
//     };

//     const handleAccountClick = (e) => {
//         e.preventDefault();
//         if (!token) {
//             navigate("/login");
//         } else {
//             navigate("/account");
//         }
//     };

//     return (
//         <header className="w-full relative shadow-md font-sans">
//             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
//                 <div className="whitespace-nowrap animate-scroll">
//                     {messages.map((msg, index) => (
//                         <span key={index} className="mx-8">{msg}</span>
//                     ))}
//                 </div>
//             </div>

//             <div className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative" style={{ backgroundImage: `url(${headerBg})` }}>
//                 <div className="relative z-10">
//                     <div className="flex items-center justify-between gap-4">
//                         <Link to="/" className="flex items-center">
//                             <img src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" alt="Puja Hetu Logo" className="h-10 md:h-12 object-contain" />
//                         </Link>

//                         <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
//                             <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
//                             <button className="text-gray-600 hover:text-black text-lg"><BiSearch /></button>
//                         </div>

//                         <div className="flex items-center gap-5">
//                             <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors bg-transparent border-none">
//                                 <BiUser className="text-lg" /> <span>{token ? "Account" : "Login"}</span>
//                             </button>

//                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors relative">
//                                 <BiHeart className="text-lg" /> <span>Wishlist</span>
//                                 {wishlistCount > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
//                                 )}
//                             </Link>

//                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
//                                 <BiShoppingBag className="text-xl" />
//                                 <span className="hidden sm:inline">Cart</span>
//                                 {cartTotalItems > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
//                                 )}
//                             </Link>

//                             {token && (
//                                 <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-2.5 py-1 rounded font-semibold hover:bg-red-800 transition">Logout</button>
//                             )}

//                             <button className="md:hidden text-[#4a2e18] text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
//                         </div>
//                     </div>

//                     <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
//                         <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent" />
//                         <button className="text-gray-600 text-lg"><BiSearch /></button>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
//                         <ul className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
//                             <li>
//                                 <Link to="/" className={`transition-colors pb-1 ${location.pathname === "/" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/pandit-booking" className={`transition-colors pb-1 ${location.pathname === "/pandit-booking" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>Pandit Booking</Link>
//                             </li>
//                             <li>
//                                 <Link to="/pooja-booking" className={`transition-colors pb-1 ${location.pathname === "/pooja-booking" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>Pooja Booking</Link>
//                             </li>

//                             {/* E-Shop Dropdown */}
//                             <li 
//                                 className="relative group cursor-pointer py-1"
//                                 onMouseEnter={() => setIsShopDropdownOpen(true)}
//                                 onMouseLeave={() => setIsShopDropdownOpen(false)}
//                             >
//                                 <div className={`flex items-center gap-1 hover:text-amber-900 ${eShopCategories.some(c => location.pathname === c.href) ? "text-[#8c0a15]" : ""}`}>
//                                     <span>E-Shop</span>
//                                     <BiChevronDown className={`transform transition-transform duration-200 ${isShopDropdownOpen ? "rotate-180" : ""}`} />
//                                 </div>

//                                 {isShopDropdownOpen && (
//                                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100">
//                                         {eShopCategories.map((cat) => (
//                                             <Link 
//                                                 key={cat.label} 
//                                                 to={cat.href}
//                                                 className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === cat.href ? "bg-orange-50 text-[#8c0a15]" : "text-gray-700 hover:bg-orange-50 hover:text-[#8c0a15]"}`}
//                                             >
//                                                 {cat.label}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>

//                             <li>
//                                 <Link to="/chadhawa" className={`transition-colors pb-1 ${location.pathname === "/chadhawa" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>Chadhawa</Link>
//                             </li>
//                             <li>
//                                 <Link to="/blogs" className={`transition-colors pb-1 ${location.pathname === "/blogs" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-amber-900"}`}>Blogs</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Mobile Navigation Drawer */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 z-50 flex">
//                     <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
//                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
//                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
//                             <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
//                             <button className="text-gray-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
//                         </div>
//                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
//                             <ul className="space-y-3 font-semibold">
//                                 <li>
//                                     <Link to="/" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/pandit-booking" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/pandit-booking" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Pandit Booking</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/pooja-booking" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/pooja-booking" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Pooja Booking</Link>
//                                 </li>

//                                 {/* Mobile E-Shop Dropdown */}
//                                 <li className="border-b border-gray-100 pb-2">
//                                     <div 
//                                         className="flex items-center justify-between cursor-pointer"
//                                         onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
//                                     >
//                                         <span className={eShopCategories.some(c => location.pathname === c.href) ? "text-[#8c0a15]" : ""}>E-Shop</span>
//                                         <BiChevronDown className={`transform transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`} />
//                                     </div>
//                                     {isMobileShopOpen && (
//                                         <ul className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200">
//                                             {eShopCategories.map((cat) => (
//                                                 <li key={cat.label}>
//                                                     <Link 
//                                                         to={cat.href} 
//                                                         className={`block text-xs py-1 ${location.pathname === cat.href ? "text-[#8c0a15] font-bold" : "text-gray-600"}`}
//                                                         onClick={() => setIsMobileMenuOpen(false)}
//                                                     >
//                                                         {cat.label}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </li>

//                                 <li>
//                                     <Link to="/chadhawa" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/chadhawa" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Chadhawa</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/blogs" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/blogs" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
//                                 </li>
//                             </ul>

//                             <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
//                                 <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
//                                     <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
//                                 </button>
//                                 <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
//                                     {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
//                                 </Link>
//                                 <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
//                                     <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
//                                     {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
//                                 </Link>
//                                 {token && (
//                                     <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSearch, BiUser, BiHeart, BiShoppingBag, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/useCartStore";
import useWishlistStore from "../store/useWishlistStore";

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
    const { totalItems: cartTotalItems, fetchCart, setUserId, resetCart } = useCartStore();
    const { getWishlistCount, fetchWishlist, resetWishlist } = useWishlistStore();
    
    const messages = [
        "✨ 100% Cashback available upto ₹500",
        "🕉️ Free delivery on orders over ₹299",
        "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const wishlistCount = getWishlistCount();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === messages.length - 1 ? 0 : prevIndex + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, [messages.length]);

    useEffect(() => {
        const initUserData = async () => {
            const token = useAuthStore.getState().token; 
            if (!token) return;

            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.id || user._id || localStorage.getItem('cartUserId');
            
            if (userId) {
                setUserId(userId);
                await fetchCart(userId);
            }
            await fetchWishlist();
        };
        initUserData();
    }, [token]);

    const handleLogout = () => {
        logout();
        resetCart();
        resetWishlist();
        navigate("/login");
    };

    const handleAccountClick = (e) => {
        e.preventDefault();
        if (!token) {
            navigate("/login");
        } else {
            navigate("/account");
        }
    };

    return (
        <header className="w-full bg-[#f6eee3] shadow-md  border-b border-amber-900/10">
            {/* Top Announcement Bar */}
            <div className="w-full bg-[#8c0a15] text-white text-center py-1.5 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm">
                <div className="whitespace-nowrap animate-scroll">
                    {messages.map((msg, index) => (
                        <span key={index} className="mx-8">{msg}</span>
                    ))}
                </div>
            </div>

            {/* Main Header Container */}
            <div className="w-full px-4 md:px-10 py-3">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-[#4a2e18] tracking-wider">जपं</span>
                        </Link>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center bg-white rounded-md px-3 py-2 w-72 lg:w-[450px] shadow-inner border border-amber-900/20">
                            <input 
                                type="text" 
                                placeholder="Search for products..." 
                                className="w-full border-none outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500" 
                            />
                            <button className="text-lg text-gray-500 hover:text-gray-800"><BiSearch /></button>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4 md:gap-6 text-[#4a2e18]">
                            <button onClick={handleAccountClick} className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold transition-colors bg-transparent border-none hover:text-[#8c0a15]">
                                <BiUser className="text-lg" /> <span>{token ? "Account" : "Login"}</span>
                            </button>

                            <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold transition-colors relative hover:text-[#8c0a15]">
                                <BiHeart className="text-lg" /> <span>Wishlist</span>
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{wishlistCount}</span>
                                )}
                            </Link>

                            <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold transition-colors hover:text-[#8c0a15]">
                                <BiShoppingBag className="text-xl" />
                                <span className="hidden sm:inline">Cart</span>
                                {cartTotalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">{cartTotalItems}</span>
                                )}
                            </Link>

                            {token && (
                                <button onClick={handleLogout} className="hidden sm:inline-block text-xs bg-red-700 text-white px-3 py-1 rounded font-semibold hover:bg-red-800 transition">Logout</button>
                            )}

                            <button className="md:hidden text-2xl focus:outline-none text-[#4a2e18]" onClick={() => setIsMobileMenuOpen(true)}><BiMenu /></button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-2 shadow-inner border border-amber-900/20">
                        <input type="text" placeholder="Search for products..." className="w-full border-none outline-none text-sm bg-transparent text-gray-800 placeholder-gray-500" />
                        <button className="text-lg text-gray-500"><BiSearch /></button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex justify-center border-t border-amber-900/20 mt-3 pt-3">
                        <ul className="flex flex-wrap justify-center items-center gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
                            <li>
                                <Link to="/" className={`transition-colors pb-1 ${location.pathname === "/" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/pandit-booking" className={`transition-colors pb-1 ${location.pathname === "/pandit-booking" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>Pandit Booking</Link>
                            </li>
                            <li>
                                <Link to="/pooja-booking" className={`transition-colors pb-1 ${location.pathname === "/pooja-booking" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>Pooja Booking</Link>
                            </li>

                            {/* E-Shop Dropdown */}
                            <li 
                                className="relative group cursor-pointer py-1"
                                onMouseEnter={() => setIsShopDropdownOpen(true)}
                                onMouseLeave={() => setIsShopDropdownOpen(false)}
                            >
                                <div className={`flex items-center gap-1 hover:text-[#8c0a15] ${eShopCategories.some(c => location.pathname === c.href) ? "text-[#8c0a15]" : ""}`}>
                                    <span>E-Shop</span>
                                    <BiChevronDown className={`transform transition-transform duration-200 ${isShopDropdownOpen ? "rotate-180" : ""}`} />
                                </div>

                                {isShopDropdownOpen && (
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100 text-gray-800">
                                        {eShopCategories.map((cat) => (
                                            <Link 
                                                key={cat.label} 
                                                to={cat.href}
                                                className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${location.pathname === cat.href ? "bg-orange-50 text-[#8c0a15]" : "text-gray-700 hover:bg-orange-50 hover:text-[#8c0a15]"}`}
                                            >
                                                {cat.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>

                            <li>
                                <Link to="/Chadhawa" className={`transition-colors pb-1 ${location.pathname === "/chadhawa" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>Chadhawa</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className={`transition-colors pb-1 ${location.pathname === "/blogs" ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" : "hover:text-[#8c0a15]"}`}>Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
                            <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
                            <button className="text-gray-600 text-2xl focus:outline-none hover:text-black" onClick={() => setIsMobileMenuOpen(false)}><BiX /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
                            <ul className="space-y-3 font-semibold">
                                <li>
                                    <Link to="/" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/pandit-booking" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/pandit-booking" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Pandit Booking</Link>
                                </li>
                                <li>
                                    <Link to="/pooja-booking" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/pooja-booking" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Pooja Booking</Link>
                                </li>

                                {/* Mobile E-Shop Dropdown */}
                                <li className="border-b border-gray-100 pb-2">
                                    <div 
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                                    >
                                        <span className={eShopCategories.some(c => location.pathname === c.href) ? "text-[#8c0a15]" : ""}>E-Shop</span>
                                        <BiChevronDown className={`transform transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`} />
                                    </div>
                                    {isMobileShopOpen && (
                                        <ul className="pl-4 mt-2 space-y-2 border-l-2 border-orange-200">
                                            {eShopCategories.map((cat) => (
                                                <li key={cat.label}>
                                                    <Link 
                                                        to={cat.href} 
                                                        className={`block text-xs py-1 ${location.pathname === cat.href ? "text-[#8c0a15] font-bold" : "text-gray-600"}`}
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
                                    <Link to="/chadhawa" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/chadhawa" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Chadhawa</Link>
                                </li>
                                <li>
                                    <Link to="/blogs" className={`block border-b border-gray-100 pb-2 ${location.pathname === "/blogs" ? "text-[#8c0a15]" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                                </li>
                            </ul>

                            <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
                                <button onClick={(e) => { setIsMobileMenuOpen(false); handleAccountClick(e); }} className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15] w-full text-left bg-transparent border-none">
                                    <BiUser className="text-xl text-[#8c0a15]" /> <span>{token ? "Account" : "Login / Register"}</span>
                                </button>
                                <Link to="/wishlist" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="flex items-center gap-3"><BiHeart className="text-xl text-[#8c0a15]" /> Wishlist</div>
                                    {wishlistCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{wishlistCount}</span>}
                                </Link>
                                <Link to="/cart" className="flex items-center justify-between cursor-pointer hover:text-[#8c0a15]" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="flex items-center gap-3"><BiShoppingBag className="text-xl text-[#8c0a15]" /> Cart</div>
                                    {cartTotalItems > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{cartTotalItems}</span>}
                                </Link>
                                {token && (
                                    <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="flex items-center gap-3 cursor-pointer text-red-600 hover:text-red-800 w-full text-left bg-transparent border-none pt-2"><span>Logout</span></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;