import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

/* ================= IMAGE IMPORTS ================= */
import pojaKit2 from "../../assets/pojakit_2.jpg";
import pojaKit8 from "../../assets/pojakit_8.jpg";
import pujaSamagri from "../../assets/Puja _Samagri.png";

/* ================= PUJA DATA ================= */
const pujaList = [
    {
        id: 1,
        title: "Shani Sade Sati Peeda Shanti Mahapuja",
        description: "Seek blessings from most revered Shani shrine. Relief from Sade Sati Dhaiya.",
        location: "Kokilavan, Kosi Kalan, Mathura",
        badge: "Supreme Shani Pilgrimage",
        image: pojaKit2,
        price: 1100,
        pujaDate: "2026-09-20T10:00:00",
        path: "/pooja-booking/1",
    },
    {
        id: 2,
        title: "Bhu Varaha Swamy Homa to Remove Obstacles",
        description: "Only remedy to land related problems. Special pooja for divine blessings.",
        location: "Sri Bhu Varaha Swamy Temple, Tirumala",
        badge: "Divine Grace",
        image: pojaKit8,
        price: 2100,
        pujaDate: "2026-09-18T08:00:00",
        path: "/pooja-booking/2",
    },
    {
        id: 3,
        title: "Vighnaharta Ganesh Panchamrit Abhishek",
        description: "Special puja at Ganesha's birthplace to remove obstacles and receive blessings.",
        location: "Siddhivinayak Temple, Mumbai",
        badge: "Ganesh Chaturthi",
        image: pujaSamagri,
        price: 1500,
        pujaDate: "2026-09-15T06:00:00",
        path: "/pooja-booking/3",
    },
    {
        id: 4,
        title: "Maha Rudrabhishek at Kashi Vishwanath",
        description: "Sacred Abhishek with milk, honey, and Gangajal for Lord Shiva's blessings.",
        location: "Kashi Vishwanath Temple, Varanasi",
        badge: "Mahashivratri Special",
        image: pojaKit2,
        price: 3100,
        pujaDate: "2026-09-22T05:00:00",
        path: "/pooja-booking/4",
    },
    {
        id: 5,
        title: "Kaal Sarp Dosh Nivaran Puja",
        description: "Comprehensive ritual to pacify planetary afflictions and bring peace.",
        location: "Trimbakeshwar Temple, Nashik",
        badge: "Dosha Nivaran",
        image: pojaKit8,
        price: 2500,
        pujaDate: "2026-09-25T07:00:00",
        path: "/pooja-booking/5",
    },
    {
        id: 6,
        title: "Navgrah Shanti Puja for Prosperity",
        description: "Worship all nine planets to remove negative effects and invite abundance.",
        location: "Shani Shingnapur, Maharashtra",
        badge: "Navgrah Shanti",
        image: pujaSamagri,
        price: 1800,
        pujaDate: "2026-09-28T09:00:00",
        path: "/pooja-booking/6",
    },
];

/* ================= COUNTDOWN HOOK ================= */
function useCountdown(targetDate) {
    const getTimeLeft = (target) => {
        const diff = new Date(target) - new Date();
        if (diff <= 0)
            return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
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

/* ================= COUNTDOWN DISPLAY ================= */
function CountdownTimer({ targetDate }) {
    const { days, hours, minutes, seconds, expired } = useCountdown(targetDate);

    if (expired) {
        return (
            <span className="text-[10px] font-bold text-red-600">
                ⏰ Puja Started
            </span>
        );
    }

    return (
        <div className="flex items-center gap-1 text-[10px] font-bold text-[#7a1c1c]">
            <FaClock className="text-[#df972b] text-[10px]" />
            <span className="bg-[#fff7ed] px-1.5 py-0.5 rounded border border-amber-200">
                {days}d
            </span>
            <span className="bg-[#fff7ed] px-1.5 py-0.5 rounded border border-amber-200">
                {String(hours).padStart(2, "0")}h
            </span>
            <span className="bg-[#fff7ed] px-1.5 py-0.5 rounded border border-amber-200">
                {String(minutes).padStart(2, "0")}m
            </span>
            <span className="bg-[#fff7ed] px-1.5 py-0.5 rounded border border-amber-200">
                {String(seconds).padStart(2, "0")}s
            </span>
        </div>
    );
}

/* ================= MAIN SECTION ================= */
function UpcomingPujasSection() {
    return (
        <section className="w-full bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] py-2 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-center mb-6 gap-3 pb-3">
                    <div className="flex flex-col items-center justify-center text-center w-full space-y-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#7a1c1c] tracking-tight font-extrabold relative inline-block pb-3">
                            Upcoming Online Pujas
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#df972b] rounded-full"></span>
                        </h2>
                        <p className="text-black text-sm md:text-base tracking-wide">
                            Book sacred rituals performed by expert Vedic pandits for divine blessings.
                        </p>
                    </div>

                   
                </div>

                {/* 6 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pujaList.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className="group bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] rounded-md overflow-hidden border border-white/10 hover:border-[#df972b]/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative"
                        >
                            {/* Image Banner */}
                            <div className="relative w-full h-56 overflow-hidden bg-black">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f0a] via-transparent to-black/40"></div>

                                {/* Badge */}
                                <span className="absolute top-3 left-3 bg-[#df972b] text-[#120704] text-[10px] font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                                    {item.badge}
                                </span>

                                {/* Countdown Timer */}
                                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-md">
                                    <CountdownTimer targetDate={item.pujaDate} />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-black sm:text-lg font-bold line-clamp-2 leading-snug group-hover:text-[#df972b] transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-black text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Location + Price */}
                                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-black text-[11px] font-medium">
                                            <FaMapMarkerAlt className="text-[#df972b] shrink-0 text-xs" />
                                            <span className="line-clamp-1">{item.location}</span>
                                        </div>
                                        <span className="font-bold text-[#7a1c1c] text-sm">
                                            ₹{item.price}
                                        </span>
                                    </div>

                                    {/* Book Button */}
                                    <div className="w-full bg-gradient-to-r from-[#df972b] to-[#c27803] group-hover:from-[#7a1c1c] group-hover:to-[#5c1414] text-white py-2.5 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                                        <span>Book Pooja Now</span>
                                        <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UpcomingPujasSection;