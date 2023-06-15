import React from "react";
import "./Product.css";

const Product = ({ data }) => {
	const { images, title, price, description } = data;
	const image = images[0];

	return (
		<div className="Product">
			<div className="ProductImage">
				<img src={image} alt={title} className="" />
			</div>
			<div className="ProductDetails">
				<h2>{title}</h2>
				<p className="ProductPrice">${price}</p>
			</div>
		</div>
	);
};

export default Product;
