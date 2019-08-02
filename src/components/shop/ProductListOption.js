import React from "react";
import "./shop.css";

const ProductsListOptions = ({ productClicked, item, isActive }) => {
  return (
    <div className="product_list_department" onClick={productClicked}>
      <p>{item}</p>
      <div className={isActive ? "underline_active" : "underline"} />
    </div>
  );
};

export default ProductsListOptions;
