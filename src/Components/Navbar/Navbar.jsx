import React from "react";
import "./Navbar.css";
import { navbarData } from "../../Data";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="Navbar bg-gray-900 text-white">
			<div className="container mx-auto flex items-center justify-between py-4">
				<div className="text-xl font-bold">Logo</div>
				<div className="flex items-center">
					<div className="mr-4">
						<input
							type="text"
							placeholder="Search"
							className="px-2 py-1 bg-gray-800 rounded"
						/>
					</div>
					<div className="flex items-center">
						{navbarData.map((item, index) => (
							<div key={index} className="ml-4">
								<Link to={item.path} className="text-white hover:text-gray-400">
									{item.title}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
