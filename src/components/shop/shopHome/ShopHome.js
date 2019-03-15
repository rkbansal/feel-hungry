import React, { Component } from 'react';
import '../shop.css';
import { connect } from 'react-redux';
import BestSellingItem from './BestSellingItem';
import ImageSlide from './ImageSlide';
import TopDeals from './TopDeals';

class ShopHome extends Component {
	render() {
		return (
			<div className="ShopHome">
				<BestSellingItem />
				<ImageSlide />
				<TopDeals />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopHome);