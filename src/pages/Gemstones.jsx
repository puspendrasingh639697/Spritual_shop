import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiShoppingBag, BiFilter, BiCheckCircle } from "react-icons/bi";

// Images import (Top banner: gemstones9.webp, Bottom banner: gemstones8.webp)
import topBanner from "../assets/gemstones9.webp";
import bottomBanner from "../assets/gemstones8.webp";
import gem1 from "../assets/gemstones1.jpg";
import gem2 from "../assets/gemstones2.jpg";
import gem3 from "../assets/gemstones3.jpeg";
import gem4 from "../assets/gemstones4.jpeg";
import gem5 from "../assets/gemstones5.png";
import gem6 from "../assets/gemstones6.png";
import gem7 from "../assets/gemstones7.jpg";

// Sample Gemstones Products Data
const gemstonesData = [
  {
    id: 1,
    name: "Certified Natural Blue Sapphire (Neelam)",
    category: "Sapphire",
    price: 15499,
    originalPrice: 22000,
    rating: 4.8,
    reviews: 124,
    image: gem1,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Natural Royal Ruby (Manik) Gemstone",
    category: "Ruby",
    price: 12800,
    originalPrice: 18000,
    rating: 4.7,
    reviews: 98,
    image: gem2,
    tag: "Energized",
  },
  {
    id: 3,
    name: "Emperor Emerald (Panna) Stone",
    category: "Emerald",
    price: 11200,
    originalPrice: 15999,
    rating: 4.9,
    reviews: 156,
    image: gem3,
    tag: "Rare",
  },
  {
    id: 4,
    name: "Natural Yellow Sapphire (Pukhraj)",
    category: "Sapphire",
    price: 14500,
    originalPrice: 19999,
    rating: 4.6,
    reviews: 82,
    image: gem4,
    tag: "Popular",
  },
  {
    id: 5,
    name: "Original Red Coral (Moonga) Gemstone",
    category: "Coral",
    price: 4500,
    originalPrice: 6500,
    rating: 4.5,
    reviews: 64,
    image: gem5,
    tag: "Lab Certified",
  },
  {
    id: 6,
    name: "Natural Hessonite (Gomed) Stone",
    category: "Hessonite",
    price: 3800,
    originalPrice: 5500,
    rating: 4.4,
    reviews: 45,
    image: gem6,
    tag: "Authentic",
  },
  {
    id: 7,
    name: "Cat's Eye (Lehsunia) Precious Gem",
    category: "Cats Eye",
    price: 6200,
    originalPrice: 8999,
    rating: 4.7,
    reviews: 53,
    image: gem7,
    tag: "Astrological",
  },
];

const categories = ["All", "Sapphire", "Ruby", "Emerald", "Coral", "Hessonite", "Cats Eye"];

export default function Gemstones() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Filter products based on category
  const filteredProducts = selectedCategory === "All" 
    ? gemstonesData 
    : gemstonesData.filter(item => item.category === selectedCategory);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart successfully! 🛒`);
  };

  return (
    <div className=" bg-[#fff3df] w-full  min-h-screen  pb-16">
      
      {/* Top Banner Section (Using gemstones9.webp) */}
      <div className="bg-[#fff3df] w-full  shadow-md relative pt-1 pb-2">
        <div className="max-w-8xl mx-auto px-4">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
            <img 
              src={topBanner} 
              alt="Gemstones Top Banner" 
              className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-center text-center px-4">
             
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> 100% Original & Certified
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Energized by Vedic Priests
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Free Lab Certificate Included
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
        {/* Category Filters Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
          <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
            <BiFilter className="text-2xl" /> Filter by Category:
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#8c0a15] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div 
                key={product.id}
                className="bg-[#fff3df] rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Image & Tags Container */}
                <div className="relative overflow-hidden bg-gray-100 h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Tag Badge */}
                  <span className="absolute top-3 left-3 bg-[#8c0a15] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {product.tag}
                  </span>

                  {/* Wishlist Button */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition-transform"
                  >
                    <BiHeart className={isWishlisted ? "text-red-600 fill-red-600" : "text-gray-500"} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-1">
                      <span>⭐ {product.rating}</span>
                      <span className="text-gray-400 font-normal">({product.reviews} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div>
                    {/* Pricing */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-[#8c0a15]">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                    >
                      <BiShoppingBag className="text-lg" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State Check */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 font-serif">No gemstones found in this category.</p>
          </div>
        )}

      </div>

      {/* Bottom Banner Section (Using gemstones8.webp) */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 mt-16">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black">
          <img 
            src={bottomBanner} 
            alt="Gemstones Bottom Banner" 
            className="w-full h-[220px] md:h-[300px] object-cover opacity-90"
          />
          
        </div>
      </div>

    </div>
  );
}