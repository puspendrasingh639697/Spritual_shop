// Local assets import
import image3 from "../assets/image3.jpg";
import imagesIcon from "../assets/images.png";
import pujaSamagriImg from "../assets/Puja _Samagri.png";
import pujaSamagri1Img from "../assets/Puja_Samagri1.png";
import rudrakshaImg from "../assets/Rudraksha7.webp";
import yantra1Img from "../assets/Yantra1.jpg";

export const shopCategories = [
  {
    id: 1,
    tag: "SACRED ESSENTIALS",
    vendor: "Pooja Hetu",
    title: "PUJA SAMAGRI",
    sku: "PS-SAMAGRI-001",
    stockStatus: "In Stock",
    price: "499.00",
    oldPrice: "899.00",
    isSoldOut: false,
    image: pujaSamagriImg,
    variants: [
      { id: "v1", name: "Standard Pack (250g)", price: "499.00", oldPrice: "899.00", sku: "PS-SAMAGRI-250" },
      { id: "v2", name: "Family Pack (500g)", price: "899.00", oldPrice: "1,499.00", sku: "PS-SAMAGRI-500" },
      { id: "v3", name: "Mega Pack (1kg)", price: "1,599.00", oldPrice: "2,599.00", sku: "PS-SAMAGRI-1000" }
    ],
    description: "A premium collection of essential puja items sourced from organic origins to ensure purity, positive energy, and spiritual harmony in your daily rituals.",
    specifications: [
      { label: "Material", value: "Natural Herbs & Dry Elements" },
      { label: "Quantity", value: "250g / 500g / 1kg" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "Organic", value: "Yes" }
    ],
    spiritualUse: "Essential for daily worship, havan, and sacred rituals. Using pure and natural samagri helps purify the atmosphere, removes negative energies, and invokes divine vibrations during prayers."
  },
  {
    id: 2,
    tag: "COMPLETE RITUALS",
    vendor: "Pooja Hetu",
    title: "PUJA KITS",
    sku: "PS-KIT-002",
    stockStatus: "In Stock",
    price: "999.00",
    oldPrice: "1,799.00",
    isSoldOut: false,
    image: pujaSamagri1Img,
    variants: [
      { id: "v1", name: "Standard Kit", price: "999.00", oldPrice: "1,799.00", sku: "PS-KIT-STD" },
      { id: "v2", name: "Deluxe Kit", price: "1,499.00", oldPrice: "2,499.00", sku: "PS-KIT-DLX" }
    ],
    description: "An all-in-one complete puja kit specially curated for festivals, Satyanarayan Katha, and regular home havans, ensuring you never miss any vital element.",
    specifications: [
      { label: "Kit Type", value: "Complete Ritual Kit" },
      { label: "Items Included", value: "Incense, Camphor, Kumkum, Haldi, Cotton Wicks, etc." },
      { label: "Usage", value: "Festivals & Daily Worship" },
      { label: "Packaging", value: "Box Packed" }
    ],
    spiritualUse: "Designed meticulously according to Vedic traditions for performing error-free rituals and festive pujas. It ensures complete spiritual fulfillment and brings divine blessings and harmony to the home."
  },
  {
    id: 3,
    tag: "DIVINE GEOMETRY",
    vendor: "Pooja Hetu",
    title: "YANTRA",
    sku: "PS-YANTRA-003",
    stockStatus: "In Stock",
    price: "7,500.00",
    oldPrice: "11,500.00",
    isSoldOut: false,
    image: yantra1Img,
    variants: [
      { id: "v1", name: "Copper (Small)", price: "7,500.00", oldPrice: "11,500.00", sku: "PS-YAN-COP-S" },
      { id: "v2", name: "Gold Plated (Large)", price: "12,000.00", oldPrice: "16,500.00", sku: "PS-YAN-GLD-L" }
    ],
    description: "Sacred geometric design engraved on high-grade metal to attract wealth, prosperity, and positive cosmic frequencies into your living or workspace.",
    specifications: [
      { label: "Material", value: "Pure Copper / Gold Plated" },
      { label: "Energized", value: "Yes (Pran Pratishthit)" },
      { label: "Placement", value: "North-East direction of house" },
      { label: "Weight", value: "150g - 300g" }
    ],
    spiritualUse: "Acts as a powerful cosmic conductor of energy. Regular worship of the yantra helps manifest abundance, spiritual awakening, and removes obstacles from personal and professional life."
  },
  {
    id: 4,
    tag: "COSMIC SOLUTIONS",
    vendor: "Pooja Hetu",
    title: "ASTROLOGY REMEDIES",
    sku: "PS-ASTRO-004",
    stockStatus: "In Stock",
    price: "1,200.00",
    oldPrice: "2,000.00",
    isSoldOut: false,
    image: image3,
    variants: [
      { id: "v1", name: "Standard Remedy Kit", price: "1,200.00", oldPrice: "2,000.00", sku: "PS-ASTRO-STD" }
    ],
    description: "Traditional astrological remedy items designed to pacify malefic planetary influences and enhance positive energies according to Vedic principles.",
    specifications: [
      { label: "Purpose", value: "Planetary Dosh Nivaran" },
      { label: "Included", value: "Herb roots, sacred threads, and specific offerings" },
      { label: "Guidance", value: "Includes manual instructions" }
    ],
    spiritualUse: "Specifically utilized for pacifying malefic planetary effects (Doshas) and balancing astrological influences. It fosters peace of mind, stability, and spiritual alignment."
  },
  {
    id: 5,
    tag: "SACRED BEADS",
    vendor: "Pooja Hetu",
    title: "RUDRAKSHA & MALAS",
    sku: "PS-RUD-005",
    stockStatus: "In Stock",
    price: "599.00",
    oldPrice: "1,299.00",
    isSoldOut: false,
    image: rudrakshaImg,
    variants: [
      { id: "v1", name: "5 Mukhi (108+1 Beads)", price: "599.00", oldPrice: "1,299.00", sku: "PS-RUD-5M" },
      { id: "v2", name: "Gauri Shankar Mala", price: "1,999.00", oldPrice: "2,999.00", sku: "PS-RUD-GS" }
    ],
    description: "Original and lab-certified sacred beads known for their calming vibrations, promoting inner peace, mental clarity, and spiritual growth.",
    specifications: [
      { label: "Bead Type", value: "Natural Rudraksha" },
      { label: "Certification", value: "Lab Tested & Certified" },
      { label: "Number of Beads", value: "108 + 1 Meru Bead" },
      { label: "Thread", value: "Strong Silk Thread knotted traditionally" }
    ],
    spiritualUse: "Deeply associated with meditation, mantra chanting (Japa), and spiritual grounding. It emits positive electromagnetic waves that calm the nervous system and elevate higher consciousness."
  },
  {
    id: 6,
    tag: "PLANETARY GEMSTONES",
    vendor: "Pooja Hetu",
    title: "GEMSTONES",
    sku: "PS-GEM-006",
    stockStatus: "In Stock",
    price: "2,450.00",
    oldPrice: "3,500.00",
    isSoldOut: false,
    image: imagesIcon,
    variants: [
      { id: "v1", name: "Certified Natural (3 Ratti)", price: "2,450.00", oldPrice: "3,500.00", sku: "PS-GEM-3R" },
      { id: "v2", name: "Certified Natural (5 Ratti)", price: "4,200.00", oldPrice: "5,800.00", sku: "PS-GEM-5R" }
    ],
    description: "Natural, lab-certified planetary gemstones selected to strengthen beneficial planets in your horoscope and bring success and well-being.",
    specifications: [
      { label: "Stone Quality", value: "Natural & Unheated" },
      { label: "Certification", value: "Government Approved Lab Certificate" },
      { label: "Cut", value: "Cushion / Oval Cabochon" }
    ],
    spiritualUse: "Worn to harness and amplify the beneficial cosmic rays of specific ruling planets. It helps strengthen inner willpower, career growth, and emotional equilibrium."
  },
  {
    id: 7,
    tag: "DIVINE MURTIS",
    vendor: "Pooja Hetu",
    title: "IDOLS & MURTIS",
    sku: "PS-MURTI-007",
    stockStatus: "In Stock",
    price: "1,499.00",
    oldPrice: "2,499.00",
    isSoldOut: false,
    image: pujaSamagriImg,
    variants: [
      { id: "v1", name: "Brass (6 Inch)", price: "1,499.00", oldPrice: "2,499.00", sku: "PS-MURTI-6IN" },
      { id: "v2", name: "Brass (9 Inch)", price: "2,999.00", oldPrice: "4,499.00", sku: "PS-MURTI-9IN" }
    ],
    description: "Finely crafted metal idols featuring intricate details and fine polish, perfect for your home temple or as a thoughtful spiritual gift.",
    specifications: [
      { label: "Material", value: "Solid Virgin Brass" },
      { label: "Finish", value: "Antique Glossy Polish" },
      { label: "Care", value: "Clean with dry cotton cloth" }
    ],
    spiritualUse: "Placed in home mandirs to establish a divine focal point for devotion, prayers, and meditation. It radiates spiritual energy and sanctifies the living space."
  },
  {
    id: 8,
    tag: "SEASONAL SPECIALS",
    vendor: "Pooja Hetu",
    title: "FESTIVAL COLLECTIONS",
    sku: "PS-FEST-008",
    stockStatus: "In Stock",
    price: "899.00",
    oldPrice: "1,599.00",
    isSoldOut: false,
    image: rudrakshaImg,
    variants: [
      { id: "v1", name: "Diwali Special Box", price: "899.00", oldPrice: "1,599.00", sku: "PS-FEST-DIW" }
    ],
    description: "Exclusive festive gift and ritual boxes designed specially to celebrate major Indian festivals with elegance, tradition, and devotion.",
    specifications: [
      { label: "Occasion", value: "Festivals & Special Occasions" },
      { label: "Packaging Type", value: "Designer Gift Box" },
      { label: "Contents", value: "Assorted Sacred Items" }
    ],
    spiritualUse: "Curated specifically for festive celebrations to share blessings, joy, and spiritual prosperity with family and friends, enhancing community bonding and festive devotion."
  }
];