import {} from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import BannerImage from "../../Components/Banner/BannerImages/Banner6.png";
import BannerImage2 from "../../Components/Banner/BannerImages/Banner4.jpg";
import ProductCategoryOne from "../../Components/ProductCategoryOne/ProductCategoryOne";
import ProductsImage from "../../Components/Banner/BannerImages/Banner5.jpeg";
import Nav from "../../Components/Nav";
import InstagramBanner from "../../Components/InstagramBanner";
import ProductCarousel from "../../Components/Banner/ProductCarousel";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <div className=" h-[350px] md:h-[400px] bg-[#faf9fb]">
          <div className="banner">
            <Banner link={"#"} name={"User"} discount={1000} />
            <img src={BannerImage} alt="BannerImage" className="bannerImage" />
          </div>
        </div>

        <section className="md:flex m-3 gap-5 gb-black mt-12">
          <div className="company max-w-md mx-auto rounded-sm shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-lg leading-tight text-slate-500 font-semibold">
                  comfortable <span className="text-slate-900">chair</span>
                </div>
                <p className="mt-2 text-slate-500">
                  Looking for good Looking furniture???
                </p>
                <p className="mt-1 text-slate-500">
                  You are in the right place.
                </p>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight  text-slate-700 font-semibold underline hover:opacity-75 transistion-all duration-300"
                >
                  View Products
                </a>
              </div>
              <div className="md:shrink-0 ms-center justify-center flex my-10 m-2">
                <img
                  className="BannerImage2 md:h-20 w-md object-cover md:h-md md:w-20"
                  src={BannerImage2}
                  alt="Modern building architecture"
                />
              </div>
            </div>
          </div>
          <div className="company max-w-md mx-auto bg-white rounded-sm shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex ">
              <div className="p-8">
                <div className="uppercase tracking-wide text-lg leading-tight text-slate-500 font-semibold">
                  luxerious new <span className="text-slate-900">desk</span>
                </div>
                <p className="mt-2 text-slate-500">
                  Looking for good Looking furniture???
                </p>
                <p className="mt-1 text-slate-500">
                  You are in the right place.
                </p>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight  text-slate-700 font-semibold underline hover:opacity-75 transistion-all duration-300"
                >
                  View Products
                </a>
              </div>
              <div className="md:shrink-0 ms-center justify-center flex my-10 m-2">
                <img
                  className="BannerImage2 md:h-20 w-md object-cover md:h-md md:w-20"
                  src={BannerImage2}
                  alt="Modern building architecture"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <ProductCategoryOne
            ProductImage={ProductsImage}
            ProductName={"Products name"}
            Price={1249.99}
            HotSale={"Hot"}
            NewProduct={"new"}
          />
        </section>

        <InstagramBanner/>
        <ProductCarousel />
      </main>
    </>
  );
};

export default Home;
