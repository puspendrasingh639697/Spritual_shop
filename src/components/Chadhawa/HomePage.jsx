import React from "react";
import { useNavigate } from "react-router-dom";
import BigTempleCarousel from "./components/BookEPuja/BigTempleCarousel";
import ChadhawaCarousel from "./components/BookEPuja/ChadhawaCarousel";
import PopularChadhavaSection from "./components/BookEPuja/PopularChadhavaSection";
import PujaChadhawaCarousel from "./PujaChadhawaCarousel";

function HomePage() {
    const navigate = useNavigate();

    const handleChadhawaClick = (slide) => {
        if (slide?.id) {
            navigate(`/chadhawa/${slide.id}`);
        }
    };

    return (
        <div>
            <PujaChadhawaCarousel />
            <ChadhawaCarousel onOfferClick={handleChadhawaClick} />
            <PopularChadhavaSection />
        </div>
    );
}

export default HomePage;