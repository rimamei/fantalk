import React from "react";

const Banner = () => {
  return (
    <div className="flex h-banner sm:h-banner-sm mt-5 mb-12 sm:mb-8">
      <div className="w-2/3 bg-gray-500 mr-2 rounded"></div>
      <div className="w-1/3">
        <div className="banner-child mb-2 rounded"></div>
        <div className="banner-child rounded"></div>
      </div>
    </div>
  );
};

export default Banner;
