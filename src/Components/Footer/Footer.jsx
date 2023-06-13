import React from "react";
import "./Footer.css";
// import {
//   BiLogoFacebook,
//   BiLogoInstagram,
//   BiLogoTiktok,
//   BiLogoTwitter,
// } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="pt-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 p-12 place-items-center justify-center">
        <div>
          <p className="text-3xl font-bold">FurniMart.</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
            quidem quia distinctio minus. Ullam mollitia porro in eveniet
            magnam.
          </p>

          <p className="mt-6">FurniMart, 2023.</p>
        </div>
        <div className="w-[200px] h-full">
          <p>Contact Us</p>
          <ul className="flex flex-col gap-3 mt-6">
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
          <p>Useful Links</p>

          <ul className="flex flex-col gap-3 mt-6">
            <li className="cursor-pointer hover:opacity-50">Home</li>
            <li className="cursor-pointer hover:opacity-50">About FurniMart</li>
            <li className="cursor-pointer hover:opacity-50">Products</li>
            <li className="cursor-pointer hover:opacity-50">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-[300px] h-full ">
          <p>Newsletter</p>
          <div className="">
            <p className="mt-6">Let&apos;s us know how we can help you</p>
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
