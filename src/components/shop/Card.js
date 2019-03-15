import React, { Component } from 'react';
import './shop.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faListAlt,faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

class ProductsListItem extends Component {
	menuCartActive=()=>{
		this.props.history.push('/cart');
	}
	render() {
		return (
			<div className="card">
				<div className="card_image">
					<img src={require('../../data/images/'+this.props.path+'/'+this.props.item.img)} alt={this.props.item.productName}></img>
				</div>
				<div className="card_item">
						<div className="card_item_name">{this.props.item.productName}</div>
						<div className="card_item_info">
							<div className="card_unit">1{this.props.item.measureIn}</div>
							<div className="card_unit_price">Rs.{this.props.item.price}</div>
							<FontAwesomeIcon className="" icon={faListAlt} />
						</div>
				</div>
				<div className="card_buttons">
					<div className="card_plus_minus_btn">
						<div className={(this.props.item.quantity === 0)?"add_btn":"hide"} onClick={()=>this.props.addToCart(this.props.item)} >
							<p>ADD</p>
						</div>
						<div className={(this.props.item.quantity === 0)?"hide":"card_minus_btn"} onClick={()=>this.props.lesToCart(this.props.item)}>
							<FontAwesomeIcon className="plus_minus" icon={faMinus} />
						</div>
						<div className={(this.props.item.quantity === 0)?"hide":"card_unit_btn"}><p>{this.props.item.quantity}{this.props.item.measureIn}</p></div>
						<div className="card_plus_btn" onClick={()=>this.props.addToCart(this.props.item)}>
							<FontAwesomeIcon className="plus_minus" icon={faPlus} />
						</div>
					</div>
					<div className="card_cart" onClick={this.menuCartActive}>
						<FontAwesomeIcon className="fa_card_cart" icon={faShoppingCart} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsListItem));