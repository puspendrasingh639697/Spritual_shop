import React, { useState, useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    FaCheckCircle,
    FaChevronDown,
    FaArrowLeft,
    FaLock,
    FaClock,
    FaCheck,
    FaUser,
    FaPhone,
    FaGift,
    FaPlus,
} from "react-icons/fa";
import { chadhawaList } from "./ChadhawaHomepage";
import coinsImg from "../../assets/TampleImage/coines.webp";


/* ================= SEVA / BHET DATA ================= */
const sevaList = [
    {
        id: 1,
        title: "Nandi Seva",
        subtitle: "Offer Nandi Seva for Good Health & Long Life",
        price: 251,
        oldPrice: null,
        badge: null,
        image: coinsImg,
    },
    {
        id: 2,
        title: "Shiva Ashtakam Path",
        subtitle: "Panditji will be chanting the Shiva Ashtakam for Good Health & Family Prosperity",
        price: 225,
        oldPrice: null,
        badge: "MOST OFFERED",
        image: coinsImg,
    },
    {
        id: 3,
        title: "Panchamrit Chadhawa",
        subtitle: "Offer Panchamrit Chadhawa for Getting Rid off Ill Health",
        price: 151,
        oldPrice: 301,
        badge: null,
        image: coinsImg,
    },
    {
        id: 4,
        title: "Aparajita Pushpa Daan",
        subtitle: "Offer Aparajita Pushpa for Good Health",
        price: 101,
        oldPrice: 175,
        badge: null,
        image: coinsImg,
    },
    {
        id: 5,
        title: "Bilwapatra Arpan",
        subtitle: "Offer Bilwapatra for Family Prosperity",
        price: 81,
        oldPrice: null,
        badge: null,
        image: coinsImg,
    },
    {
        id: 6,
        title: "Akand Mala Arpan",
        subtitle: "Offer Akand Mala for Financial Prosperity",
        price: 75,
        oldPrice: null,
        badge: null,
        image: coinsImg,
    },
];

/* ================= SEVA CARD (LEFT COLUMN) ================= */
function SevaCard({ item, isAdded, onAdd, onRemove }) {
    return (
        <div className="flex items-start gap-3 py-4 border-b border-amber-200/40 last:border-b-0">
            {/* Left Content */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-black leading-snug">
                    {item.title}
                </h4>
                <p className="text-xs text-black mt-1 leading-relaxed line-clamp-2">
                    {item.subtitle}
                </p>

                {/* Badge Row */}
                {item.badge && (
                    <div className="flex items-center gap-2 mt-2">
                        <span className="bg-amber-400 text-[#7a1c1c] text-[9px] font-bold px-2 py-0.5 rounded-sm">
                            {item.badge}
                        </span>
                    </div>
                )}

                {/* Price Row */}
                <div className="flex items-center gap-2 mt-1">
                    {item.oldPrice && (
                        <span className="text-xs text-red-500 line-through">
                            ₹{item.oldPrice}
                        </span>
                    )}
                    <span className="text-sm font-bold text-black">
                        ₹ {item.price}/-
                    </span>
                </div>
            </div>

            {/* Right Image */}
            <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden shadow-md">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Add / Added Button */}
            <div className="shrink-0 self-center">
                {isAdded ? (
                    <button
                        onClick={() => onRemove(item.id)}
                        className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-2 rounded-md shadow-md transition-all active:scale-95 whitespace-nowrap"
                    >
                        <FaCheck className="text-[10px]" /> Added
                    </button>
                ) : (
                    <button
                        onClick={() => onAdd(item)}
                        className="flex items-center gap-1 bg-white hover:bg-[#df972b] text-[#c27803] hover:text-white border-2 border-[#df972b] text-xs font-bold px-3 py-2 rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap"
                    >
                        <FaPlus className="text-[10px]" /> Add
                    </button>
                )}
            </div>
        </div>
    );
}

/* ================= RIGHT SUMMARY SEVA CARD ================= */
function SummarySevaCard({ item, isAdded, onAdd, onRemove }) {
    return (
        <div className="flex items-center gap-3 bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 p-3 shadow-sm">
            {/* Image */}
            <div className="shrink-0 w-14 h-14 rounded-md overflow-hidden border border-amber-200/60">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-black leading-snug line-clamp-2">
                    {item.title}
                </h5>
                <div className="flex items-center gap-1.5 mt-1">
                    {item.oldPrice && (
                        <span className="text-[10px] text-red-500 line-through">
                            ₹{item.oldPrice}
                        </span>
                    )}
                    <span className="text-xs font-bold text-black">
                        ₹{item.price}
                    </span>
                </div>
            </div>

            {/* Add / Added */}
            <div className="shrink-0">
                {isAdded ? (
                    <button
                        onClick={() => onRemove(item.id)}
                        className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap"
                    >
                        <FaCheck className="text-[9px]" /> Added
                    </button>
                ) : (
                    <button
                        onClick={() => onAdd(item)}
                        className="flex items-center gap-1 bg-white hover:bg-[#df972b] text-[#c27803] hover:text-white border-2 border-[#df972b] text-[10px] font-bold px-2.5 py-1.5 rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap"
                    >
                        <FaPlus className="text-[9px]" /> Add
                    </button>
                )}
            </div>
        </div>
    );
}

/* ================= MAIN PAGE ================= */
function ChadhawaBookingForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const chadhawa = chadhawaList.find((c) => c.id === Number(id));

    const [whatsappConfirmed, setWhatsappConfirmed] = useState(null);
    const [devoteeName, setDevoteeName] = useState("");
    const [gotra, setGotra] = useState("");
    const [showGotraList, setShowGotraList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [addedSevas, setAddedSevas] = useState([]);

    const gotraRef = useRef(null);

    const gotraList = [
        "Kashyap",
        "Bharadwaj",
        "Gautam",
        "Vashishtha",
        "Vishvamitra",
        "Atri",
        "Jamadagni",
        "Agastya",
        "Bhrigu",
        "Angiras",
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (gotraRef.current && !gotraRef.current.contains(e.target)) {
                setShowGotraList(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!chadhawa) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
                <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Chadhawa Not Found
                    </h1>
                    <Link
                        to="/chadhawa"
                        className="inline-block bg-gradient-to-r from-[#df972b] to-[#c27803] text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        );
    }

    const price = chadhawa.price || 501;
    const discountedPrice = Math.round(price * 0.85); // 15% off
    const savings = price - discountedPrice;
    const discountPercent = Math.round((savings / price) * 100);

    // Add / remove seva
    const handleAddSeva = (seva) => {
        setAddedSevas((prev) => [...prev, seva]);
    };

    const handleRemoveSeva = (sevaId) => {
        setAddedSevas((prev) => prev.filter((s) => s.id !== sevaId));
    };

    const isSevaAdded = (sevaId) => addedSevas.some((s) => s.id === sevaId);

    const sevaTotal = addedSevas.reduce((sum, s) => sum + s.price, 0);
    const grandTotal = discountedPrice + sevaTotal;

    const handlePayDakshina = () => {
        if (!whatsappConfirmed) {
            alert("Please confirm WhatsApp number");
            return;
        }
        if (!devoteeName.trim() || !gotra.trim()) {
            alert("Please fill devotee details");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            navigate(`/chadhawa/${id}/payment`);
            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df]">
            {/* BACK BUTTON */}
            <div className="px-4 md:px-12 py-3 max-w-7xl mx-auto">
                <Link
                    to={`/chadhawa/${id}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#c27803] transition-all font-semibold group"
                >
                    <FaArrowLeft className="text-xs text-black group-hover:-translate-x-1 transition-transform" />
                    Back to Chadhawa Details
                </Link>
            </div>

            {/* STEPS BAR */}
        

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">

                    {/* ================= LEFT: FORM CARD ================= */}
                    <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md p-5 md:p-8">

                        {/* WhatsApp Confirm */}
                        <div className="pb-6 border-b border-amber-200/40">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
                                    <FaPhone className="text-white text-xs" />
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    Confirm WhatsApp Number
                                </h3>
                            </div>
                            <p className="text-sm text-black mb-5">
                                Is{" "}
                                <span className="font-bold text-black">
                                    +91 98708 87237
                                </span>{" "}
                                your WhatsApp number as well?
                            </p>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setWhatsappConfirmed(true)}
                                    className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 active:scale-95 ${
                                        whatsappConfirmed === true
                                            ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
                                            : "bg-white border-2 border-amber-200 text-gray-700 hover:border-[#df972b] hover:text-[#c27803]"
                                    }`}
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => setWhatsappConfirmed(false)}
                                    className={`px-7 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 active:scale-95 ${
                                        whatsappConfirmed === false
                                            ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white shadow-md"
                                            : "bg-white border-2 border-amber-200 text-gray-700 hover:border-[#df972b] hover:text-[#c27803]"
                                    }`}
                                >
                                    No
                                </button>
                            </div>
                        </div>

                        {/* Devotee Details */}
                        <div className="pt-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shadow-md shrink-0">
                                    <FaUser className="text-white text-xs" />
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-black">
                                    Enter Devotee Details
                                </h3>
                            </div>
                            <p className="text-sm text-black mb-6">
                                Chadhawa will be offered in these names &amp; gotra.
                                <br />
                                <span className="text-xs text-black">
                                    Add upto 1 members
                                </span>
                            </p>

                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                                        Devotee Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={devoteeName}
                                            onChange={(e) =>
                                                setDevoteeName(e.target.value)
                                            }
                                            placeholder="Enter name"
                                            className="w-full border-2 border-amber-200 rounded-md px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b] focus:shadow-md transition-all placeholder:text-gray-400 placeholder:font-normal"
                                        />
                                        {devoteeName.trim() && (
                                            <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
                                        )}
                                    </div>
                                </div>

                                {/* Gotra */}
                                <div ref={gotraRef}>
                                    <label className="block text-xs font-bold text-[#c27803] uppercase tracking-wide mb-2">
                                        Gotra (if known)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={gotra}
                                            onChange={(e) =>
                                                setGotra(e.target.value)
                                            }
                                            onFocus={() =>
                                                setShowGotraList(true)
                                            }
                                            placeholder="Enter gotra"
                                            className="w-full border-2 border-amber-200 rounded-lg px-4 py-3.5 pr-10 text-sm font-semibold text-[#7a1c1c] bg-white focus:outline-none focus:border-[#df972b] focus:shadow-md transition-all placeholder:text-gray-400 placeholder:font-normal"
                                        />
                                        {gotra.trim() ? (
                                            <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#df972b] text-base" />
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    setShowGotraList(!showGotraList)
                                                }
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c27803] transition-colors"
                                                type="button"
                                            >
                                                <FaChevronDown
                                                    className={`text-sm transition-transform ${
                                                        showGotraList
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {showGotraList && (
                                        <div className="relative">
                                            <div className="absolute top-2 left-0 right-0 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-56 overflow-y-auto z-30">
                                                {gotraList
                                                    .filter((g) =>
                                                        g.toLowerCase().includes(
                                                            gotra.toLowerCase()
                                                        )
                                                    )
                                                    .map((g) => (
                                                        <div
                                                            key={g}
                                                            onClick={() => {
                                                                setGotra(g);
                                                                setShowGotraList(false);
                                                            }}
                                                            className={`px-4 py-3 text-sm font-semibold cursor-pointer transition-all flex items-center justify-between ${
                                                                gotra === g
                                                                    ? "bg-gradient-to-r from-[#df972b] to-[#c27803] text-white"
                                                                    : "text-gray-700 hover:bg-amber-50 hover:text-[#c27803]"
                                                            }`}
                                                        >
                                                            {g}
                                                            {gotra === g && (
                                                                <FaCheck className="text-xs" />
                                                            )}
                                                        </div>
                                                    ))}
                                                {gotraList.filter((g) =>
                                                    g.toLowerCase().includes(
                                                        gotra.toLowerCase()
                                                    )
                                                ).length === 0 && (
                                                    <div className="px-4 py-3 text-sm text-gray-400 text-center">
                                                        No matching gotra
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 border border-amber-200/60 rounded-lg p-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center shrink-0">
                                <FaCheckCircle className="text-white text-sm" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-black">
                                    100% Authentic Chadhawa
                                </p>
                                <p className="text-[11px] text-black">
                                    Offered by verified temple priests
                                </p>
                            </div>
                        </div>

                        {/* ===== SEVA / BHET SECTION (LEFT COLUMN) ===== */}
                        <div className="mt-8">
                            <h3 className="text-base md:text-lg font-bold text-black mb-1">
                                Add Seva &amp; Bhet to your Chadhawa
                            </h3>
                            <p className="text-xs text-black mb-2">
                                Enhance your offering with these additional temple sevas.
                            </p>

                            <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] border border-amber-200/60  px-4 py-2">
                                {sevaList.map((item) => (
                                    <SevaCard
                                        key={item.id}
                                        item={item}
                                        isAdded={isSevaAdded(item.id)}
                                        onAdd={handleAddSeva}
                                        onRemove={handleRemoveSeva}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ================= RIGHT: ORDER SUMMARY ================= */}
                    <div className="lg:sticky lg:top-4 lg:self-start">
                        <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md border border-amber-200/60 shadow-md overflow-hidden">

                            {/* Chadhawa Info */}
                            <div className="p-5 flex items-start gap-3 border-b border-amber-200/40">
                                <img
                                    src={chadhawa.image}
                                    alt={chadhawa.title}
                                    className="w-16 h-16 rounded-lg object-cover shrink-0 shadow-md"
                                />
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold text-[#7a1c1c] leading-snug line-clamp-2">
                                        {chadhawa.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Chadhawa Offering
                                    </p>
                                    <div className="inline-flex items-center gap-1 mt-2 bg-gradient-to-r from-[#df972b] to-[#c27803] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                                        <FaClock className="text-[9px]" />
                                        Only 25 slots available
                                    </div>
                                </div>
                            </div>

                            {/* Dakshina Details */}
                            <div className="p-5 border-b border-amber-200/40">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#df972b] to-[#c27803] flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">
                                                ₹
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#7a1c1c] block">
                                                Total Dakshina
                                            </span>
                                            <span className="text-[10px] text-gray-400 line-through">
                                                ₹{price}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-[#7a1c1c]">
                                        ₹{discountedPrice}
                                    </span>
                                </div>

                                <div className="bg-white border border-green-200 rounded-lg px-3 py-2 flex items-center gap-2">
                                    <FaCheckCircle className="text-green-600 text-xs shrink-0" />
                                    <span className="text-xs text-green-700 font-bold">
                                        ₹{savings} saved ({discountPercent}% OFF)
                                    </span>
                                </div>
                            </div>

                            {/* ===== ADD SEVA & BHET (RIGHT SIDE) ===== */}
                            <div className="p-5 border-b border-amber-200/40">
                                <h3 className="text-sm font-bold text-[#7a1c1c] mb-1">
                                    Add Seva &amp; Bhet
                                </h3>
                                <p className="text-[10px] text-gray-500 mb-3">
                                    Enhance your offering with these sevas
                                </p>

                                <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                                    {sevaList.map((item) => (
                                        <SummarySevaCard
                                            key={item.id}
                                            item={item}
                                            isAdded={isSevaAdded(item.id)}
                                            onAdd={handleAddSeva}
                                            onRemove={handleRemoveSeva}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Added Sevas Summary + Grand Total */}
                            {addedSevas.length > 0 && (
                                <div className="p-5 border-b border-amber-200/40">
                                    <p className="text-[11px] font-bold text-[#c27803] uppercase tracking-wide mb-2">
                                        Added Sevas ({addedSevas.length})
                                    </p>
                                    <div className="space-y-1.5">
                                        {addedSevas.map((s) => (
                                            <div
                                                key={s.id}
                                                className="flex items-center justify-between text-xs"
                                            >
                                                <span className="text-gray-700 truncate pr-2">
                                                    {s.title}
                                                </span>
                                                <span className="font-semibold text-[#7a1c1c] shrink-0">
                                                    ₹{s.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-amber-200/40 flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#7a1c1c]">
                                            Grand Total
                                        </span>
                                        <span className="text-lg font-bold text-[#7a1c1c]">
                                            ₹{grandTotal}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Pay Button */}
                            <div className="p-5">
                                <button
                                    onClick={handlePayDakshina}
                                    disabled={isLoading}
                                    className={`w-full py-2 rounded-md text-base font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                                        isLoading
                                            ? "bg-gray-300 text-gray-600 cursor-wait"
                                            : "bg-gradient-to-r from-[#df972b] to-[#c27803] hover:from-[#c27803] hover:to-[#c27803] text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                    }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-3 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FaGift className="text-sm" />
                                            Pay &amp; Offer Chadhawa
                                        </>
                                    )}
                                </button>

                                <div className="flex items-center justify-center gap-1.5 mt-4">
                                    <FaLock className="text-[10px] text-black" />
                                    <p className="text-[10px] text-black font-semibold">
                                        100% Secure Payment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChadhawaBookingForm;