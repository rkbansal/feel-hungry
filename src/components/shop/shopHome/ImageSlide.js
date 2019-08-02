import React from "react";
import "../shop.css";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const ImageSlide = () => {
  let settings = { dots: true };
  return (
    <div className="slide_container">
      <Slider {...settings}>
        <div>
          <img
            className="slide_image"
            src={require("../../../data/images/offer1.jpg")}
            alt="abc"
          />
        </div>
        <div>
          <img
            className="slide_image"
            src={require("../../../data/images/offer2.jpg")}
            alt="abc"
          />
        </div>
        <div>
          <img
            className="slide_image"
            src={require("../../../data/images/offer3.jpg")}
            alt="abc"
          />
        </div>
        <div>
          <img
            className="slide_image"
            src={require("../../../data/images/offer4.jpg")}
            alt="abc"
          />
        </div>
        <div>
          <img
            className="slide_image"
            src={require("../../../data/images/offer5.jpg")}
            alt="abc"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlide;
