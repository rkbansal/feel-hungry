import React, { Component } from 'react';
import './shop.css';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import ShopRoute from '../../router/ShopRoute';

class Shop extends Component {
	render() {
		return (
			<div className="shop">
				<ProductList path={this.props.location.pathname} />
				<ShopRoute />
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);