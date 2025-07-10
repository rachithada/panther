import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback to a default image if none provided
  const hasImages = product.images && product.images.length > 0;
  const images = hasImages
    ? product.images
    : ["https://via.placeholder.com/400x400?text=No+Image"];

  return (
    <div
      className="group w-70 h-96  transform transition-all duration-500 hover:scale-105"
      onMouseEnter={() => {
        setCurrentImage(1);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setCurrentImage(0);
        setIsHovered(false);
      }}
    >
      {/* Diamond/Rhombus container using border-radius and transform */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl transform rotate-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-500/30 group-hover:rotate-3 ml-8 sm:ml-10">
        {/* Animated border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse rounded-3xl"></div>
        
        {/* Inner card content */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black m-1 w-full h-full rounded-3xl overflow-hidden flex flex-col transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500">
          
          {/* Mobile: Swipeable image slider */}
          <div className="block md:hidden flex-1 relative">
            <div className="flex overflow-x-auto gap-2 scroll-snap-x snap-x h-full">
              {images.map((img, index) => (
                <div key={index} className="relative flex-shrink-0 w-full h-full">
                  <img
                    src={img}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Hover swap image */}
          <div className="hidden md:flex flex-1 relative items-center justify-center p-6">
            <img
              src={images[currentImage % images.length]}
              alt={product.name}
              className="max-w-full max-h-full object-contain transition-all duration-700 transform group-hover:scale-110"
            />
            
            {/* Image overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 transition-opacity duration-500"></div>
            
            {/* Animated pulse effect on hover */}
            <div className={`absolute inset-0 bg-red-500/10 transition-all duration-500 ${isHovered ? 'animate-pulse' : ''}`}></div>
          </div>

          {/* Content section positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300 mb-2">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-center mb-4">
              <p className="text-xl font-extrabold text-red-500">
                ₹{product.price}
              </p>
            </div>
            
            {/* Enhanced button */}
            <button className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-6 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 group/btn text-sm">
              <span className="relative z-10">Add to Cart</span>
              
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-6 h-6 border-2 border-red-500/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Tag positioned outside card at top right corner */}
      {product.tag && (
        <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/50">
          {product.tag}
        </div>
      )}
    </div>
  );
};

export default ProductCard;