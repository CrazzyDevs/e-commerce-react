import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const CheckoutNav = () => {
	return (
		<div className="flex p-5">
			<p className="lg:text-xl md:text-xl text-xl text-gray-400 font-normal cursor-pointer navtext">
				<NavLink to="/address">Address</NavLink>
			</p>
			<TfiAngleRight className="text-sm lg:mx-10 md:mx-10 mx-4 my-auto font-bold text-gray-400" />
			<p className="lg:text-xl  md:text-xl text-xl font-normal text-gray-400 cursor-pointer navtext">
				<NavLink to="/shipping">Shipping</NavLink>
			</p>
			<TfiAngleRight className="text-sm lg:mx-10 md:mx-10 mx-4 my-auto font-bold text-gray-400" />
			<p className="lg:text-xl  md:text-xl text-xl font-normal text-gray-400 cursor-pointer navtext">
				<NavLink to="/payment">Payment</NavLink>
			</p>
		</div>
	);
};

export default CheckoutNav;
