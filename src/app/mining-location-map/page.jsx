import React from "react";
const FullImagePage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {/* Using regular img tag */}
        <img
          src="/map-5.jpg"
          alt="Full image"
          className="object-contain w-full max-w-8xl h-auto"
        />
      </div>
    );
  };
  
  export default FullImagePage;
  