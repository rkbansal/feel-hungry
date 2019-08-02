import React from "react";
import "./cart.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartCard from "./CartCard";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartHeader from "./CartHeader";
import { clearCart } from "../../actions/main";

const Cart = ({ clearCart, priorData, cartItems }) => {
  return (
    <div className="cart">
      {priorData && (
        <div>
          <CartHeader />
          <div className="cart_body">
            <div className="cart_sticky_part">
              <div className="cart_sticky_header">
                <div className="cart_item_quantity">
                  <h4>{priorData.items.length} Items</h4>
                  <div className="cart_empty" onClick={clearCart}>
                    <FontAwesomeIcon className="fa-trash" icon={faTrash} />
                    <p>Empty</p>
                  </div>
                </div>
              </div>
            </div>
            {cartItems.map(item => {
              return <CartCard key={item.productId} item={item} />;
            })}
          </div>
          <div className="cart_checkout">
            <div className="cart_checkout_total">
              <h2>
                Rs.{" "}
                {cartItems
                  .map(e => {
                    return e.price * e.quantity;
                  })
                  .reduce((a, b) => {
                    return a + b;
                  }, 0)}
              </h2>
              <p>Estimated Cost(Incl GST)</p>
            </div>
            <div className="cart_checkout_btn">
              <div>
                <p>Checkout</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.prototype = {
  clearCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  priorData: state.main.priorData,
  cartItems: state.main.cartItems
});

export default connect(
  mapStateToProps,
  { clearCart }
)(withRouter(Cart));
