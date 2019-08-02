import React from "react";
import "../shop.css";
import BestSellingItem from "./BestSellingItem";
import ImageSlide from "./ImageSlide";
import TopDeals from "./TopDeals";

const ShopHome = () => {
  return (
    <div className="ShopHome">
      <BestSellingItem />
      <ImageSlide />
      <TopDeals />
    </div>
  );
};

export default ShopHome;
