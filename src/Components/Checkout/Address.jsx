import React, { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import "./Address.css";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";

function Address() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 lg:mx-5 md:mx-5 mx-1">
        <div className="all py-5 mr-6 lg:col-span-3 md:col-span-2">
          <div className="flex">
            <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">Address</h1>
            <TfiAngleRight className="text-sm lg:mx-10 md:mx-10 mx-4 my-auto font-bold text-gray-400" />
            <h1 className="lg:text-xl  md:text-2xl text-xlfont-normal text-gray-400">Shipping</h1>
            <TfiAngleRight className="text-sm lg:mx-10 md:mx-10 mx-4 my-auto font-bold text-gray-400" />
            <h1 className="lg:text-xl  md:text-2xl text-xlfont-normal text-gray-400">Payment</h1>
          </div>
          <div className="Address pb-6 mb-2 border-b border-gray-200">
            <div className="add1 flex justify-between">
              <label
                htmlFor="myRadioId"
                className="radio inline-flex items-center cursor-pointer mr-3"
              >
                <input
                  type="radio"
                  name="myRadioField"
                  id="myRadioId"
                  className="radio_input hidden"
                />
                <div className="radio_radio"></div>
                <div className="text mt-12">
                  <h1 className=" font-bold font-sans lg:text-2xl md:text-2xl text-xl mb-2">
                    Huzefa Bagwala{" "}
                    <span className=" border-green-400 border text-green-400 lg:text-lg md:text-lg text-sm  font-medium font-mono  lg:mx-4 md:mx-4 mx-1 px-2 rounded-md">
                      HOME
                    </span>
                  </h1>
                  <p className="lg:text-base md:text-base text-sm whitespace-nowrap font-normal font-sans">
                    1131 Dusty Townline, Jaxksonville, Tx 40322
                  </p>
                  <p className="lg:text-base md:text-base text-sm  font-normal font-sans">
                    Contact - (936) 361-0310
                  </p>
                </div>
              </label>
              <div className="txt lg:ml-0 md:ml-0 -ml-16 flex mt-12">
                <p className="text-black cursor-pointer font-bold h-7 px-4 lg:text-xl md:text-xl border-r-2 border-gray-400">
                  Edit
                </p>
                <p className="text-red-600 cursor-pointer font-bold lg:text-xl md:text-xl lg:ml-5 md:ml-5 ml-2">
                  Remove
                </p>
              </div>
            </div>
            <div className="add2 flex justify-between">
              <label
                htmlFor="radioId"
                className="radios inline-flex items-center cursor-pointer mr-3"
              >
                <input
                  type="radio"
                  name="myRadioField"
                  id="radioId"
                  className="radio_inputs hidden"
                />
                <div className="radio_radios"></div>
                <div className="text mt-12">
                  <h1 className="  font-bold font-sans lg:text-2xl md:text-2xl text-xl mb-2">
                    IndiaTech{" "}
                    <span className="border-green-400 border text-green-400 lg:text-lg md:text-lg text-sm  font-medium font-mono  lg:mx-4 md:mx-4 mx-1 px-2 rounded-md">
                      OFFICE
                    </span>
                  </h1>
                  <p className="lg:text-base md:text-base text-sm whitespace-nowrap font-normal font-sans">
                    1219 Harvest Path, Jacksonville, TX 40326{" "}
                  </p>
                  <p className="lg:text-base md:text-base text-sm whitespace-nowrap font-normal font-sans">
                    Contact - (936) 361-0310
                  </p>
                </div>
              </label>
              <div className="txt lg:ml-0 md:ml-0 -ml-14 flex mt-12">
                <p className="text-black cursor-pointer font-bold h-7 px-4 lg:text-xl md:text-xl border-r-2 border-gray-400">
                  Edit
                </p>
                <p className="text-red-600 cursor-pointer font-bold lg:text-xl md:text-xl lg:ml-5 md:ml-5 ml-2">
                  Remove
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={toggleAccordion}
              className="text-green-500 flex font-normal text-xl"
            >
              {isOpen ? "+ Add New Address" : "+ Add Another Address"}
            </button>
            {isOpen && (
              <form className="grid">
                <label>
                  Prefix{" "}
                  <input
                    placeholder="Mr / Mrs"
                    type="text"
                    id=""
                    className="outline-none border ml-20 px-2 focus:border-green-500 focus:shadow-none py-1 w-1/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  First Name{" "}
                  <span className="font-bold text-red-600 text-xl">*</span>{" "}
                  <input
                    placeholder="  First Name"
                    type="text"
                    required
                    id=""
                    className="outline-none ml-8 border focus:border-green-500 focus:shadow-none py-1 w-3/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Middle Name{" "}
                  <input
                    placeholder="Middle Name"
                    type="text"
                    id=""
                    className="px-2 outline-none border focus:border-green-500 focus:shadow-none py-1 w-3/4 my-2 ml-7 shadow-lg"
                  />
                </label>
                <label>
                  Last Name
                  <span className="font-bold text-red-600 text-xl">*</span>{" "}
                  <input
                    placeholder="Last Name"
                    required
                    type="text"
                    id=""
                    className="px-2 outline-none border ml-9 focus:border-green-500 focus:shadow-none py-1 w-3/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Address Line 1
                  <span className="font-bold text-red-600 text-xl">*</span>{" "}
                  <input
                    placeholder="Address"
                    type="text"
                    required
                    id=""
                    className="px-2 outline-none border ml-2 focus:border-green-500 focus:shadow-none py-1 w-3/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Address Line 2{" "}
                  <input
                    placeholder="Address"
                    type="text"
                    id=""
                    className="outline-none border focus:border-green-500 focus:shadow-none py-1 px-2 w-3/4 my-2 ml-4 shadow-lg"
                  />
                </label>
                <label>
                  City
                  <span className="font-bold text-red-600 text-xl ml-2">
                    *
                  </span>{" "}
                  <input
                    placeholder="City"
                    required
                    type="text"
                    id=""
                    className="outline-none border px-2 ml-20 focus:border-green-500 focus:shadow-none py-1 w-1/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Zip/Postal Code
                  <span className="font-bold text-red-600 text-xl ml-1">
                    *
                  </span>{" "}
                  <input
                    placeholder="Postal Code"
                    type="text"
                    required
                    id=""
                    className="outline-none px-2 border focus:border-green-500 focus:shadow-none py-1 w-0.5/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Telephone
                  <span className="font-bold text-red-600 text-xl ml-1">
                    *
                  </span>{" "}
                  <input
                    placeholder="(+234) 000 000 000"
                    type="text"
                    required
                    id=""
                    className="outline-none border px-2 ml-10 focus:border-green-500 focus:shadow-none py-1 w-2/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  Fax
                  <span className="font-bold text-red-600 text-xl ml-3">
                    *
                  </span>{" "}
                  <input
                    placeholder=""
                    required
                    type="text"
                    id=""
                    className="outline-none border px-2 focus:border-green-500 ml-20 focus:shadow-none py-1 w-0.5/4 my-2 shadow-lg"
                  />
                </label>
                <label>
                  VAT Number
                  <input
                    placeholder=""
                    type="text"
                    id=""
                    className="outline-none border focus:border-green-500 focus:shadow-none py-1 w-1/4 my-2 px-2 ml-10 shadow-lg"
                  />
                </label>
                <button
                  type="submit"
                  className="text-white bg-green-500 py-3 mx-40 text-xl block rounded-sm font-semibold mt-5"
                >
                  Add Address
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="">
          <div className=" border-2 border-gray-200 pb-10 px-4">
            <form>
              <OrderSummary />
              <Link to="/Shipping">
                <button
                  type="submit"
                  className="text-white bg-green-500 py-3 rounded-sm font-semibold w-full mt-5"
                >
                  Continue to Shipping
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
