import React, { Component } from 'react';
import '../shop.css';
import { connect } from 'react-redux';
import Card from '../Card';

class BestSellingItem extends Component {
	render() {
		const path = 'fruits';
		return (
			<div className="best_selling_item">
				<div className="best_selling_item_header">
					<h4>Best Selling Item</h4>
					</div>
					<div className="best_selling_item_body">
						{this.props.productItem.fruits.map((item)=>{
							let v = this.props.cartItems.find(e=>{ return e.productId === item.productId});
							return(
								<div key={item.productId} className="best_selling_item_card" ref={ (divElement) => this.divElement = divElement}>
								<Card item={v?v:item} path={path}/>
								</div>
							)
						})}
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BestSellingItem);