import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const Catalogue = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Catalogue;
