// import React from "react";
// import PopularChadhavaSection from "./ChadhawaHomepage";
// import AllChadhavasSection from "./AllChadhavasSection";
// import RecentChadhavaPhotos from "./RecentChadhavaData";
// // import Navbar from "../components/Navbar";
// // import ChadhawaHero from "../components/ChadhawaHero"; // Jo pehla hero code diya tha
// // import PopularChadhavaSection from "../components/PopularChadhavaSection"; // Popular section wala code
// // import AllChadhavasSection from "../components/AllChadhavasSection"; // All chadhavas wala code

// function Chadhawa() {
//     return (
//         <div className="bg-[#fcf8f2] min-h-screen">
    
//             <div className="pt-20"> {/* Navbar ke fixed hone par content chup na ho isliye padding */}
//                 {/* <ChadhawaHero /> */}
//                 <PopularChadhavaSection />
//                 <AllChadhavasSection />
//                 <RecentChadhavaPhotos/>
//             </div>
//         </div>
//     );
// }

// export default Chadhawa;



import React from "react";
import PopularChadhavaSection from "./ChadhawaHomepage";
import AllChadhavasSection from "./AllChadhavasSection";
import RecentChadhavaPhotos from "./RecentChadhavaData";
import PujaChadhawaCarousel from "./PujaChadhawaCarousel";

function Chadhawa() {
    return (
        <div className="bg-gradient-to-r from-white via-[#fff7ed] to-[#fff3df] min-h-screen">
            <div className="pt-4">
                <PujaChadhawaCarousel />
                <PopularChadhavaSection />
                <AllChadhavasSection />
                <RecentChadhavaPhotos />
            </div>
        </div>
    );
}

export default Chadhawa;