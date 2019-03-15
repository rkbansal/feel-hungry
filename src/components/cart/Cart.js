import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CartCard from './CartCard';
import { faPenFancy,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cart extends Component {

	inputChange=(e)=>{
		this.props.addToState({newName: e})
	}
	inputKeyUp=(e)=>{
		if(e.keyCode === 27){
			this.props.addToState({newName: this.props.priorData.listName})
			this.props.addToState({listInputOpen : false})
		}
	}

	changeListName=(e)=>{
		e.stopPropagation();

		this.props.addToState({listInputOpen : true});

		setTimeout(()=>{
			this.foc.focus();
		}, 300);
	}
	render() {
		console.log(this.props.listInputOpen);
		return (
			<div className="cart">
				<div className="cart_header">
					<div className="cart_header_body">
						<div className="cart_header_name">
							<input
								className={(this.props.listInputOpen)?"list_name_input":"hide"}
								onChange={(e)=>this.inputChange(e.target.value)}
								onClick={(e)=>this.changeListName(e)}
								ref={(ip)=>{this.foc = ip}}
								onKeyUp={(e)=>this.inputKeyUp(e)}
								defaultValue={this.props.priorData.listName}
								// autoFocus={this.props.listInputOpen}
							></input>
							<h2 className={(this.props.listInputOpen)?"hide":""}>{this.props.priorData.listName}</h2>
							<FontAwesomeIcon className="fa-Pen" icon={faPenFancy} onClick={(e)=>this.changeListName(e)} />
						</div>
					</div>
				</div>
				<div className="cart_body">
					<div className="yoyo">
						<div className="rr">
							<div className="cart_item_quantity">
								<h4>{this.props.priorData.items.length} Items</h4>
								<div className="cart_empty" onClick={this.props.clearCart}>
									<FontAwesomeIcon className="fa-trash" icon={faTrash} />
									<p>Empty</p>
								</div>
							</div>
						</div>
					</div>
					{this.props.cartItems.map((item)=>{
						return(
							<CartCard key={item.productId} item={item}/>
						)
					})}
				</div>
				<div className="cart_checkout">
					<div className="cart_checkout_total">
						<h2>
							Rs. {this.props.cartItems.map(e => {
								return (e.price * e.quantity)
							}).reduce((a,b)=>{return a + b}, 0)}
						</h2>
						<p>Estimated Cost(Incl GST)</p>
					</div>
					<div className="cart_checkout_btn">
						<div><p>Checkout</p></div>
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
		clearCart: ()=>{
			const action ={type : 'CLEAR_CART'}
			dispatch(action);
		},
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));