import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const Catalogue = () => {
  let location = useLocation();
  let path = location.pathname.replace(/\/product\/.*$/, "");

  return (
    <div>
      <h1>Shop</h1>
      <Routes>
        <Route exact path={`${path}`} element={<Home />} />
        <Route
          exact
          path={`${path}/product/:productId`}
          element={<Details />}
        />
      </Routes>
    </div>
  );
};

export default Catalogue;
