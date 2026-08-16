// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { shopCategories } from "../data/categories";



// // import DeliveryChecker from "./DeliveryChecker";
// // import ActionButtons from "./ActionButtons";
// // import ProductTabs from "./ProductTabs";
// import ProductImageGallery from "./ProductPage/ProductImageGallery";
// import ProductInfo from "./ProductPage/ProductInfo";
// import DeliveryChecker from "./ProductPage/DeliveryChecker";
// import ActionButtons from "./ProductPage/ActionButtons";
// import ProductTabs from "./ProductTabs";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const currentProduct = shopCategories.find((item) => item.id.toString() === id) || shopCategories[0];

//   const [selectedVariant, setSelectedVariant] = useState(
//     currentProduct.variants ? currentProduct.variants[0] : null
//   );
//   const [selectedImage, setSelectedImage] = useState(currentProduct.image);
//   const [quantity, setQuantity] = useState(1);

//   const [reviewsList, setReviewsList] = useState([
//     { id: 1, name: "Aarav Sharma", rating: 5, date: "12 May, 2026", comment: "Pure and authentic products. Very satisfied!" },
//     { id: 2, name: "Priya Verma", rating: 4, date: "02 June, 2026", comment: "Packaging was great and delivery was fast." }
//   ]);

//   const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
//   const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
//   const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

//   const discountPercent = currentOldPrice 
//     ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100) 
//     : null;

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: currentProduct.id,
//       title: currentProduct.title,
//       variant: selectedVariant ? selectedVariant.name : "Standard",
//       price: currentPrice,
//       sku: currentSku,
//       quantity: quantity,
//       image: currentProduct.image
//     };
//     console.log("Cart Item:", cartItem);
//     alert(`Successfully added ${quantity} item(s) to your Cart!`);
//   };

//   const handleAddReview = (newRev) => {
//     const reviewObj = {
//       id: reviewsList.length + 1,
//       name: newRev.name,
//       rating: Number(newRev.rating),
//       date: "Today",
//       comment: newRev.comment
//     };
//     setReviewsList([reviewObj, ...reviewsList]);
//     alert("Thank you! Your review has been submitted.");
//   };

//   return (
//     <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
//       <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
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
//               }}
//             />
//           </div>
//         </div>

//         {/* Bottom Detailed Sections (Spiritual Use, Specs, Reviews) */}
//         <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
//           <ProductTabs 
//             product={currentProduct}
//             reviewsList={reviewsList}
//             onAddReview={handleAddReview}
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shopCategories } from "../data/categories";

import ProductImageGallery from "./ProductPage/ProductImageGallery";
import ProductInfo from "./ProductPage/ProductInfo";
import DeliveryChecker from "./ProductPage/DeliveryChecker";
import ActionButtons from "./ProductPage/ActionButtons";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./ProductPage/RelatedProducts"; // <-- Imported properly

const ProductDetails = () => {
  const { id } = useParams();
  
  // Find current product based on URL id
  const currentProduct = shopCategories.find((item) => item.id.toString() === id) || shopCategories[0];

  const [selectedVariant, setSelectedVariant] = useState(
    currentProduct.variants ? currentProduct.variants[0] : null
  );
  const [selectedImage, setSelectedImage] = useState(currentProduct.image);
  const [quantity, setQuantity] = useState(1);

  // Reset variant and image when product ID changes (when clicking related products)
  useEffect(() => {
    setSelectedVariant(currentProduct.variants ? currentProduct.variants[0] : null);
    setSelectedImage(currentProduct.image);
    setQuantity(1);
  }, [currentProduct]);

  const [reviewsList, setReviewsList] = useState([
    { id: 1, name: "Aarav Sharma", rating: 5, date: "12 May, 2026", comment: "Pure and authentic products. Very satisfied!" },
    { id: 2, name: "Priya Verma", rating: 4, date: "02 June, 2026", comment: "Packaging was great and delivery was fast." }
  ]);

  const currentPrice = selectedVariant ? selectedVariant.price : currentProduct.price;
  const currentOldPrice = selectedVariant ? selectedVariant.oldPrice : currentProduct.oldPrice;
  const currentSku = selectedVariant ? selectedVariant.sku : currentProduct.sku;

  const discountPercent = currentOldPrice 
    ? Math.round(((currentOldPrice - currentPrice) / currentOldPrice) * 100) 
    : null;

  const handleAddToCart = () => {
    const cartItem = {
      id: currentProduct.id,
      title: currentProduct.title,
      variant: selectedVariant ? selectedVariant.name : "Standard",
      price: currentPrice,
      sku: currentSku,
      quantity: quantity,
      image: currentProduct.image
    };
    console.log("Cart Item:", cartItem);
    alert(`Successfully added ${quantity} item(s) to your Cart!`);
  };

  const handleAddReview = (newRev) => {
    const reviewObj = {
      id: reviewsList.length + 1,
      name: newRev.name,
      rating: Number(newRev.rating),
      date: "Today",
      comment: newRev.comment
    };
    setReviewsList([reviewObj, ...reviewsList]);
    alert("Thank you! Your review has been submitted.");
  };

  return (
    <div className="w-full bg-[#fff3df] min-h-screen py-10 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto bg-white rounded-sm shadow-xl overflow-hidden border border-stone-200">
        
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
                alert("Redirecting to Secure Checkout...");
              }}
            />
          </div>
        </div>

        {/* Bottom Detailed Sections (Spiritual Use, Specs, Authenticity, FAQ & Reviews) */}
        <div className="border-t border-stone-200 p-6 sm:p-10 bg-[#fdfaf5]">
          <ProductTabs 
            product={currentProduct}
            reviewsList={reviewsList}
            onAddReview={handleAddReview}
          />
        </div>

        {/* Related & Recommended Products Section */}
        <RelatedProducts 
          currentProductId={currentProduct.id} 
          currentCategory={currentProduct.category} 
        />

      </div>
    </div>
  );
};

export default ProductDetails;