


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// import ProductImageGallery from "./ProductPage/ProductImageGallery";
// import ProductInfo from "./ProductPage/ProductInfo";
// import DeliveryChecker from "./ProductPage/DeliveryChecker";
// import ActionButtons from "./ProductPage/ActionButtons";
// import ProductTabs from "./ProductTabs";
// import RelatedProducts from "./ProductPage/RelatedProducts";
// import useCartStore from "../store/useCartStore";
// import useProductStore from "../store/useProductStore";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // 🛒 Fetching real products from product store
//   const { products, loading, fetchProducts } = useProductStore();

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   // 🔍 Find current product dynamically from store based on URL id (_id or id)
//   const currentProduct = products.find(
//     (item) => (item._id?.toString() === id) || (item.id?.toString() === id)
//   );

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   // Sync variants and images when currentProduct changes
//   useEffect(() => {
//     if (currentProduct) {
//       setSelectedVariant(currentProduct.variants ? currentProduct.variants[0] : null);
//       setSelectedImage(currentProduct.image || currentProduct.images?.[0] || "");
//       setQuantity(1);
//     }
//   }, [currentProduct]);

//   const [reviewsList, setReviewsList] = useState([
//     { id: 1, name: "Aarav Sharma", rating: 5, date: "12 May, 2026", comment: "Pure and authentic products. Very satisfied!" },
//     { id: 2, name: "Priya Verma", rating: 4, date: "02 June, 2026", comment: "Packaging was great and delivery was fast." }
//   ]);

//   // Cart Store hooks
//   const { addToCart } = useCartStore();

//   if (loading) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center bg-[#fff3df]">
//         <p className="text-sm font-serif text-[#4a2e18] animate-pulse">Loading product details...</p>
//       </div>
//     );
//   }

//   // Fallback if product not found yet
//   if (!currentProduct) {
//     return (
//       <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#fff3df] gap-4">
//         <p className="text-stone-700 font-serif text-lg">Product not found!</p>
//         <button 
//           onClick={() => navigate('/')}
//           className="px-6 py-2.5 bg-[#6b2314] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
//         >
//           Back to Home
//         </button>
//       </div>
//     );
//   }

//   const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
//   const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
//   const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

//   const discountPercent = currentOldPrice 
//     ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100) 
//     : null;

//   // 🛒 FIXED HANDLE ADD TO CART
//   const handleAddToCart = async () => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     const userId = user.id || user._id || localStorage.getItem('cartUserId');
//     const token = localStorage.getItem('token');

//     if (!token) {
//       alert("Please login to add items to cart.");
//       return;
//     }

//     const productIdToSend = currentProduct?._id || currentProduct?.id || id;

//     if (!productIdToSend) {
//       alert("Product ID missing! Unable to add to cart.");
//       return;
//     }

//     try {
//       const result = await addToCart(userId, productIdToSend, quantity);
      
//       if (result?.success || result?.message === "Cart Updated!") {
//         alert(`Successfully added ${quantity} item(s) to your Cart!`);
//       } else {
//         alert(result?.error || result?.message || "Could not add to cart. Please try again.");
//       }
//     } catch (error) {
//       console.error("Cart add error:", error);
//       alert("Failed to add product to cart. Please try again.");
//     }
//   };

//   const handleAddReview = async (newRev) => {
//     try {
//       const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem('user') || '{}').token;

//       if (!token) {
//         alert("Please login to submit a review.");
//         return;
//       }

//       const reviewPayload = {
//         targetId: currentProduct._id || currentProduct.id,
//         targetModel: "Product",
//         rating: Number(newRev.rating),
//         comment: newRev.comment
//       };

//       const response = await axios.post('http://localhost:5000/api/reviews/add', reviewPayload, {
//         headers: { 
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true
//       });

//       if (response.data.success) {
//         const reviewObj = {
//           id: response.data.review?._id || reviewsList.length + 1,
//           name: "You",
//           rating: Number(newRev.rating),
//           date: "Just now",
//           comment: newRev.comment
//         };
//         setReviewsList([reviewObj, ...reviewsList]);
//         alert("Thank you! Your review has been added successfully 🎉");
//       }
//     } catch (error) {
//       console.error("Review submission error:", error);
//       alert(error.response?.data?.message || "Failed to submit review. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
//       <div className="max-w-[1400px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
//         {/* Top Split Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
//           <ProductImageGallery 
//             product={currentProduct} 
//             selectedImage={selectedImage} 
//             setSelectedImage={setSelectedImage} 
//           />

//           <div className="flex flex-col justify-between">
//             <div>
//               <ProductInfo 
//                 product={currentProduct}
//                 selectedVariant={selectedVariant}
//                 setSelectedVariant={setSelectedVariant}
//                 currentPrice={currentPrice}
//                 currentOldPrice={currentOldPrice}
//                 currentSku={currentSku}
//                 discountPercent={discountPercent}
//                 reviewsCount={reviewsList.length}
//               />
//               <DeliveryChecker />
//             </div>

//             <ActionButtons 
//               quantity={quantity}
//               setQuantity={setQuantity}
//               onAddToCart={handleAddToCart}
//               onBuyNow={() => {
//                 handleAddToCart();
//                 alert("Redirecting to Secure Checkout...");
//                 navigate('/checkout');
//               }}
//             />
//           </div>
//         </div>

//         {/* Bottom Detailed Sections */}
//         <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
//           <ProductTabs 
//             product={currentProduct}
//             reviewsList={reviewsList}
//             onAddReview={handleAddReview}
//           />
//         </div>

//         {/* Related Products / You May Also Like (Dynamic) */}
//         <RelatedProducts 
//           currentProductId={currentProduct._id || currentProduct.id} 
//           currentCategory={currentProduct.category} 
//         />

//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../Utils/axiosInstance";

import ProductImageGallery from "./ProductPage/ProductImageGallery";
import ProductInfo from "./ProductPage/ProductInfo";
import DeliveryChecker from "./ProductPage/DeliveryChecker";
import ActionButtons from "./ProductPage/ActionButtons";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./ProductPage/RelatedProducts";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🛒 Product store से real products
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 🔍 URL के id से current product निकालें
  const currentProduct = products.find(
    (item) => (item._id?.toString() === id) || (item.id?.toString() === id)
  );

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [reviewsList, setReviewsList] = useState([]); // ✅ खाली array, API से भरेगा
  const [reviewsLoading, setReviewsLoading] = useState(false);

  // ✅ Product change होने पर variant/image reset करें
  useEffect(() => {
    if (currentProduct) {
      setSelectedVariant(currentProduct.variants ? currentProduct.variants[0] : null);
      setSelectedImage(currentProduct.image || currentProduct.images?.[0] || "");
      setQuantity(1);
    }
  }, [currentProduct]);

  // ✅ Reviews को API से fetch करें
  useEffect(() => {
    const fetchReviews = async () => {
      if (!currentProduct) return;
      
      const productId = currentProduct._id || currentProduct.id;
      if (!productId) return;

      setReviewsLoading(true);
      try {
        const response = await axiosInstance.get(`/api/reviews/${productId}`);
        if (response.data.success) {
          setReviewsList(response.data.reviews || []);
        } else {
          setReviewsList([]);
        }
      } catch (error) {
        console.error("Reviews fetch error:", error.message);
        setReviewsList([]);
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchReviews();
  }, [currentProduct]);

  // Cart Store
  const { addToCart } = useCartStore();

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#fff3df]">
        <p className="text-sm font-serif text-[#4a2e18] animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  // अगर product नहीं मिला
  if (!currentProduct) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#fff3df] gap-4">
        <p className="text-stone-700 font-serif text-lg">Product not found!</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 bg-[#6b2314] text-white text-xs font-bold uppercase tracking-wider rounded-xs"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
  const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
  const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

  const discountPercent = currentOldPrice
    ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100)
    : null;

  // 🛒 ADD TO CART
  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to add items to cart.");
      navigate("/login");
      return;
    }

    const productIdToSend = currentProduct?._id || currentProduct?.id || id;

    if (!productIdToSend) {
      alert("Product ID missing! Unable to add to cart.");
      return;
    }

    try {
      // ✅ अब सिर्फ productId और quantity भेजें (userId backend टोकन से उठाएगा)
      const result = await addToCart(productIdToSend, quantity);

      if (result?.success) {
        alert(`Successfully added ${quantity} item(s) to your Cart! 🛒`);
      } else {
        alert(result?.error || "Could not add to cart. Please try again.");
      }
    } catch (error) {
      console.error("Cart add error:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  // ✅ ADD REVIEW
  const handleAddReview = async (newRev) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login to submit a review.");
        return;
      }

      const reviewPayload = {
        targetId: currentProduct._id || currentProduct.id,
        targetModel: "Product",
        rating: Number(newRev.rating),
        comment: newRev.comment,
      };

      const response = await axiosInstance.post("/api/reviews/add", reviewPayload);

      if (response.data.success) {
        // ✅ नया रिव्यू लिस्ट में जोड़ें (API से मिली ID के साथ)
        const reviewObj = {
          _id: response.data.review?._id || Date.now(),
          user: { name: "You" },
          rating: Number(newRev.rating),
          comment: newRev.comment,
          createdAt: new Date().toISOString(),
        };
        setReviewsList([reviewObj, ...reviewsList]);
        alert("Thank you! Your review has been added successfully 🎉");
      }
    } catch (error) {
      console.error("Review submission error:", error);
      alert(error.response?.data?.message || "Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
          <ProductImageGallery
            product={currentProduct}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          <div className="flex flex-col justify-between">
            <div>
              <ProductInfo
                product={currentProduct}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
                currentPrice={currentPrice}
                currentOldPrice={currentOldPrice}
                currentSku={currentSku}
                discountPercent={discountPercent}
                reviewsCount={reviewsList.length}
              />
              <DeliveryChecker />
            </div>

            <ActionButtons
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
              onBuyNow={() => {
                handleAddToCart();
                navigate("/checkout");
              }}
            />
          </div>
        </div>

        {/* Bottom Detailed Sections */}
        <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
          <ProductTabs
            product={currentProduct}
            reviewsList={reviewsList}
            reviewsLoading={reviewsLoading}
            onAddReview={handleAddReview}
          />
        </div>

        {/* Related Products */}
        <RelatedProducts
          currentProductId={currentProduct._id || currentProduct.id}
          currentCategory={currentProduct.category}
        />
      </div>
    </div>
  );
};

export default ProductDetails;