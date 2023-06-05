import React from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
	return (
		<div className="Products">
			<div className="ProductsContainer">
				<div className="ProductLeft">left</div>
				<div className="ProductRight">
					<Product
                    data
                    />
				</div>
			</div>
		</div>
	);
};

export default Products;
