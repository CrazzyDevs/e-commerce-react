import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./Products.css";
import Skeleton from "../../Components/Skeleton/Skeleton";
import ProductModal from "../../Components/ProductModal/ProductModal";
import { Modal } from "antd";
import SideBar from "../../Components/ProductLeft/SideBar";

const SkeletonProduct = () => <Skeleton />;

const LazyProduct = React.lazy(() =>
	import("../../Components/Product/Product")
);

const Products = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [products, setProducts] = useState([]);
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://api.escuelajs.co/api/v1/products"
				);
				setProducts(response.data);
			} catch (error) {
				console.log("Error fetching products:", error);
			}
		};

		fetchData();
	}, []);

	const handleModalOpen = (product) => {
		setSelectedProduct(product);
		setSelectedImage(product.images[0]); // Set the first image as the selected image
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleModalContentClick = (e) => {
		e.stopPropagation(); // Prevent event bubbling to modal background
	};

	const handleImagePreviewClick = (image) => {
		setSelectedImage(image);
	};

	const showMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className="Products">
			{/* menu icon */}
			<div className="MenuIcon">
				{menu ? (
					<i className="fas fa-times" onClick={showMenu}></i>
				) : (
					<i className="fas fa-bars" onClick={showMenu}></i>
				)}
			</div>

			<div className="ProductConainer">
				{window.innerWidth < 768 ? (
					// Modal
					<AnimatePresence>
						<ProductModal
							isOpen={isModalOpen}
							selectedProduct={selectedProduct}
							selectedImage={selectedImage}
							onClose={handleModalClose}
							onContentClick={handleModalContentClick}
							onImagePreviewClick={handleImagePreviewClick}
							className="ProductModal Mobile ProductLeft"
						/>
						<Modal
							title="Menu"
							open={menu}
							onCancel={showMenu}
							footer={null}
							width={200}
						>
							<div className="ProductLeft">
								<SideBar />
							</div>
						</Modal>
					</AnimatePresence>
				) : null}
				<div className="ProductLeft">
					<SideBar />
				</div>
				<div className="ProductRight">
					{products.map((product) => (
						<Suspense fallback={<SkeletonProduct />} key={product.id}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => handleModalOpen(product)}
								className="ProductItem"
							>
								<LazyProduct data={product} />
							</motion.div>
						</Suspense>
					))}
				</div>
				<AnimatePresence>
					<ProductModal
						isOpen={isModalOpen}
						selectedProduct={selectedProduct}
						selectedImage={selectedImage}
						onClose={handleModalClose}
						onContentClick={handleModalContentClick}
						onImagePreviewClick={handleImagePreviewClick}
						products={products} // Pass the fetched products to the modal component
					/>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Products;
