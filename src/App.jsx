import React, { lazy, Suspense } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Shipping from "./Pages/Checkout/Shipping";
import Address from "./Pages/Checkout/Address";
import Payment from "./Pages/Checkout/Payment";

const Home = lazy(() => import("./Pages/Home/Home"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const Help = lazy(() => import("./Pages/Help/Help"));
const Account = lazy(() => import("./Pages/Account/Account"));

const App = () => {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/help" element={<Help />} />
					<Route path="/account" element={<Account />} />
					<Route path="/shipping" element={<Shipping />} />
					<Route path="/address" element={<Address />} />
					<Route path="/payment" element={<Payment />} />
				</Routes>
			</Suspense>
			<Footer />
		</div>
	);
};

export default App;
