import React, { useRef, useState } from "react";
import PanditBanner from "./PanditBanner";
import AvailablePandits from "./AvailablePandits";
import StatisticsSection from "./PanditsStats";
import UpcomingEvents from "./UpcomingEvents";
import Testimonials from "./Testimonials";

// import StatisticsSection  from "../components/BookaPandit/PanditsStats";
// import UpcomingEvents from "../components/BookaPandit/UpcomingEvents";
// import Testimonials from "../components/BookaPandit/Testimonials";

function PanditBookingPage() {
    const panditsRef = useRef(null);
    const [availPandits, setAvailPandits] = useState([]);

    return (
        <div className="min-h-screen bg-[#fdfbf7] font-sans">
            {/* Top Search & Hero Section */}
            <PanditBanner 
                panditsRef={panditsRef} 
                setAvailPandits={setAvailPandits} 
            />

            {/* Stats Counter Section */}
            <StatisticsSection  />

            {/* Available Pandits Grid */}
            <div ref={panditsRef} className="py-8">
                <AvailablePandits pandits={availPandits} />
            </div>

            {/* Upcoming Pujas & Events */}
            <UpcomingEvents />

            {/* Reviews / Testimonials */}
            <Testimonials />
        </div>
    );
}

export default PanditBookingPage;