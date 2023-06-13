import { IoIosArrowDown } from "react-icons/io";
import "./sideBar.css";
import Slider from "react-slider";
import { useState } from "react";

const Min = 100;
const Max = 120000;

const SideBar = () => {
	const [value, setValue] = useState([Min, Max]);

	console.log(value);
	return (
		<>
			<div className="w-[270px] ml-10 px-2 pb-20 bg-blue-400 py-2 mt-10 mb-10">
				<div className="flex  w-full mt-2 justify-between">
					<h1 className="text-black text-2xl  font-bold">FILTER BY</h1>
					<p className="text-gray-200">clear All</p>
				</div>
				<div className="w-full">
					<div className="w-full mt-7 flex justify-between">
						<h6 className="flex text-black text-1xl font-bold items-center gap-2">
							<span>
								<IoIosArrowDown />
							</span>{" "}
							CHAIR DESIGN
						</h6>
						<p className="text-gray-200">clear</p>
					</div>
					<ul className="mt-3">
						<li className="font-bold">All Chairs</li>
						<li>Dining Chairs</li>
						<li>Lounge Chairs</li>
						<li>Stools and Bar Stools</li>
						<li>Ottomans and Footstools</li>
						<li>Benches</li>
						<li>Office Chairs</li>
					</ul>
				</div>

				<div className="w-full">
					<div className="w-full mt-7 flex justify-start">
						<h6 className="flex text-black text-1xl font-bold items-center gap-2">
							<span>
								<IoIosArrowDown />
							</span>{" "}
							UPHOLSTERY COLOR
						</h6>
					</div>
					<ul className="w-full grid mt-3 grid-cols-2">
						<li>Red</li>
						<li>Blue</li>
						<li>Orange</li>
						<li>Purple</li>
						<li>Yellow</li>
						<li>Green</li>
						<li>Brown</li>
						<li>Black</li>
						<li>White</li>
						<li>Grey</li>
						<li>Pink</li>
						<li>Beige</li>
					</ul>
				</div>

				<div className="w-full">
					<div className="w-full mt-7 flex justify-start">
						<h6 className="flex text-black text-1xl font-bold items-center gap-2">
							<span>
								<IoIosArrowDown />
							</span>{" "}
							MATERIAL{" "}
						</h6>
					</div>
					<ul className="mt-3">
						<li>Ash</li>
						<li>Beech</li>
						<li>Maple</li>
						<li>Oak</li>
						<li>Pine</li>
						<li>Walnut</li>
						<li>Metal</li>
					</ul>
				</div>

				<div className="w-full">
					<div className="w-full mt-7 flex justify-start">
						<h6 className="flex text-black text-1xl font-bold items-center gap-2">
							<span>
								<IoIosArrowDown />
							</span>{" "}
							PRICE RANGE{" "}
						</h6>
					</div>
					<div className="w-full px-2 flex flex-col gap-4 justify-center mt-3">
						<p>Current Price Value: ${value[1] - value[0]}</p>

						<div className="w-full flex mt-3 justify-center">
							<Slider
								className={"slider"}
								onChange={setValue}
								value={value}
								min={Min}
								max={Max}
							/>
						</div>

						<div className="w-full  mt-2 flex justify-between">
							<p>Min - {value[0]} </p>
							<p>Max - {value[1]}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SideBar;
