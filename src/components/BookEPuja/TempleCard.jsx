import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa"; // Agar ye path error de toh 'react-icons/fa' use karein

function TempleCard({ obj }) {
  const navigate = useNavigate();
  const placeholderImageUrl = "https://placehold.co/600x400/FFD700/000000?text=Astrology+Puja";

  return (
    <div className="w-full h-full flex flex-col">
      <div className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden bg-white group">
        
        {/* Top Image & Badge Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
          <img
            src={obj?.img?.[0]?.imageurl || placeholderImageUrl}
            alt={obj?.name || "Astrology Puja Image"}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImageUrl;
            }}
          />
          
          {/* Top Badge */}
          {obj?.badge && (
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">
              {obj.badge}
            </div>
          )}

          {/* Active Live Indicator Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-700 tracking-wider">LIVE</span>
          </div>

          {/* Overlay Title on Image */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="font-extrabold text-sm md:text-base leading-tight line-clamp-2 drop-shadow-md">
              {obj?.name}
            </h3>
          </div>
        </div>

        {/* Card Content details */}
        <div className="p-4 flex flex-col flex-grow justify-between bg-white">
          <div>
            {/* Subtitle / Benefit Tag */}
            {obj?.subtitle && (
              <p className="text-xs font-semibold text-rose-600 mb-1">
                {obj.subtitle}
              </p>
            )}
            
            {/* Location / Temple Name */}
            <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 mt-1 truncate">
              <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
              <span className="truncate">{obj?.place}</span>
            </p>

            {/* Date / Occasion */}
            {obj?.date && (
              <p className="text-xs text-gray-700 font-medium flex items-center gap-1.5 mt-1">
                <FaCalendarAlt className="text-gray-400 flex-shrink-0" />
                <span>{obj?.date}</span>
              </p>
            )}
          </div>

          {/* Bottom Footer: Devotees Count & Book Button */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
              <FaUsers className="text-gray-400" />
              <span>{obj?.devotees || "1.1k+ Devotees"}</span>
            </span>

            <button
              onClick={() => navigate(`/epooja-details/${obj?._id}`)}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Book Puja
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TempleCard;