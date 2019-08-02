import React from "react";
import "./shop.css";
import ProductList from "./ProductList";
import ShopRoute from "../../router/ShopRoute";

const Shop = () => {
  return (
    <div className="shop">
      <ProductList />
      <ShopRoute />
    </div>
  );
};

export default Shop;
