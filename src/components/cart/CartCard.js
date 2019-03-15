import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class CartCard extends Component {
	render() {
		return (
			<div className="cart_card">
				<div className="cart_card_img">
					<img src={require('../../data/images/fruits/'+this.props.item.img)} alt={this.props.item.productName}></img>
				</div>

				<div className="cart_card_item">
						<div className="cart_card_item_name"><h2>{this.props.item.productName}</h2></div>
						<div className="cart_card_unit_price">Rs.{this.props.item.price}/{this.props.item.measureIn}</div>
						<div className="cart_card_total_price">Rs.{this.props.item.price*this.props.item.quantity}</div>
				</div>

				<div className="space"></div>
				
				<div className="cart_card_unit">{this.props.item.quantity}{this.props.item.measureIn}</div>

				<div className="cart_card_plus_minus_btn">
					<div className="cart_card_minus_btn" onClick={()=>this.props.lesToCart(this.props.item)}>
						<FontAwesomeIcon className="plus_minus" icon={faMinus} />
					</div>
					<div className="cart_card_plus_btn" onClick={()=>this.props.addToCart(this.props.item)}>
						<FontAwesomeIcon className="plus_minus" icon={faPlus} />
					</div>
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
		addToCart : (i)=>{
			const action ={ type: 'ADD_TO_CART', add: i}
			dispatch(action);
		},
		lesToCart : (i)=>{
			const action ={ type: 'ADD_TO_CART', les: i}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartCard));