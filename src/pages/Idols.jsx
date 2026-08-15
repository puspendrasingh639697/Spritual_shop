import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiShoppingBag, BiFilter, BiCheckCircle } from "react-icons/bi";

// Images import (Top Banner & Idols 1 to 5)
import topBanner from "../assets/idolsbenner.webp";
import idol1 from "../assets/Idols1.png";
import idol2 from "../assets/Idols2.png";
import idol3 from "../assets/Idols3.png";
import idol4 from "../assets/Idols4.png";
import idol5 from "../assets/Idols5.png";

// Sample Idols Products Data using Idols1 to Idols5
const idolsData = [
  {
    id: 1,
    name: "Divine Brass Ganesha Idol for Prosperity",
    category: "Ganesha",
    price: 1499,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 142,
    image: idol1,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Auspicious Laxmi Ganesh Murti for Home Temple",
    category: "Laxmi Ganesha",
    price: 2499,
    originalPrice: 3500,
    rating: 4.8,
    reviews: 98,
    image: idol2,
    tag: "Blessed",
  },
  {
    id: 3,
    name: "Pure Brass Lord Krishna Playing Flute Idol",
    category: "Krishna",
    price: 1899,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 115,
    image: idol3,
    tag: "Popular",
  },
  {
    id: 4,
    name: "Handcrafted Hanuman Ji Murti for Strength & Protection",
    category: "Hanuman",
    price: 1299,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 87,
    image: idol4,
    tag: "Energized",
  },
  {
    id: 5,
    name: "Divine Shivling with Sheshnag Brass Idol",
    category: "Shiva",
    price: 2999,
    originalPrice: 4200,
    rating: 5.0,
    reviews: 160,
    image: idol5,
    tag: "Divine Choice",
  },
];

const categories = ["All", "Ganesha", "Laxmi Ganesha", "Krishna", "Hanuman", "Shiva"];

export default function Idols() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Filter products based on category
  const filteredProducts = selectedCategory === "All" 
    ? idolsData 
    : idolsData.filter(item => item.category === selectedCategory);

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
    <div className="w-full bg-[#fff3df]  min-h-screen font-sans pb-16">
      
      {/* Top Banner Section (Using idolsbenner.webp) */}
      <div className="w-full bg-[#fff3df] shadow-md relative pt-2 pb-2">
        <div className="max-w-8xl mx-auto px-4">
          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
            <img 
              src={topBanner} 
              alt="Divine Idols Banner" 
              className="w-full h-auto max-h-[380px] md:max-h-[450px] object-cover mx-auto"
            />
            
          </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className="bg-[#8c0a15] text-white py-3 px-4 shadow-inner mt-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Premium Quality Brass
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Handcrafted by Expert Artisans
          </div>
          <div className="flex items-center gap-2">
            <BiCheckCircle className="text-amber-400 text-lg" /> Energized for Puja
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        
        {/* Category Filters Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-gray-300 pb-4">
          <div className="flex items-center gap-2 text-[#8c0a15] font-bold text-lg">
            <BiFilter className="text-2xl" /> Filter by Deity:
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-200/60 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Image & Tags Container */}
                <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
                      <span className="text-gray-400 font-normal">({product.reviews})</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-gray-800 text-sm line-clamp-2 mb-2 group-hover:text-[#8c0a15] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div>
                    {/* Pricing */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-base font-bold text-[#8c0a15]">₹{product.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-[#8c0a15] hover:bg-[#6b080f] text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow transition-colors"
                    >
                      <BiShoppingBag className="text-base" /> Add to Cart
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
            <p className="text-lg text-gray-600 font-serif">No idols found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}