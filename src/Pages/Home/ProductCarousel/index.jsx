import React from "react";
import { productdata } from "./productdata";
import Carousel from "react-multi-carousel";
import FacebookIcon from "@mui/icons-material/Facebook";
import "react-multi-carousel/lib/styles.css";
function ProductCarousel() {

 const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  return (
    <div className="bg-[red]">
      <section className="flex">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">Decorations</h1>
          <p className="text-base mt-4 w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut.
          </p>
          <button className="mt-5 border-b-2 border-black text-base font-bold hover:bg-black hover:text-white p-2 transistion-all duration-300">
            SHOP NOW
          </button>
        </div>

        {/* add the carousel here */}

        <div className="w-[60%] mx-auto flex">
          {/* <Carousel className="flex gap-0 p-5" responsive={responsive}> */}
            {productdata.map(
              ({ id, image, productName, price, tag, tag2, style, style2 }) => {
                return (
                  <div key={id} className="w-[200px] h-full">
                    <div className="relative">
                      <div className="px-2 flex items-center justify-end">
                        <p className={`absolute top-[-20px] ${style}`}>{tag}</p>
                      </div>
                      <div className="px-2 flex items-center justify-end">
                        <p className={`absolute top-[-20px] ${style2}`}>
                          {tag2}
                        </p>
                      </div>
                      <img
                        src={image}
                        alt="product"
                        className="w-[200px] h-[300px] object-cover"
                      />
                    </div>

                    <p className="mt-4 font-light">{productName}</p>
                    <p className="mt-1 font-bold">${price}</p>
                  </div>
                );
              }
            )}
          {/* </Carousel> */}
        </div>
      </section>

      <section className="flex pt-8">
        <div >
          <h1 className="text-3xl font-bold tracking-wide">Architrct</h1>
          <p className="text-base mt-4 w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ut.
          </p>
          <button className="mt-5 border-b-2 border-black text-base font-bold hover:bg-black hover:text-white p-2 transistion-all duration-300">
            SHOP NOW
          </button>
        </div>

        {/* add the carousel here */}

        <div className="w-[60%] mx-auto flex">
          {/* <Carousel className="flex gap-0 p-5" responsive={responsive}> */}
            {productdata.map(
              ({ id, image, productName, price, tag, tag2, style, style2 }) => {
                return (
                  <div key={id} className="w-[200px] h-full">
                    <div className="relative">
                      <div className="px-2 flex items-center justify-end">
                        <p className={`absolute top-[-20px] ${style}`}>{tag}</p>
                      </div>
                      <div className="px-2 flex items-center justify-end">
                        <p className={`absolute top-[-20px] ${style2}`}>
                          {tag2}
                        </p>
                      </div>
                      <img
                        src={image}
                        alt="product"
                        className="w-[200px] h-[300px] object-cover"
                      />
                    </div>

                    <p className="mt-4 font-light">{productName}</p>
                    <p className="mt-1 font-bold">${price}</p>
                  </div>
                );
              }
            )}
          {/* </Carousel> */}
        </div>
      </section>
    </div>
  );
}

export default ProductCarousel;
