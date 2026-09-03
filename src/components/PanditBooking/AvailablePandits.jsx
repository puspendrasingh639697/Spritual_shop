import React from "react";
import PanditCard from "./PanditCard.jsx";

const AvailablePandits = ({ panditsRef, availPandits = [] }) => {
  const staticPandits = [
    {
      _id: "1",
      pandit: {
        _id: "1",
        slug: "acharya-ram-sharma",
        name: "Acharya Ram Sharma",
        Skills: ["Vedic Rituals", "Havan"],
        experience: 15,
        languages: ["Hindi", "Sanskrit"],
        image: { imageurl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s1", from: "08:00 AM", to: "10:00 AM" }],
      nonMatchedSlots: []
    },
    {
      _id: "2",
      pandit: {
        _id: "2",
        slug: "pandit-manish-shastri",
        name: "Pandit Manish Shastri",
        Skills: ["Satyanarayan", "Griha Pravesh"],
        experience: 12,
        languages: ["Hindi", "English"],
        image: { imageurl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s3", from: "09:00 AM", to: "11:00 AM" }],
      nonMatchedSlots: []
    },
    {
      _id: "3",
      pandit: {
        _id: "3",
        slug: "acharya-vashisht-ji",
        name: "Acharya Vashisht Ji",
        Skills: ["Maha Mrityunjaya", "Rudrabhishek"],
        experience: 14,
        languages: ["Hindi", "Sanskrit"],
        image: { imageurl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s4", from: "07:00 AM", to: "09:00 AM" }],
      nonMatchedSlots: []
    },
    {
      _id: "4",
      pandit: {
        _id: "4",
        slug: "pandit-om-prakash",
        name: "Pandit Om Prakash Dwivedi",
        Skills: ["Vivah Sanskar", "Engagement"],
        experience: 18,
        languages: ["Hindi", "Bhojpuri"],
        image: { imageurl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s5", from: "10:00 AM", to: "12:00 PM" }],
      nonMatchedSlots: []
    },
    {
      _id: "5",
      pandit: {
        _id: "5",
        slug: "acharya-suresh-joshi",
        name: "Acharya Suresh Joshi",
        Skills: ["Navagraha Shanti", "Havan"],
        experience: 20,
        languages: ["Hindi", "Gujarati"],
        image: { imageurl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s6", from: "02:00 PM", to: "04:00 PM" }],
      nonMatchedSlots: []
    },
    {
      _id: "6",
      pandit: {
        _id: "6",
        slug: "pandit-rajesh-sharma",
        name: "Pandit Rajesh Sharma",
        Skills: ["Bhumi Pujan", "Vastu"],
        experience: 9,
        languages: ["Hindi", "English"],
        image: { imageurl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s7", from: "05:00 PM", to: "07:00 PM" }],
      nonMatchedSlots: []
    },
    {
      _id: "7",
      pandit: {
        _id: "7",
        slug: "acharya-jayant-shastri",
        name: "Acharya Jayant Shastri",
        Skills: ["Durga Saptashati", "Yagna"],
        experience: 16,
        languages: ["Hindi", "Marathi"],
        image: { imageurl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s8", from: "08:00 AM", to: "11:00 AM" }],
      nonMatchedSlots: []
    },
    {
      _id: "8",
      pandit: {
        _id: "8",
        slug: "pandit-brijesh-pandey",
        name: "Pandit Brijesh Pandey",
        Skills: ["Mundan", "Daily Puja"],
        experience: 11,
        languages: ["Hindi"],
        image: { imageurl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" }
      },
      matchedSlots: [{ _id: "s9", from: "03:00 PM", to: "05:00 PM" }],
      nonMatchedSlots: []
    }
  ];

  const displayPandits = availPandits && availPandits.length > 0 ? availPandits : staticPandits;

  return (
    <section ref={panditsRef} id="availablePandits" className="max-w-[90rem] mx-auto px-4 py-16 bg-[#fffaf5]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="bg-red-800 text-white border  text-xs  px-4 py-1.5   tracking-wider inline-block mb-3 shadow-sm">
          Verified Experts
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Available Pandits For Your Puja
        </h2>
        
      </div>

      {/* Pandits 4-Column Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {displayPandits.map((item, index) => (
          <div key={item._id || index} className="w-full">
            <PanditCard pandit={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailablePandits;