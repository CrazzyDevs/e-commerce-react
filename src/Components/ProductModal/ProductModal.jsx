import React, { useState } from "react";
import "./ProductModal.css";
import { Modal } from "antd";

const ProductModal = ({
	isOpen,
	selectedProduct,
	selectedImage,
	onClose,
	onContentClick,
	onImagePreviewClick,
}) => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);
	const [isLoading, setIsLoading] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const addToCart = () => {
		// Add to cart (local storage)
		const existingProduct = cart.find(
			(product) => product.id === selectedProduct.id
		);
		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			cart.push({ ...selectedProduct, quantity: 1 });
		}
		setCart([...cart]);
		localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage with the updated cart

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setShowSuccessMessage(true);
			setTimeout(() => {
				setShowSuccessMessage(false);
				// Update the availability of the product in the cart
				setCart([...cart]);

				// Simulate updating the database after 4 seconds
				setTimeout(() => {
					// Perform the database update here
					console.log("Updating the database...");

					setIsLoading(false); // Set isLoading to false to change the spinner to "Product is in cart"

					onClose(); // Close the modal after success message disappears
				}, 3000);
			}, 2000);
		}, 2000);
	};

	const buyNow = () => {
		console.log("Buy now");
	};

	if (!isOpen) {
		return null;
	}

	const cartLength = cart.reduce(
		(total, product) => total + product.quantity,
		0
	);
	const totalAmount = cart.reduce(
		(total, product) => total + product.price * product.quantity,
		0
	);

	// Check if selected product is already in the cart
	const isInCart = cart.some((product) => product.id === selectedProduct.id);

	const reviewsStars = (rating) => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				stars.push(<i className="fas fa-star"></i>);
			} else {
				stars.push(<i className="far fa-star"></i>);
			}
		}

		return stars;
	};

	return (
		<div className="Modal" onClick={onClose}>
			<Modal
				title={
					<>
						<div className="CartInfo">
							<div className="SelectedTitle">{selectedProduct.title}</div>
							<div className="CartInfoAmount">
								<i className="fas fa-info-circle"></i>
								<span className="CartLength">
									{cartLength} items in the cart
								</span>
								(<span className="CartAmount">${totalAmount}</span>)
							</div>
						</div>
					</>
				}
				open={isOpen}
				onCancel={onClose}
				footer={null}
				width={1000}
				centered
				wrapClassName="ModalWrapper"
			>
				{/* Modal Content */}
				<div className="ModalContent" onClick={onContentClick}>
					<div className="ModalLeft">
						<div className="ModalImage">
							<img src={selectedImage} alt={selectedProduct.title} />
						</div>
						<div className="ImagePreview">
							{selectedProduct.images.map((image, index) => (
								<div
									className="ImagePreviewItem"
									key={index}
									onClick={() => onImagePreviewClick(image)}
								>
									<img src={image} alt={selectedProduct.title} />
								</div>
							))}
						</div>
					</div>
					<div className="ModalRight">
						<div className="ModalDetails">
							<div className="ModalTop">
								<h2 className="ModalTitle">{selectedProduct.title}</h2>
								{selectedProduct.category && (
									<span className="ModalCategory">
										{selectedProduct.category.name}
									</span>
								)}
								<p className="ModalPrice">${selectedProduct.price}</p>
								{showSuccessMessage && (
									<div className="SuccessMessage">
										<i className="fas fa-check-circle text-green-500"></i>{" "}
										&nbsp; Added to cart!
									</div>
								)}
								<div className="ModalButtons">
									{isInCart ? (
										<>
											{isLoading ? (
												<>
													<button className="ModalButton">
														<i class="fa-solid fa-circle-notch fa-spin"></i>{" "}
														&nbsp; Adding...
													</button>
												</>
											) : (
												<div className="CartMessage text-green-500 font-bold text-sm flex items-center py-1 px-2 rounded-md">
													<i className="fas fa-info-circle"></i> &nbsp; Product
													is in the cart
												</div>
											)}
											<button className="ModalButton" onClick={buyNow}>
												<i className="fas fa-shopping-bag"></i> &nbsp; checkout
											</button>
										</>
									) : (
										<>
											<button
												className="ModalButton"
												onClick={addToCart}
												disabled={isLoading}
											>
												{isLoading ? (
													<>
														<i class="fa-solid fa-circle-notch fa-spin"></i>{" "}
														&nbsp; Adding...
													</>
												) : (
													<>
														<i className="fas fa-shopping-cart"></i> &nbsp; Add
														to cart
													</>
												)}
											</button>

											<button className="ModalButton" onClick={buyNow}>
												<i className="fas fa-shopping-bag"></i> &nbsp; checkout
											</button>
											<i
												className="fas fa-heart"
												style={{ fontSize: "20px", marginLeft: "10px" }}
											></i>
										</>
									)}
								</div>
							</div>
							<div className="Reviews">
								<div className="Stars text-yellow-500">{reviewsStars(4)}</div>
								<div className="ReviewCount">3,000 reviews</div>
							</div>
							<div className="Material">
								{/* tailwind */}
								<h3 className="text-1xl font-bold text-gray-700">Material</h3>
								<p>{selectedProduct.material || "Not available"}</p>
							</div>
							<p>
								<i className="far fa-calendar-alt"></i> &nbsp;{" "}
								{selectedProduct.createdAt}
								Delivery by: <span style={{ color: "green" }}>Friday</span>
							</p>
							<div className="ModalBottom">
								<div className="ModalDescription">
									<h3>Description</h3>
									<p>{selectedProduct.description}</p>
								</div>
								<div className="Features">
									<h3>Features</h3>
									<ul className="text-sm text-gray-700 list-disc list-inside pl-2">
										<li>Feature 1</li>
										<li>Feature 2</li>
										<li>Feature 3</li>
										<li>Feature 4</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ProductModal;
