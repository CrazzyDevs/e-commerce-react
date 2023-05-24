import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
