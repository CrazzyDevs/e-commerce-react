import React from "react";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";
import CheckoutNav from "../../Components/Checkout/CheckoutNav";

function Shipping() {
  return (
    <>
      <div className="shipping">
        <CheckoutNav/>
        <div className="gap-3 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 lg:mx-5 md:mx-5 mx-1">
          <div className="bord  py-5 lg:col-span-3 md:col-span-2">
            <h1 className="text-3xl mt-20 mb-4 py-3 font-semibold font-sans ml-7">
              Shipment Method
            </h1>
            <div className="tableData border py-4 ">
              <div className="add1 flex justify-between border-b pl-3 pb-2">
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
                    <h1 className=" font-semibold whitespace-nowrap font-sans lg:text-xl md:text-lg text-lg">
                      Free{" "}
                      <span className="lg:text-xl md:text-lg text-lg font-normal font-Sans ml-3">
                        Regular Shipping
                      </span>
                    </h1>
                  </div>
                </label>
                <div className="txt flex">
                  <p className="text-black font-normal h-7 px-4 lg:text-xl md:text-lg text-sm font-sans">
                    7 August, 2023
                  </p>
                </div>
              </div>
              <div className="add1 flex justify-between border-b py-2 pl-3">
                <label
                  htmlFor="radioId"
                  className="radio inline-flex items-center cursor-pointer mr-3"
                >
                  <input
                    type="radio"
                    name="myRadioField"
                    id="radioId"
                    className="radio_input hidden"
                  />
                  <div className="radio_radio"></div>
                  <div className="text">
                    <h1 className=" font-semibold font-sans lg:text-xl md:text-lg text-lg whitespace-nowrap">
                      $8.50{" "}
                      <span className="lg:text-xl md:text-lg text-lg font-normal font-Sans ml-3">
                        Priority Shipping
                      </span>
                    </h1>
                  </div>
                </label>
                <div className="txt flex">
                  <p className="text-black font-normal h-7 px-4 lg:text-xl md:text-lg text-sm font-sans">
                    25 July, 2023
                  </p>
                </div>
              </div>
              <div className="add1 lg:flex md:flex block justify-between pt-2 pl-3">
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
                  <div className="text">
                    <h1 className=" font-semibold lg:whitespace-normal md:whitespace-normal whitespace-nowrap font-sans lg:text-xl md:text-lg text-lg">
                      Schedule{" "}
                      <span className="lg:text-xl md:text-lg text-sm font-normal font-Sans ml-3">
                        Choose a date that works for you.
                      </span>
                    </h1>
                  </div>
                </label>
                <div className="txt flex">
                  <p className="text-gray-500 font-normal h-7 outline-none px-4 lg:text-xl md:text-lg text-sm font-sans">
                    <select className="outline-none lg:text-xl md:text-lg text-sm">
                      <option  className="outline-none lg:text-xl md:text-lg text-sm" value="">Select an option</option>
                      <option  className="outline-none lg:text-xl md:text-lg text-sm" value="option1">2 July, 2023</option>
                      <option  className="outline-none lg:text-xl md:text-lg text-sm" value="option2">25 July, 2023</option>
                      <option  className="outline-none lg:text-xl md:text-lg text-sm" value="option3">15 July, 2023</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" border-2 border-gray-200 pb-10 px-4">
              <OrderSummary />
              <Link to="/Payment">
                <button
                  type="submit"
                  className="text-white bg-green-500 py-3 rounded-sm font-semibold w-full mt-5"
                >
                  Continue to Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;
