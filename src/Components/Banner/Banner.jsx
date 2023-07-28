// import {} from "react";
// import "./Banner.css";

// function Banner({ link, name, discount }) {
// 	return (
// 		<div className="bannerContent">
// 			<h2 className="text-4xl font-bold lg:w-[500px] leading-[50px]">
// 				Shop Affordable and Quality Products {name}
// 			</h2>
// 			<p className="mt-4">
// 				Get free delivery for every <span>${discount}</span> furniture
// 				purchased
// 			</p>
// 			<a
// 				href="/products"
// 				className="text-xl mt-2 bg-[#90EE90] text-black rounded-xl shadow-lg hover:bg-black hover:text-[#90EE90] transistion-all duration-300 hover:shadow-2xl px-6 py-2"
// 			>
// 				Shop Now!
// 			</a>
// 		</div>
// 	);
// }

// export default Banner;
import {} from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

function Banner({ discount }) {
      return (
        <div className='bannerContent'>
          <h3>Shop Affordable and Quality Products</h3>
          <p>Get free delivery for every <span>${discount}</span> furniture purchased</p>
          <p>Lorem Lorem</p>
          <Link to="/Products">
            <a className='text-xl mt-2 bg-[#90EE90] text-black 
			rounded-xl shadow-lg hover:bg-black hover:text-[#90EE90] 
			transistion-all duration-300 
			hover:shadow-2xl px-6 py-2'>Shop Now!</a>
          </Link>
        </div>
      )
}

export default Banner
