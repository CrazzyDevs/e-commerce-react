<<<<<<< HEAD
import { lazy, Suspense } from "react";
=======
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
>>>>>>> 5949382371c2fb23e1fbef298a1309fdac09a8a3
import "./App.css";
import { Route, Routes } from "react-router-dom";

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
          < Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
