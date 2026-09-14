import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaCheck, FaGift } from "react-icons/fa";

function ChadhawaPackageModal({ isOpen, onClose, chadhawa }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();

    if (!isOpen) return null;

    /* ================= CHADHAWA ITEMS ================= */
    const chadhawaItems = [
        {
            id: "chunri",
            title: "Sacred Chunri",
            subtitle: "Red silk chunri for deity",
            price: 251,
            icon: "🧣",
            popular: true,
        },
        {
            id: "prasad",
            title: "Temple Prasad",
            subtitle: "Blessed bhog prasad",
            price: 351,
            icon: "🍯",
            popular: true,
        },
        {
            id: "flowers",
            title: "Fresh Flowers",
            subtitle: "Marigold & lotus garland",
            price: 151,
            icon: "🌺",
        },
        {
            id: "coconut",
            title: "Sacred Coconut",
            subtitle: "Whole coconut for offering",
            price: 101,
            icon: "🥥",
        },
        {
            id: "sweets",
            title: "Mishri & Sweets",
            subtitle: "Traditional prasad sweets",
            price: 201,
            icon: "🍬",
        },
        {
            id: "bilva",
            title: "Bilva Leaves",
            subtitle: "Sacred leaves for Lord Shiva",
            price: 121,
            icon: "🍃",
        },
    ];

    /* ================= TOGGLE SELECTION ================= */
    const toggleItem = (item) => {
        const isSelected = selectedItems.some((i) => i.id === item.id);
        if (isSelected) {
            setSelectedItems(
                selectedItems.filter((i) => i.id !== item.id)
            );
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const isItemSelected = (id) =>
        selectedItems.some((i) => i.id === id);

    /* ================= TOTAL ================= */
    const totalAmount = selectedItems.reduce(
        (sum, item) => sum + item.price,
        0
    );

    /* ================= BOOK NOW ================= */
    const handleBookNow = () => {
        if (selectedItems.length === 0) {
            alert("Please select at least one item to offer");
            return;
        }

        const bookingData = {
            chadhawaId: chadhawa.id,
            chadhawaTitle: chadhawa.title,
            items: selectedItems,
            totalAmount,
        };

        console.log("🎉 Chadhawa Booking:", bookingData);
        navigate(`/chadhawa/${chadhawa.id}/form`);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white w-full md:max-w-3xl md:rounded-md rounded-t-3xl max-h-[92vh] overflow-hidden flex flex-col animate-slide-up shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 shrink-0">
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <FaGift className="text-white text-sm" />
                            <h2 className="md:text-lg font-bold text-white">
                                Select Chadhawa Items
                            </h2>
                        </div>
                        <p className="text-xs text-white/90 mt-0.5 truncate">
                            {chadhawa?.title}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition shrink-0 ml-2"
                    >
                        <FaTimes className="text-white text-sm" />
                    </button>
                </div>

                {/* SELECTION INFO */}
                <div className="px-4 md:px-6 py-3 bg-amber-50 border-b border-amber-200/50">
                    <p className="text-xs text-black font-semibold">
                        Choose one or more items to offer at the temple.
                        <span className="text-red-800">
                            {" "}
                            ({selectedItems.length} selected)
                        </span>
                    </p>
                </div>

                {/* ITEMS GRID */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {chadhawaItems.map((item) => {
                            const isSelected = isItemSelected(item.id);
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => toggleItem(item)}
                                    className={`relative rounded-xl p-4 cursor-pointer transition-all duration-200 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] ${isSelected
                                        ? "border-1 border-[#c27803] shadow-lg scale-[1.02]"
                                        : "border-1 border-amber-200 hover:border-[#df972b]"
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {item.popular && (
                                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-3 py-0.5 rounded-md uppercase tracking-wider whitespace-nowrap shadow-md">
                                            Popular
                                        </span>
                                    )}

                                    {/* Selected Check */}
                                    {isSelected && (
                                        <div className="absolute top-3 right-3 w-5 h-5 rounded-md bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md">
                                            <FaCheck className="text-white text-[10px]" />
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className="text-3xl mb-2">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm font-bold text-black mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[12px] text-black mb-3 line-clamp-2">
                                        {item.subtitle}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl font-bold text-black">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="bg-gradient-to-r from-[#df972b] to-[#c27803] p-4 md:p-5 flex items-center justify-between gap-3 shrink-0">
                    <div className="min-w-0">
                        <p className="text-xs text-black">
                            Total Amount ({selectedItems.length} items)
                        </p>
                        <p className="text-xl font-bold text-black">
                            ₹{totalAmount}
                        </p>
                    </div>
                    <button
                        onClick={handleBookNow}
                        disabled={selectedItems.length === 0}
                        className={`px-6 md:px-8 py-3 rounded-md font-bold text-sm transition-all whitespace-nowrap ${selectedItems.length > 0
                            ? "bg-white text-[#7a1c1c] hover:bg-[#df972b]] hover:text-black shadow-md cursor-pointer active:scale-[0.98]"
                            : "bg-white/40 text-white/70 cursor-not-allowed"
                            }`}
                    >
                        Offer Chadhawa
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes slide-up {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default ChadhawaPackageModal;