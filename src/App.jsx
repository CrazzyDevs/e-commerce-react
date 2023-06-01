/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import CartPage from "./Components/Pages/Cart/CartPage";

const App = () => {
	return (
		<div className="App">
			<CartPage />
			{/* <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer /> */}
		</div>
	);
};

export default App;
