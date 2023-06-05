/* eslint-disable no-unused-vars */
import React from "react";
import Armchair from '../../../assets/images/Armchair.png'
import LoungeChair from '../../../assets/images/LoungeChair.png'

const CartPage = () => {
return (
    <main className=" md:flex md:justify-evenly">
        <div className="">
            <div className="my-8 text-justify center font-bold text-xl text-[#17183B]"> Cart <span className=" ml-3 font-normal text-base text-[#A2A3B1]"> 2 ITEMS</span></div>
            <div className="flex ">
                <div className="flex gap-5">
                <div><img src={Armchair} alt="chair" /></div>
            <div>
                <h2 className="text-[#17183B] font-bold ">Osmond Armchair</h2>
                <p className=" my-5 text-[#A2A3B1]"> Color <span className="text-[#17183B]">Gunnared biege</span></p>
                <div className="flex">
                    <p className="w-36 border rounded py-1 px-5"><i className='pr-5 fa fa-minus' /> 1 <i className='fa fa-plus pl-5 ' /></p>
                <i className="ml-5 mt-2 text-red-500 fa-solid fa-trash" />
                </div>
            </div>
            </div>
            <div className="text-[#17183B] font-bold">$149.99</div>
            </div>
            <div className="border w-full my-10" />
            <div className="flex ">
                <div className="flex gap-5">
                <div><img src={LoungeChair} alt="chair" /></div>
            <div>
                <h2 className="text-[#17183B] font-bold">Meryl Lounge Chair</h2>
                <p className=" my-5 text-[#A2A3B1]"> Color <span className="text-[#17183B]">Lysed bright green</span></p>
                <div className="flex">
                    <p className="w-36 border rounded py-1 px-5"><i className='pr-5 fa fa-minus' /> 1 <i className='fa fa-plus pl-5 ' /></p>
                <i className="ml-5 mt-2 text-red-500 fa-solid fa-trash" />
                </div>
            </div>
            </div>
            <div className="text-[#17183B] font-bold">$169.99</div>
            </div>
            </div>
            <div className="border p-3 md:w-1/4 my-8">
                <p className="font-bold text-xl text-center">Order Summary</p>
                <span className="flex justify-between py-2">
                    <p>Price</p>
                    <p>$319.98</p>
                    </span>
                <span className="flex justify-between py-2">
                    <p>Discount</p>
                    <p>$31.9</p>
                    </span>
                <span className="flex justify-between py-2">
                    <p>Shipping</p>
                    <p className="text-[#3AA39F]">Free</p>
                    </span>
                <span className="flex justify-between py-2">
                    <p>Price</p>
                    <p>$319.98</p>
                    </span>
                <span className="flex justify-between py-2">
                    <p>Coupon Applied</p>
                    <p>$0.00</p>
                    </span>
                    <div className="border w-full my-5" />
                    <span className="flex justify-between py-2">
                    <p>Total</p>
                    <p>$288.08</p>
                    </span>
                    <span className="flex justify-between py-2">
                    <p >Estimated Delivery by</p>
                    <p>01 Feb, 2023</p>
                    </span>
                    <div className=" grid gap-4 justify-items-center">
                    <div className=" w-full relative">
                    <input className=" w-full rounded p-2 my-2 border outline-none" placeholder="Coupon code" />
                    <span className="absolute top-1 right-2 my-2 mr-2 focus:outline-none"><i className="text-lg fa fa-tag " aria-hidden="true" /></span>
                    </div>
                    <button className=" w-full p-2 rounded text-white bg-[#3AA39F]">Proceed to Checkout</button>
                    </div>
            </div>
    </main>
)
}

export default CartPage
