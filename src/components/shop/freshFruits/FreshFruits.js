import React from "react";
import "../shop.css";
import { connect } from "react-redux";
import Card from "../Card";

const FreshFruits = ({ productItem, cartItems }) => {
  const path = "fruits";
  return (
    <div className="fresh_fruit">
      <div className="shop_item_container">
        {productItem.fruits.map(item => {
          let v = cartItems.find(e => {
            return e.productId === item.productId;
          });
          return <Card key={item.productId} item={v ? v : item} path={path} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productItem: state.main.productItem,
  cartItems: state.main.cartItems
});

export default connect(mapStateToProps)(FreshFruits);
