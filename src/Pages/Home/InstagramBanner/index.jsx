import React from "react";

function InstagramBanner() {
  return (
    <div className="h-[400px] w-full mt-8">
      <div className="relative">
        <div className="absolute flex items-center justify-center w-full h-full">
          <p className="bg-white opacity-75 w-[500px] p-8 text-center text-[25px] rounded-[25px] uppercase tracking-wide font-semibold">Instagram</p>
        </div>
        <img
          src="https://res.cloudinary.com/dpokiomqq/image/upload/v1685897995/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_cnpp2i.jpg"
          alt="banner"
          className="h-[400px] w-full object-cover"
        />
      </div>
    </div>
  );
}

export default InstagramBanner;
