import React from "react";
import "./shop.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faListAlt,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/main";

const Card = ({ history, addToCart, removeFromCart, item, path }) => {
  const menuCartActive = () => {
    history.push("/cart");
  };
  console.log(item);

  return (
    <div className="card">
      <div className="card_image">
        <img
          src={require("../../data/images/" + path + "/" + item.img)}
          alt={item.productName}
        />
      </div>
      <div className="card_item">
        <div className="card_item_name">{item.productName}</div>
        <div className="card_item_info">
          <div className="card_unit">1{item.measureIn}</div>
          <div className="card_unit_price">Rs.{item.price}</div>
          <FontAwesomeIcon className="" icon={faListAlt} />
        </div>
      </div>
      <div className="card_buttons">
        <div className="card_plus_minus_btn">
          <div
            className={item.quantity === 0 ? "add_btn" : "hide"}
            onClick={() => addToCart(item)}
          >
            <p>ADD</p>
          </div>
          <div
            className={item.quantity === 0 ? "hide" : "card_minus_btn"}
            onClick={() => removeFromCart(item)}
          >
            <FontAwesomeIcon className="plus_minus" icon={faMinus} />
          </div>
          <div className={item.quantity === 0 ? "hide" : "card_unit_btn"}>
            <p>
              {item.quantity}
              {item.measureIn}
            </p>
          </div>
          <div className="card_plus_btn" onClick={() => addToCart(item)}>
            <FontAwesomeIcon className="plus_minus" icon={faPlus} />
          </div>
        </div>
        <div className="card_cart" onClick={menuCartActive}>
          <FontAwesomeIcon className="fa_card_cart" icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
};

Card.prototype = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(withRouter(Card));
