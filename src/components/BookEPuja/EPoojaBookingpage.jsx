import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
    FaCalendarAlt,
    FaHeart,
    FaShare,
    FaPhone,
    FaWhatsapp,
    FaStar,
    FaChevronRight,
} from "react-icons/fa";

/* ================= PUJA DATA ================= */
const pujaList = [
    {
        id: 1,
        title: "Shani Sade Sati Peeda Shanti Mahapuja",
        description:
            "Seek blessings from most revered Shani shrine. Relief from Sade Sati Dhaiya.",
        location: "Kokilavan, Kosi Kalan, Mathura",
        temple: "Private Temple",
        badge: "Supreme Shani Pilgrimage",
        image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?q=80&w=1200",
        price: 1100,
        pujaDate: "2026-09-20T10:00:00",
        muhuratDate: "2026-09-20T10:00:00",
        ratings: "3.58L+",
        conducted: "19.68L+",
        avgRating: "4.9/5",
    },
    {
        id: 2,
        title:
            "BhuVaraha Homa to remove obstacles related to land, house and property",
        description:
            "Only remedy to land related problems. Special pooja for divine blessings.",
        location: "Sri Bhu Varaha Swamy Temple, Tirumala",
        temple: "Private Temple",
        badge: "Only Remedy to Land Related Problems",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
        price: 816,
        pujaDate: "2026-09-13T08:00:00",
        muhuratDate: "2026-09-13T08:00:00",
        ratings: "3.58L+",
        conducted: "19.68L+",
        avgRating: "4.9/5",
    },
    {
        id: 3,
        title: "Vighnaharta Ganesh Panchamrit Abhishek",
        description:
            "Special puja at Ganesha's birthplace to remove obstacles and receive blessings.",
        location: "Siddhivinayak Temple, Mumbai",
        temple: "Siddhivinayak Temple",
        badge: "Ganesh Chaturthi",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",
        price: 1500,
        pujaDate: "2026-09-15T06:00:00",
        muhuratDate: "2026-09-15T06:00:00",
        ratings: "2.10L+",
        conducted: "12.50L+",
        avgRating: "4.8/5",
    },
    {
        id: 4,
        title: "Maha Rudrabhishek at Kashi Vishwanath",
        description:
            "Sacred Abhishek with milk, honey, and Gangajal for Lord Shiva's blessings.",
        location: "Kashi Vishwanath Temple, Varanasi",
        temple: "Kashi Vishwanath",
        badge: "Mahashivratri Special",
        image: "https://images.unsplash.com/photo-1621570279613-376259020697?q=80&w=1200",
        price: 3100,
        pujaDate: "2026-09-22T05:00:00",
        muhuratDate: "2026-09-22T05:00:00",
        ratings: "4.20L+",
        conducted: "25.30L+",
        avgRating: "4.9/5",
    },
    {
        id: 5,
        title: "Kaal Sarp Dosh Nivaran Puja",
        description:
            "Comprehensive ritual to pacify planetary afflictions and bring peace.",
        location: "Trimbakeshwar Temple, Nashik",
        temple: "Trimbakeshwar Temple",
        badge: "Dosha Nivaran",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200",
        price: 2500,
        pujaDate: "2026-09-25T07:00:00",
        muhuratDate: "2026-09-25T07:00:00",
        ratings: "1.90L+",
        conducted: "10.25L+",
        avgRating: "4.7/5",
    },
    {
        id: 6,
        title: "Navgrah Shanti Puja for Prosperity",
        description:
            "Worship all nine planets to remove negative effects and invite abundance.",
        location: "Shani Shingnapur, Maharashtra",
        temple: "Shani Shingnapur",
        badge: "Navgrah Shanti",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
        price: 1800,
        pujaDate: "2026-09-28T09:00:00",
        muhuratDate: "2026-09-28T09:00:00",
        ratings: "2.80L+",
        conducted: "15.40L+",
        avgRating: "4.8/5",
    },
];

/* ================= COUNTDOWN HOOK ================= */
function useCountdown(targetDate) {
    const getTimeLeft = (target) => {
        const diff = new Date(target) - new Date();
        if (diff <= 0)
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                expired: true,
            };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            expired: false,
        };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}

/* ================= MUHURAT BOX ================= */
function MuhuratBox({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-[#fdf2f0] border border-[#7a1c1c]/20 text-[#7a1c1c] font-bold text-lg md:text-xl rounded-lg w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                {value}
            </div>
            <div className="text-[9px] font-bold tracking-widest text-gray-600 uppercase mt-1">
                {label}
            </div>
        </div>
    );
}

/* ================= MAIN PAGE ================= */
function EPoojaBookingpage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [wishlisted, setWishlisted] = useState(false);

    const puja = pujaList.find((p) => p.id === Number(id));

    const { days, hours, minutes, seconds } = useCountdown(
        puja?.muhuratDate || new Date()
    );

    if (!puja) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Puja Not Found
                    </h1>
                    <Link
                        to="/pooja-booking"
                        className="inline-block bg-[#7a1c1c] text-white px-6 py-2 rounded-md"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        );
    }

    const pujaDate = new Date(puja.pujaDate);
    const formattedDate = pujaDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* ================= LEFT: IMAGE + STATS ================= */}
                    <div>
                        {/* Image Card */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
                            <img
                                src={puja.image}
                                alt={puja.title}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#7a1c1c]"></span>
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="text-center">
                                    <div className="text-base md:text-lg font-bold text-gray-900">
                                        {puja.ratings}
                                    </div>
                                    <div className="text-[11px] text-gray-500">
                                        ratings
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-base md:text-lg font-bold text-gray-900">
                                        {puja.conducted}
                                    </div>
                                    <div className="text-[11px] text-gray-500">
                                        pujas conducted
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="flex items-center gap-1 text-base md:text-lg font-bold text-gray-900">
                                        {puja.avgRating}
                                        <FaStar className="text-amber-400 text-sm" />
                                    </div>
                                    <div className="text-[11px] text-gray-500">
                                        Average ratings
                                    </div>
                                </div>
                            </div>

                            {/* Wishlist + Share */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setWishlisted(!wishlisted)}
                                    className={`flex items-center gap-2 border-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                                        wishlisted
                                            ? "border-red-500 bg-red-50 text-red-600"
                                            : "border-gray-300 text-gray-700 hover:border-[#7a1c1c] hover:text-[#7a1c1c]"
                                    }`}
                                >
                                    <FaHeart
                                        className={
                                            wishlisted
                                                ? "text-red-500"
                                                : "text-gray-600"
                                        }
                                    />
                                    Wishlist
                                </button>

                                <button className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 hover:border-[#7a1c1c] hover:text-[#7a1c1c] transition-all cursor-pointer">
                                    <FaShare className="text-gray-600" />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT: DETAILS ================= */}
                    <div className="flex flex-col">

                        {/* Badge Line */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-[#7a1c1c] text-xs">✻</span>
                            <span className="text-[11px] font-bold tracking-[2px] text-[#7a1c1c] uppercase text-center">
                                {puja.badge}
                            </span>
                            <span className="text-[#7a1c1c] text-xs">✻</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#7a1c1c] leading-tight text-center md:text-left mb-6">
                            {puja.title}
                        </h1>

                        {/* Info Box */}
                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden mb-6">
                            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M12 3L4 9h16L12 3zM6 9v9M18 9v9M4 18h16v2H4v-2zM9 18v-5M15 18v-5" />
                                    </svg>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-semibold text-gray-900 text-sm">
                                        {puja.temple}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {puja.temple}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 px-5 py-4">
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <FaCalendarAlt className="w-5 h-5 text-gray-700" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-semibold text-gray-900 text-sm">
                                        {formattedDate}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Auspicious Muhurat
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Muhurat Countdown */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                            <div>
                                <div className="text-[11px] font-bold tracking-[1.5px] text-gray-700 uppercase mb-1">
                                    Muhurat Ends In
                                </div>
                                <div className="text-sm text-gray-500">
                                    Reserve your sankalp
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <MuhuratBox value={days} label="DAYS" />
                                <span className="text-[#7a1c1c] font-bold text-xl">
                                    :
                                </span>
                                <MuhuratBox
                                    value={String(hours).padStart(2, "0")}
                                    label="HOURS"
                                />
                                <span className="text-[#7a1c1c] font-bold text-xl">
                                    :
                                </span>
                                <MuhuratBox
                                    value={String(minutes).padStart(2, "0")}
                                    label="MIN"
                                />
                                <span className="text-[#7a1c1c] font-bold text-xl">
                                    :
                                </span>
                                <MuhuratBox
                                    value={String(seconds).padStart(2, "0")}
                                    label="SEC"
                                />
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <button
                            onClick={() => alert(`Booking: ${puja.title}`)}
                            className="w-full bg-[#7a1c1c] hover:bg-[#5c1414] text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer mb-4"
                        >
                            <span className="text-2xl">₹{puja.price}</span>
                            <span className="w-px h-6 bg-white/40"></span>
                            <span className="flex items-center gap-2">
                                Book Now
                                <FaChevronRight className="text-sm" />
                            </span>
                        </button>

                        {/* WhatsApp + Call */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-3 rounded-xl text-sm transition-all cursor-pointer"
                            >
                                <FaWhatsapp className="text-lg" />
                                Book via WhatsApp
                            </a>

                            <a
                                href="tel:+919999999999"
                                className="flex items-center justify-center gap-2 border-2 border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white font-semibold py-3 rounded-xl text-sm transition-all cursor-pointer"
                            >
                                <FaPhone className="text-sm" />
                                Book via Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EPoojaBookingpage;