import React, { useState } from "react";
import Img3 from "../../assets/Visa.png";
import Img4 from "../../assets/Master.png";
import Img5 from "../../assets/Paypal.png";
import { GrClose } from "react-icons/gr";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
    });
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen} className="text-xl font-medium text-green-500">+ Add Payment Method</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content lg:w-2/4 md:w-3/4">
            <div className="flex py-2">
              <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold">Card Payment Gateway</h2>
              <GrClose
                onClick={handleClose}
                className="text-2xl font-black lg:ml-auto md:ml-auto ml-auto cursor-pointer"
              />
            </div>
            <form onSubmit={handleSubmit} className="pt-6 bg-gray-100 border">
              <h2 className="text-2xl text-center pb-4 font-semibold font-sans">
                Payment Details
              </h2>
              <div className="Images justify-center flex gap-4 px-6 pb-3">
                <img src={Img3} alt="" className="w-20" />
                <img src={Img4} alt="" className="w-20" />
                <img src={Img5} alt="" className="w-20" />
              </div>
              <div className="inputs uppercase px-2 bg-white text-sm font-semibold placeholder:text-lg py-10">
                <label htmlFor="" className="text-sm font-semibold pb-6">
                  Card Nummer
                  <input type="text" placeholder="Valid Card Number" className="w-full py-3 border focus:border-red-500 px-3 outline-none" />
                  <span></span>
                </label>
                <div className="two my-10 grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label htmlFor="" className="cols ">
                      Expiration Date
                      <input type="text" placeholder="MM / YY" className="w-full py-3 outline-none border focus:border-red-500 px-3" />
                    </label>
                  </div>
                  <div className="">
                    <label htmlFor="">
                      CV Code
                      <input type="text" placeholder="CVC" className="w-full py-3 outline-none border focus:border-red-500 px-3" />
                    </label>
                  </div>
                </div>
                <label htmlFor="">
                  <input type="text" placeholder="Card Owner Nmae" className="w-full py-3 outline-none border focus:border-red-500 px-3"/>
                </label>
              </div>
              <button type="submit" className="block mx-auto py-3 bg-green-500 text-white w-3/4 font-semibold my-4 rounded-md">Add Payment</button>
            </form>
            <button className="text-white bg-blue-950 italic text-xl font-semibold w-full py-4 mx-auto block rounded-md mt-4">Pay<span className="text-blue-700">Pal</span></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
