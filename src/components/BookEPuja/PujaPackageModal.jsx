import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

function PujaPackageModal({ isOpen, onClose, puja }) {
    const [selectedPackage, setSelectedPackage] = useState(null);

    if (!isOpen) return null;

    const packages = [
        {
            id: "single",
            title: "Single",
            subtitle: "For 1 Person Sankalp",
            price: puja?.price || 2100,
            originalPrice: 2940,
            persons: 1,
            features: [
                "Personalized Sankalp",
                "Puja Video Shared",
                "Live Updates on WhatsApp",
                "Prasad Delivery",
            ],
        },
        {
            id: "couple",
            title: "Couple",
            subtitle: "For Couple Sankalp",
            price: 3780,
            originalPrice: 5250,
            persons: 2,
            popular: true,
            features: [
                "Personalized Sankalp for 2",
                "Puja Video Shared",
                "Live Updates on WhatsApp",
                "Prasad Delivery",
                "Priority Support",
            ],
        },
        {
            id: "family",
            title: "Family",
            subtitle: "For Whole Family",
            price: 6300,
            originalPrice: 9450,
            persons: 6,
            features: [
                "Personalized Sankalp for 6",
                "Puja Video Shared",
                "Live Updates on WhatsApp",
                "Prasad Delivery",
                "Priority Support",
                "Special Pandit Call",
            ],
        },
    ];

    const handleBookNow = () => {
        if (!selectedPackage) {
            alert("Please select a package first");
            return;
        }

        const bookingData = {
            pujaId: puja?.id,
            pujaTitle: puja?.title,
            packageId: selectedPackage.id,
            packageTitle: selectedPackage.title,
            price: selectedPackage.price,
            persons: selectedPackage.persons,
        };

        console.log("🎉 BOOK NOW CLICKED:", bookingData);
        alert(
            `✅ Booking Confirmed!\n\n` +
            `Puja: ${bookingData.pujaTitle}\n` +
            `Package: ${bookingData.packageTitle}\n` +
            `Price: ₹${bookingData.price}\n` +
            `Persons: ${bookingData.persons}`
        );

        onClose();
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px"
            }}
            onClick={onClose}
        >
            {/* MAIN MODAL BOX - Pure Inline Red Background */}
            <div
                style={{
                    backgroundColor: "#dc2626 !important",
                    background: "#dc2626",
                    width: "100%",
                    maxWidth: "750px",
                    borderRadius: "16px",
                    maxHheight: "92vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* HEADER */}
                <div 
                    style={{
                        backgroundColor: "#b91c1c",
                        borderBottom: "1px solid #ef4444",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "between"
                    }}
                >
                    <div style={{ flex: 1 }}>
                        
                        <p style={{ color: "#fca5a5", fontSize: "12px", margin: "4px 0 0 0" }}>
                            {puja?.title || "Bhu Varaha Swami Homa to Remove Obstacles"}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            backgroundColor: "#991b1b",
                            color: "#ffffff",
                            border: "none",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* PACKAGES CONTAINER */}
                <div 
                    style={{
                        backgroundColor: "#dc2626",
                        background: "#dc2626",
                        flex: 1,
                        overflowY: "auto",
                        padding: "20px"
                    }}
                >
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                        {packages.map((pkg) => {
                            const isSelected = selectedPackage?.id === pkg.id;
                            return (
                                <div
                                    key={pkg.id}
                                    onClick={() => setSelectedPackage(pkg)}
                                    style={{
                                        backgroundColor: isSelected ? "#991b1b" : "#b91c1c",
                                        border: isSelected ? "2px solid #ffffff" : "2px solid #ef4444",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        cursor: "pointer",
                                        position: "relative",
                                        color: "#ffffff",
                                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    {/* Popular Badge */}
                                    {pkg.popular && (
                                        <span style={{
                                            position: "absolute",
                                            top: "-10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            backgroundColor: "#f59e0b",
                                            color: "#ffffff",
                                            fontSize: "10px",
                                            fontWeight: "bold",
                                            padding: "2px 10px",
                                            borderRadius: "9999px",
                                            textTransform: "uppercase"
                                        }}>
                                            Popular
                                        </span>
                                    )}

                                    {/* Selected Check */}
                                    {isSelected && (
                                        <div style={{
                                            position: "absolute",
                                            top: "12px",
                                            right: "12px",
                                            width: "20px",
                                            height: "20px",
                                            borderRadius: "50%",
                                            backgroundColor: "#ffffff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <FaCheck style={{ color: "#dc2626", fontSize: "10px" }} />
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 4px 0", color: "#ffffff" }}>
                                        {pkg.title}
                                    </h3>
                                    <p style={{ fontSize: "12px", color: "#fca5a5", margin: "0 0 12px 0" }}>
                                        {pkg.subtitle}
                                    </p>

                                    {/* Price */}
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                                        <span style={{ fontSize: "22px", fontWeight: "bold", color: "#ffffff" }}>
                                            ₹{pkg.price}
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#fca5a5", textDecoration: "line-through" }}>
                                            ₹{pkg.originalPrice}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: "#ffffff" }}>
                                                <span style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                    marginTop: "2px"
                                                }}>
                                                    <FaCheck style={{ color: "#ffffff", fontSize: "8px" }} />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* FOOTER */}
                <div 
                    style={{
                        backgroundColor: "#b91c1c",
                        borderTop: "1px solid #ef4444",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <div>
                        <p style={{ fontSize: "12px", color: "#fca5a5", margin: 0 }}>Total Amount</p>
                        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff", margin: 0 }}>
                            ₹{selectedPackage?.price || 0}
                        </p>
                    </div>
                    <button
                        onClick={handleBookNow}
                        disabled={!selectedPackage}
                        style={{
                            backgroundColor: selectedPackage ? "#ffffff" : "#7f1d1d",
                            color: selectedPackage ? "#dc2626" : "#fca5a5",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            cursor: selectedPackage ? "pointer" : "not-allowed",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PujaPackageModal;