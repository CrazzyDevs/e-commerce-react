import { FiSearch } from "react-icons/fi";
import CartContents from "../CartContent";
import "./Navbar.css";
const Nav = () => {
	return (
		<section className="w-[100%]">
			<div className="w-full flex items-center justify-between px-6 py-[15px] gap-3">
				<h1 className="Logo">
					Codax<span>Shop</span>
				</h1>
				<div className="border mx-auto rounded-md flex items-center justify-center lg:w-full max-w-[500px] p-2">
					<FiSearch className="text-xl" />
					<input
						type="text"
						placeholder="Search"
						className="outline-none focus-none lg:w-full w-[200px] bg-transparent px-2 text-black placeholder-black"
					/>
				</div>
				<CartContents />
			</div>
		</section>
	);
};

export default Nav;
