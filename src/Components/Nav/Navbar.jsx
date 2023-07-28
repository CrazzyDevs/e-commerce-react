import { } from "react";
import "./Navbar.css";
import CartContents from "./CartContent";
import SearchBox from "./SearchBox";


const Navbar = ({onSearch}) => {
	return (
		<div className="Navbar bg-white-500 text-black">
			<div className="container mx-auto flex items-center justify-between py-4">
				{/* Logo or company image here */}
				<label className="Logo">Codax<span>Shop</span></label>
                { /* search box component here */}
                 <SearchBox onSearch={onSearch}/>
               {/* shopping carts items here */}
                <CartContents/>
			</div>
		</div>
	);
};

export default Navbar;
