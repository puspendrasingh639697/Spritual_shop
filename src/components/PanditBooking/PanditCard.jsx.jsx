import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaBriefcase, FaLanguage, FaTools } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";

const PanditCard = ({ pandit, setBookingData }) => {
  const navigate = useNavigate();

  const defaultPanditData = {
    pandit: {
      _id: "1",
      slug: "acharya-ram-sharma",
      name: "Acharya Ram Sharma",
      Skills: ["Vedic Rituals", "Havan"],
      experience: 12,
      languages: ["Hindi", "Sanskrit"],
      image: {
        imageurl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      },
    },
    matchedSlots: [{ _id: "s1", from: "08:00 AM", to: "10:00 AM" }],
    nonMatchedSlots: [],
  };

  const currentData = pandit || defaultPanditData;
  const pInfo = currentData?.pandit || {};

  const handleSelectPandit = (data) => {
    const panditId = data?.pandit?._id || pInfo._id;
    if (setBookingData) {
      setBookingData((prev) => ({
        ...(prev || {}),
        PanditId: panditId,
      }));
    }
    // Click hote hi user active package selection page par redirect ho jayega
    setTimeout(() => {
      navigate(`/pandit-package/${panditId}`);
    }, 100);
  };

  const skillsList = Array.isArray(pInfo.Skills) ? pInfo.Skills : ["Vedic Rituals"];
  const languagesList = Array.isArray(pInfo.languages) ? pInfo.languages : ["Hindi"];
  const matched = Array.isArray(currentData.matchedSlots) ? currentData.matchedSlots : [];
  const nonMatched = Array.isArray(currentData.nonMatchedSlots) ? currentData.nonMatchedSlots : [];
  const allSlots = [...matched, ...nonMatched];

  return (
    <div className="flex flex-col bg-white shadow-md hover:shadow-xl border border-red-100 rounded-2xl p-4 transition-all duration-300 w-full h-full justify-between group">
      <div>
        {/* Top Section: Image & Basic Info */}
        <div className="flex items-center gap-3 border-b border-red-50 pb-3">
          <img
            src={pInfo?.image?.imageurl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"}
            alt="Pandit"
            className="w-16 h-16 object-cover rounded-full border-2 border-red-500 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="overflow-hidden">
            <h2 className="text-sm font-bold text-gray-900 truncate" title={pInfo?.name}>
              {pInfo?.name || "Acharya Ram Sharma"}
            </h2>
            <div className="flex items-center gap-1 text-amber-500 text-xs mt-0.5">
              <FaStar className="w-3 h-3" />
              <span className="font-bold text-gray-700">4.8</span>
              <span className="text-gray-400 text-[10px]">(50+)</span>
            </div>
            <p className="text-[11px] text-red-600 font-semibold truncate mt-0.5">
              {skillsList.join(", ")}
            </p>
          </div>
        </div>

        {/* Details List */}
        <div className="py-2.5 space-y-1.5 text-xs text-gray-600">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-gray-500">
              <FaBriefcase className="text-red-500 text-[11px]" /> Exp:
            </span>
            <span className="font-semibold text-gray-800">{pInfo?.experience || 10}+ Years</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-gray-500">
              <FaLanguage className="text-red-500 text-[11px]" /> Lang:
            </span>
            <span className="font-semibold text-gray-800 truncate max-w-[110px]">{languagesList.join(", ")}</span>
          </div>
        </div>

        {/* Slot Box */}
        <div className="bg-red-50/60 border border-red-100 rounded-lg p-2 mt-1">
          <span className="text-[10px] font-bold text-red-700 uppercase tracking-wide block mb-0.5">
            Next Slot:
          </span>
          {allSlots.length > 0 ? (
            <p className="text-xs font-semibold text-gray-800">
              {allSlots[0].from} - {allSlots[0].to}
            </p>
          ) : (
            <p className="text-[11px] text-gray-400 italic">No slots available</p>
          )}
        </div>
      </div>

      {/* Book Button */}
      <div className="mt-3 pt-2">
        <button
          className="w-full bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 py-2 shadow-sm transition-all cursor-pointer active:scale-95"
          onClick={() => handleSelectPandit(currentData)}
        >
          <BsBookmarkCheckFill className="text-xs" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};

export default PanditCard;