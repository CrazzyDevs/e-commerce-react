import React from "react";

const Footer = () => {
  return (
    <section className="pt-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 p-12 lg:place-items-center lg:justify-center justify-start place-items-start">
        <div>
          <p className="text-3xl font-bold">FurniMart.</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
            quidem quia distinctio minus. Ullam mollitia porro in eveniet
            magnam.
          </p>

          <p className="mt-6">FurniMart, 2023.</p>
        </div>
        <div className="w-[200px] h-full mt-3 lg:mt-0 md:mt-0">
          <p className="font-bold text-xl">Contact Us</p>
          <ul className="flex flex-col gap-3 lg:mt-6 mt-3">
            <li className="cursor-pointer hover:opacity-50">
              <a href="tel: +2340952108909">(+234) 095 210 8909</a>
            </li>
            <li className="cursor-pointer hover:opacity-50">
              <a href="mailto:codax@gmail.com">codax@gmail.com</a>
            </li>
            {/* <div>
              <ul>
                <li className="cursor-pointer hover:opacity-50">
                  <span>
                    <BiLogoFacebook />
                  </span>
                </li>
                <li>
                  <span>
                    <BiLogoInstagram />
                  </span>
                </li>
                <li>
                  <span>
                    <BiLogoTiktok />
                  </span>
                </li>
                <li>
                  <span>
                    <BiLogoTwitter />
                  </span>
                </li>
              </ul>
            </div> */}
          </ul>
        </div>
        <div className="w-[200px] h-full">
          <p className="font-bold text-xl">Useful Links</p>

          <ul className="flex flex-col gap-3 lg:mt-6 mt-3">
            <li className="cursor-pointer hover:opacity-50">Home</li>
            <li className="cursor-pointer hover:opacity-50">About FurniMart</li>
            <li className="cursor-pointer hover:opacity-50">Products</li>
            <li className="cursor-pointer hover:opacity-50">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-[300px] h-full">
          <p className="font-bold text-xl mt-3 lg:mt-0">Newsletter</p>
          <div className="">
            <p className="lg:mt-6 mt-3">
              Let&apos;s us know how we can help you
            </p>
            <input
              type="text"
              className="px-5 py-3 border w-full mt-3 outline-none bg-transparent"
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
