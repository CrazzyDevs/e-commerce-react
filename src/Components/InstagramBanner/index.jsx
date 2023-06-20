import React from "react";
import {Link} from "react-router-dom"
function InstagramBanner() {
  return (
    <div className="h-[400px] w-full mt-8">
      <div className="relative">
        <Link to="/products">
        <div className="absolute flex items-center justify-center w-full h-full cursor-pointer">
          <p className="bg-white opacity-75 lg:w-[500px] w-[250px] p-8 text-center text-[25px] rounded-[25px] uppercase tracking-wide font-semibold">
            Shop 50% OFF NOW!
          </p>
        </div>
        </Link>
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
