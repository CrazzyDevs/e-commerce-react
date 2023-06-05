import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const Home = lazy(() => import("./Pages/Home/Home"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const Help = lazy(() => import("./Pages/Help/Help"));
const Account = lazy(() => import("./Pages/Account/Account"));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
