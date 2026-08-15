import { useState, useEffect } from "react";
import headerBg from "../assets/haderbener.png";

const navLinks = [
    { label: "Puja Samagri", href: "#" },
    { label: "Puja Kits", href: "#" },
    { label: "Yantra", href: "#" },
    { label: "Rudraksha", href: "#" },
    { label: "Gemstones", href: "#" },
    { label: "Idols", href: "#" },
    { label: "Remedies", href: "#" },
    { label: "Festivals", href: "#" },
    { label: "Blogs", href: "#" },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const messages = [
        "✨ 100% Cashback available upto ₹500",
        "🕉️ Free delivery on orders over ₹299",
        "🙏 Har Ghar Rudraksha - Claim Free 5 Mukhi",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const cartItems = [];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === messages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [messages.length]);

    return (
        <header className="w-full relative shadow-md">
            {/* Top Announcement Bar - Scrolling Right to Left */}
            <div className="w-full bg-[#5a1215] text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide overflow-hidden shadow-sm relative z-50">
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
                        <div className="flex items-center">
                            <img 
                                src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60" 
                                alt="Puja Hetu Logo" 
                                className="h-10 md:h-12 object-contain"
                            />
                        </div>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center bg-white rounded-md px-3 py-1.5 w-72 lg:w-96 text-black shadow-inner border-2 border-amber-600/50">
                            <input 
                                type="text" 
                                placeholder="Search for products..." 
                                className="w-full border-none outline-none text-sm bg-transparent"
                            />
                            <button className="text-gray-600 hover:text-black">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>

                        {/* Top Icons & Mobile Menu Button */}
                        <div className="flex items-center gap-5">
                            <div className="hidden sm:flex items-center gap-2 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <i className="fas fa-user"></i> <span>Account</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <i className="fas fa-heart"></i> <span>Wishlist</span>
                            </div>
                            <div className="relative flex items-center cursor-pointer text-sm font-bold hover:text-amber-800 transition-colors">
                                <i className="fas fa-shopping-bag text-lg"></i>
                                <span className="hidden sm:inline ml-1">Cart</span>
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                                        {cartItems.length}
                                    </span>
                                )}
                            </div>

                            {/* Hamburger Menu Toggle for Mobile */}
                            <button 
                                className="md:hidden text-[#4a2e18] text-xl focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <i className="fas fa-bars"></i>
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
                        <button className="text-gray-600">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    {/* Desktop Navigation Row */}
                    <nav className="hidden md:flex justify-center border-t-2 border-[#4a2e18]/30 mt-4 pt-3">
                        <ul className="flex flex-wrap justify-center gap-6 lg:gap-8 font-bold text-sm tracking-wide text-[#4a2e18]">
                            {navLinks.map((link) => (
                                <li key={link.label} className="cursor-pointer hover:text-amber-900 transition-colors">
                                    {link.label}
                                </li>
                            ))}
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
                            <span className="font-bold text-lg text-orange-600">Menu</span>
                            <button 
                                className="text-gray-600 text-xl focus:outline-none hover:text-black"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
                            <ul className="space-y-3 font-semibold">
                                {navLinks.map((link) => (
                                    <li 
                                        key={link.label} 
                                        className="border-b border-gray-100 pb-2 cursor-pointer hover:text-orange-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-gray-200 space-y-3 font-semibold text-gray-700">
                                <div className="flex items-center gap-3 cursor-pointer hover:text-orange-600">
                                    <i className="fas fa-user text-orange-600"></i> Account
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer hover:text-orange-600">
                                    <i className="fas fa-heart text-orange-600"></i> Wishlist
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;