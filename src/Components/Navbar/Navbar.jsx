import { } from "react";
import "./Navbar.css";
import {} from '@mui/material';
import { SearchRounded } from "@mui/icons-material";
import CartContents from "./CartContents";



const Navbar = () => {
	return (
		<div className="Navbar bg-white-500 text-black">
			<div className="container mx-auto flex items-center justify-between py-4">
				{/* Logo or company image here */}
				<label className="Logo">Codax<span>Shop</span></label>
                { /* search box here */}
               <div className='inputBox'>
                 <SearchRounded className="search-icon"/>
                 <input type='text' placeholder='Search'/>
               </div>
               {/* shopping carts items here */}
                <CartContents/>
			</div>
		</div>
	);
};

export default Navbar;
