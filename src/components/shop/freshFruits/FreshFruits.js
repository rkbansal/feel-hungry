import React, { Component } from 'react';
import '../shop.css';
import { connect } from 'react-redux';
import Card from '../Card';

class FreshFruits extends Component {
	render() {
		const path = 'fruits';
		return (
			<div className="fresh_fruit">
				<div className="shop_item_container">
					{this.props.productItem.fruits.map((item)=>{
						let v = this.props.cartItems.find(e=>{ return e.productId === item.productId});
						return(
							<Card key={item.productId} item={v?v:item} path={path}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FreshFruits);