import React from 'react'
import { FiTag } from "react-icons/fi";


function OrderSummary() {
  return (
    <div>
      <div className="order mx-1 pt-10">
            <h1 className="font-bold lg:text-3xl md:text-2xl text-3xl">Order Summary</h1>
            <div className="stock border-b border-gray-200">
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">Price</p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">$319.98</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">Discount</p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">$31.9</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">Shipping</p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg text-green-300">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">Coupon Applied</p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">$0.00</p>
              </div>
            </div>
            <div className="total">
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">TOTAL</p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">$288.08</p>
              </div>
              <div className="flex justify-between">
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">
                  Estimated Delivery by
                </p>
                <p className="lg:my-4 md:my-2 my-4 font-medium text-lg">7 August, 2023</p>
              </div>
              <form>
                <div className="flex border w-full py-3 px-2">
                  <input
                    type="text"
                    required
                    placeholder="Coupon Code"
                    className="outline-none required-field"
                  />
                  <span>
                    <FiTag className="mt-1 ml-24 text-2xl" />
                  </span>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default OrderSummary
