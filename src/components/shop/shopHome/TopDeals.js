import React from "react";
import "../shop.css";
import { connect } from "react-redux";
import Card from "../Card";

const TopDeals = ({ productItemsData, cartItems }) => {
  const path = "fruits";
  return (
    <div className="top_deals">
      <div className="best_selling_item_header">
        <h4>Top Deals</h4>
      </div>
      <div className="best_selling_item_body">
        {productItemsData.fruits.map(item => {
          let v = cartItems.find(e => {
            return e.productId === item.productId;
          });
          return (
            <div
              key={item.productId}
              className="best_selling_item_card"
              // ref={divElement => (this.divElement = divElement)}
            >
              <Card item={v ? v : item} path={path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productItemsData: state.main.productItemsData,
  cartItems: state.main.cartItems
});

export default connect(mapStateToProps)(TopDeals);
