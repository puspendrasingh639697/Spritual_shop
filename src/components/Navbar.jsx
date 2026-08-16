
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   BiSearch, 
//   BiUser, 
//   BiHeart, 
//   BiShoppingBag, 
//   BiMenu, 
//   BiX 
// } from "react-icons/bi";
// import headerBg from "../assets/haderbener.png";

// const navLinks = [
//     { label: "Puja Samagri", href: "/puja-samagri" },
//     { label: "Puja Kits", href: "/puja-kits" },
//     { label: "Yantra", href: "/yantra" },
//     { label: "Rudraksha", href: "/rudraksha" },
//     { label: "Gemstones", href: "/gemstones" },
//     { label: "Idols", href: "/idols" },
//     { label: "Remedies", href: "/remedies" },
//     { label: "Festivals", href: "/festivals" },
//     { label: "Blogs", href: "/blogs" },
// ];

// function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const location = useLocation(); // Yeh pata lagane ke liye ki abhi kaunsa page active hai
    
//     const messages = [
//         "✨ 100% Cashback available upto ₹500",
//         "🕉️ Free delivery on orders over ₹299",
//         "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
//     ];
    
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const cartItems = []; // Agar aapka cart context hai toh aap yahan use kar sakte hain

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === messages.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 3000);

//         return () => clearInterval(timer);
//     }, [messages.length]);

//     return (
//         <header className="w-full relative shadow-md font-sans">
//             {/* Top Announcement Bar - Scrolling Right to Left */}
//             <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
//                 <div className="whitespace-nowrap animate-scroll">
//                     {messages.map((msg, index) => (
//                         <span key={index} className="mx-8">
//                             {msg}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Main Header Container with Background Image */}
//             <div 
//                 className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative"
//                 style={{ backgroundImage: `url(${headerBg})` }}
//             >
//                 <div className="relative z-10">
//                     {/* Top Header Row: Logo | Search | Account | Wishlist | Cart */}
//                     <div className="flex items-center justify-between gap-4">
//                         {/* Logo */}
//                         <Link to="/" className="flex items-center">
//                             <img 
//                                 src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" 
//                                 alt="Puja Hetu Logo" 
//                                 className="h-10 md:h-12 object-contain"
//                             />
//                         </Link>

//                         {/* Search Bar */}
//                         <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
//                             <input 
//                                 type="text" 
//                                 placeholder="Search for products..." 
//                                 className="w-full border-none outline-none text-sm bg-transparent"
//                             />
//                             <button className="text-gray-600 hover:text-black text-lg">
//                                 <BiSearch />
//                             </button>
//                         </div>

//                         {/* Top Icons & Mobile Menu Button */}
//                         <div className="flex items-center gap-5">
//                             <Link to="/account" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
//                                 <BiUser className="text-lg" /> <span>Account</span>
//                             </Link>
//                             <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
//                                 <BiHeart className="text-lg" /> <span>Wishlist</span>
//                             </Link>
//                             <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
//                                 <BiShoppingBag className="text-xl" />
//                                 <span className="hidden sm:inline">Cart</span>
//                                 {cartItems.length > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
//                                         {cartItems.length}
//                                     </span>
//                                 )}
//                             </Link>

//                             {/* Hamburger Menu Toggle for Mobile */}
//                             <button 
//                                 className="md:hidden text-[#4a2e18] text-2xl focus:outline-none"
//                                 onClick={() => setIsMobileMenuOpen(true)}
//                             >
//                                 <BiMenu />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Mobile Search Bar */}
//                     <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
//                         <input 
//                             type="text" 
//                             placeholder="Search for products..." 
//                             className="w-full border-none outline-none text-sm bg-transparent"
//                         />
//                         <button className="text-gray-600 text-lg">
//                             <BiSearch />
//                         </button>
//                     </div>

//                     {/* Desktop Navigation Row */}
//                     <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
//                         <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
//                             {navLinks.map((link) => {
//                                 const isActive = location.pathname === link.href;
//                                 return (
//                                     <li key={link.label}>
//                                         <Link 
//                                             to={link.href} 
//                                             className={`transition-colors pb-1 ${
//                                                 isActive 
//                                                     ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" 
//                                                     : "hover:text-amber-900"
//                                             }`}
//                                         >
//                                             {link.label}
//                                         </Link>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Mobile Slide-over Drawer */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0 z-50 flex">
//                     <div 
//                         className="fixed inset-0 bg-black/60 transition-opacity" 
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     ></div>

//                     <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
//                         <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
//                             <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
//                             <button 
//                                 className="text-gray-600 text-2xl focus:outline-none hover:text-black"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 <BiX />
//                             </button>
//                         </div>

//                         <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
//                             <ul className="space-y-3 font-semibold">
//                                 {navLinks.main}
//                                 {navLinks.map((link) => {
//                                     const isActive = location.pathname === link.href;
//                                     return (
//                                         <li key={link.label}>
//                                             <Link 
//                                                 to={link.href} 
//                                                 className={`block border-b border-gray-100 pb-2 transition-colors ${
//                                                     isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"
//                                                 }`}
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {link.label}
//                                             </Link>
//                                         </li>
//                                     );
//                                 })}
//                             </ul>

//                             <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
//                                 <Link 
//                                     to="/account" 
//                                     className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15]"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     <BiUser className="text-xl text-[#8c0a15]" /> Account
//                                 </Link>
//                                 <Link 
//                                     to="/wishlist" 
//                                     className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15]"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     <BiHeart className="text-xl text-[#8c0a15]" /> Wishlist
//                                 </Link>
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
import { Link, useLocation } from "react-router-dom";
import { 
  BiSearch, 
  BiUser, 
  BiHeart, 
  BiShoppingBag, 
  BiMenu, 
  BiX 
} from "react-icons/bi";
import headerBg from "../assets/haderbener.png";

const navLinks = [
    { label: "Puja Samagri", href: "/puja-samagri" },
    { label: "Puja Kits", href: "/puja-kits" },
    { label: "Yantra", href: "/yantra" },
    { label: "Rudraksha", href: "/rudraksha" },
    { label: "Gemstones", href: "/gemstones" },
    { label: "Idols", href: "/idols" },
    { label: "Remedies", href: "/remedies" },
    { label: "Festivals", href: "/festivals" },
    { label: "Blogs", href: "/blogs" },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); // Yeh pata lagane ke liye ki abhi kaunsa page active hai
    
    const messages = [
        "✨ 100% Cashback available upto ₹500",
        "🕉️ Free delivery on orders over ₹299",
        "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const cartItems = []; // Agar aapka cart context hai toh aap yahan use kar sakte hain

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === messages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [messages.length]);

    return (
        <header className="w-full relative shadow-md font-sans">
            {/* Top Announcement Bar - Scrolling Right to Left */}
            <div className="w-full bg-[#8c0a15] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
                <div className="whitespace-nowrap animate-scroll">
                    {messages.map((msg, index) => (
                        <span key={index} className="mx-8">
                            {msg}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Header Container with Background Image */}
            <div 
                className="w-full bg-cover bg-center px-4 md:px-10 py-5 text-[#4a2e18] relative"
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <div className="relative z-10">
                    {/* Top Header Row: Logo | Search | Account | Wishlist | Cart */}
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img 
                                src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" 
                                alt="Puja Hetu Logo" 
                                className="h-10 md:h-12 object-contain"
                            />
                        </Link>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
                            <input 
                                type="text" 
                                placeholder="Search for products..." 
                                className="w-full border-none outline-none text-sm bg-transparent"
                            />
                            <button className="text-gray-600 hover:text-black text-lg">
                                <BiSearch />
                            </button>
                        </div>

                        {/* Top Icons & Mobile Menu Button */}
                        <div className="flex items-center gap-5">
                            <Link to="/account" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <BiUser className="text-lg" /> <span>Account</span>
                            </Link>
                            <Link to="/wishlist" className="hidden sm:flex items-center gap-1.5 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <BiHeart className="text-lg" /> <span>Wishlist</span>
                            </Link>
                            <Link to="/cart" className="relative flex items-center gap-1 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <BiShoppingBag className="text-xl" />
                                <span className="hidden sm:inline">Cart</span>
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>

                            {/* Hamburger Menu Toggle for Mobile */}
                            <button 
                                className="md:hidden text-[#4a2e18] text-2xl focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <BiMenu />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="flex md:hidden mt-3 items-center bg-white rounded-md px-3 py-1.5 text-black shadow-inner border border-amber-600">
                        <input 
                            type="text" 
                            placeholder="Search for products..." 
                            className="w-full border-none outline-none text-sm bg-transparent"
                        />
                        <button className="text-gray-600 text-lg">
                            <BiSearch />
                        </button>
                    </div>

                    {/* Desktop Navigation Row */}
                    <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
                        <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <li key={link.label}>
                                        <Link 
                                            to={link.href} 
                                            className={`transition-colors pb-1 ${
                                                isActive 
                                                    ? "text-[#8c0a15] border-b-2 border-[#8c0a15]" 
                                                    : "hover:text-amber-900"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile Slide-over Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div 
                        className="fixed inset-0 bg-black/60 transition-opacity" 
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    <div className="relative w-4/5 max-w-sm bg-white text-gray-800 h-full shadow-xl flex flex-col z-10">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
                            <span className="font-bold text-lg text-[#8c0a15]">Menu</span>
                            <button 
                                className="text-gray-600 text-2xl focus:outline-none hover:text-black"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <BiX />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
                            <ul className="space-y-3 font-semibold">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.href;
                                    return (
                                        <li key={link.label}>
                                            <Link 
                                                to={link.href} 
                                                className={`block border-b border-gray-100 pb-2 transition-colors ${
                                                    isActive ? "text-[#8c0a15] font-bold" : "hover:text-[#8c0a15]"
                                                }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
                                <Link 
                                    to="/account" 
                                    className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <BiUser className="text-xl text-[#8c0a15]" /> Account
                                </Link>
                                <Link 
                                    to="/wishlist" 
                                    className="flex items-center gap-3 cursor-pointer hover:text-[#8c0a15]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <BiHeart className="text-xl text-[#8c0a15]" /> Wishlist
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;