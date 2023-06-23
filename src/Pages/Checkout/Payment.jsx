import React, { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { MdOutlineLocalShipping } from "react-icons/md";
import Img1 from "../../assets/Visa.png";
import Img2 from  "../../assets/Master.png";
import OrderSummary from "./OrderSummary";
import Popup from "../../Components/Checkout/Popup";
import CheckoutNav from "../../Components/Checkout/CheckoutNav";
// import Popup from "./Popup";

function Payment() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <CheckoutNav/>
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 mx-5 gap-3">
        <div className="bord lg:col-span-3 md:col-span-2">
          <h1 className="text-3xl mt-20 mb-4 py-3 font-semibold font-sans ml-7">
            Payment Method
          </h1>
          <div className="tableData border py-4 ">
            <div className="add1 flex justify-between border-b pl-3 pb-3">
              <label
                htmlFor="radioIdInput"
                className="radio inline-flex items-center cursor-pointer mr-3"
              >
                <input
                  type="radio"
                  name="myRadioField"
                  id="radioIdInput"
                  className="radio_input hidden"
                />
                <div className="radio_radio"></div>
                <div className="text">
                  <div className=" font-semibold font-sans text-xl flex">
                    <img src={Img1} alt="" className="lg:w-9 md:w-10 w-9 lg:h-auto md:h-9 h-9 my-3  object-contain" />{" "}
                    <span className="lg:text-lg md:text-lg text-sm whitespace-nowrap my-auto font-black font-Sans ml-3">
                      **** 6754
                    </span>
                    <span className="lg:text-lg md:text-lg text-sm whitespace-nowrap text-gray-400 font-thin font-Sans lg:ml-6 md:ml-6 ml-3 my-auto">
                      Expires 06/2024
                    </span>
                  </div>
                </div>
              </label>
              <div className="txt flex">
                <p className="text-red-600 cursor-pointer font-semibold h-7 px-4 lg:text-lg md:text-lg text-sm my-auto font-sans">
                  Remove
                </p>
              </div>
            </div>
            <div className="add1 flex justify-between pl-3 pt-3">
              <label
                htmlFor="idInput"
                className="radio inline-flex items-center cursor-pointer mr-3"
              >
                <input
                  type="radio"
                  name="myRadioField"
                  id="idInput"
                  className="radio_input hidden"
                />
                <div className="radio_radio"></div>
                <div className="text">
                  <div className=" font-semibold font-sans flex text-xl">
                    <img src={Img2} alt="" className="lg:w-9 md:w-10 w-6 lg:h-auto md:h-9 h-9 my-3  object-contain" />{" "}
                    <span className="lg:text-lg md:text-lg text-sm whitespace-nowrap my-auto font-black font-Sans ml-3">
                      **** 5643
                    </span>
                    <span className="lg:text-lg md:text-lg text-sm whitespace-nowrap my-auto text-gray-400 font-thin font-Sans ml-6">
                      Expires 11/2025
                    </span>
                  </div>
                </div>
              </label>
              <div className="txt flex">
                <p className="text-red-600 cursor-pointer font-semibold h-7 px-4 lg:text-lg md:text-lg text-sm my-auto font-sans">
                  Remove
                </p>
              </div>
            </div>
          </div>
          <div className="border mt-12 mlg:b-9 md:w-6 w-3"></div>
          <Popup />
        </div>
        <div className="">
          <div className=" border-2 border-gray-200 pb-10 px-4">
            <form>
              <OrderSummary />
              <button
                type="submit"
                className="text-white flex bg-green-500 lg:px-24 md:px-10 px-20 py-3 rounded-sm font-semibold w-full mt-5"
              >
                Place Order
                <MdOutlineLocalShipping className="text-2xl items-center ml-4"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
