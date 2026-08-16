import React from "react";
import { BiHeart } from "react-icons/bi";

export default function WishlistTab({ wishlist, setWishlist, onNavigateCart }) {
  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-stone-200">
        <h3 className="text-base font-serif font-bold text-[#4a2e18]">Sacred Wishlist</h3>
        <p className="text-xs text-stone-500">Products you have saved for later.</p>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-stone-50 border border-stone-200 rounded-sm p-4 flex gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white border border-stone-200 rounded-sm flex items-center justify-center shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#4a2e18]">{item.title}</h4>
                  <span className="text-xs font-bold text-[#8b3a2b]">Rs. {item.price}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => {
                    if (onNavigateCart) onNavigateCart();
                    else alert("Item added to cart!");
                  }}
                  className="bg-[#8c0a15] hover:bg-[#321e10] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-sm cursor-pointer"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-stone-400 hover:text-red-600 text-xs text-center cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 space-y-2">
          <BiHeart className="text-4xl text-stone-300 mx-auto" />
          <p className="text-xs text-stone-500">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
}