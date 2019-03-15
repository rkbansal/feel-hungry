import React, { Component } from 'react';
import '../shop.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

class ImageSlide extends Component {
	render() {
		var settings = {
			dots: true
    };
		return (
			<div className="slide_container">
				<Slider {...settings}>
					<div>
						<img className="slide_image" src={require('../../../data/images/offer1.jpg')} alt="abc"></img>
					</div>
					<div>
						<img className="slide_image" src={require('../../../data/images/offer2.jpg')} alt="abc"></img>
					</div>
					<div>
						<img className="slide_image" src={require('../../../data/images/offer3.jpg')} alt="abc"></img>
					</div>
					<div>
						<img className="slide_image" src={require('../../../data/images/offer4.jpg')} alt="abc"></img>
					</div>
					<div>
						<img className="slide_image" src={require('../../../data/images/offer5.jpg')} alt="abc"></img>
					</div>
				</Slider>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageSlide));