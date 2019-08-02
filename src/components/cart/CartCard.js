import React from "react";
import "./cart.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { addToCart, lesToCart } from "../../actions/main";

const CartCard = ({ item, addToCart, lesToCart }) => {
  return (
    <div className="cart_card">
      <div className="cart_card_img">
        <img
          src={require("../../data/images/fruits/" + item.img)}
          alt={item.productName}
        />
      </div>

      <div className="cart_card_item">
        <div className="cart_card_item_name">
          <h2>{item.productName}</h2>
        </div>
        <div className="cart_card_unit_price">
          Rs.{item.price}/{item.measureIn}
        </div>
        <div className="cart_card_total_price">
          Rs.{item.price * item.quantity}
        </div>
      </div>

      <div className="space" />

      <div className="cart_card_unit">
        {item.quantity}
        {item.measureIn}
      </div>

      <div className="cart_card_plus_minus_btn">
        <div className="cart_card_minus_btn" onClick={() => lesToCart(item)}>
          <FontAwesomeIcon className="plus_minus" icon={faMinus} />
        </div>
        <div className="cart_card_plus_btn" onClick={() => addToCart(item)}>
          <FontAwesomeIcon className="plus_minus" icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

CartCard.prototype = {
  addToCart: PropTypes.func.isRequired,
  lesToCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { addToCart, lesToCart }
)(withRouter(CartCard));
