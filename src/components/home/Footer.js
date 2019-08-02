import React from "react";
import { withRouter } from "react-router-dom";
import {
  faWarehouse,
  faShoppingCart,
  faBriefcaseMedical,
  faListAlt,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";

import "./home.css";
import FooterOption from "./FooterOption";

const Footer = ({ location, history }) => {
  const mapping = {
    "": "Shop",
    shop: "Shop",
    cart: "Cart",
    deals: "Deals",
    list: "List",
    profile: "Profile"
  };
  const routeApp = item => {
    switch (item) {
      case "Shop":
        return history.push("/");
      case "Cart":
        return history.push("/cart");
      case "Deals":
        return history.push("/deals");
      case "List":
        return history.push("/list");
      case "Profile":
        return history.push("/profile");
      default:
        break;
    }
  };

  const a = [
    ["Shop", faWarehouse],
    ["Cart", faShoppingCart],
    ["Deals", faBriefcaseMedical],
    ["List", faListAlt],
    ["Profile", faUserAlt]
  ];

  return (
    <div className="footer">
      {a.map((item, index) => {
        console.log(location.pathname.split("/")[1]);

        return (
          <FooterOption
            key={index}
            isActive={item[0] === mapping[location.pathname.split("/")[1]]}
            item={item}
            onClick={() => routeApp(item[0])}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Footer);
