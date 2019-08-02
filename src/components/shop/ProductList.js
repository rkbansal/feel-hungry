import React, { useState } from "react";
import "./shop.css";
import { withRouter } from "react-router-dom";
import ProductListOption from "./ProductListOption";

const ProductsList = ({ history, location }) => {
  const [state, setState] = useState({ active: "" });
  const routeList = item => {
    switch (item) {
      case "Fresh Fruits":
        setState({ ...state, active: item });
        return history.push("/shop/fresh-fruits");
      case "Dry Fruits":
        setState({ ...state, active: item });
        return history.push("/shop/dry-fruits");
      case "Fresh Vegetables":
        setState({ ...state, active: item });
        return history.push("/shop/fresh-veg");
      case "Pre Packed Veg":
        setState({ ...state, active: item });
        return history.push("/shop/pre-packed-ved");
      case "Sugar N Spice":
        setState({ ...state, active: item });
        return history.push("/shop/sugar-n-spice");
      default:
        break;
    }
  };

  var listItems = [
    "Fresh Fruits",
    "Dry Fruits",
    "Fresh Vegetables",
    "Pre Packed Veg",
    "Sugar N Spice"
  ];
  return (
    <div
      className={
        location.pathname === "/" ? "product_list_sticky" : "product_list"
      }
    >
      <div className="product_list_container">
        {listItems.map((item, index) => {
          return (
            <ProductListOption
              key={index}
              item={item}
              isActive={location.pathname !== "/" && state.active === item}
              productClicked={() => routeList(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(ProductsList);
