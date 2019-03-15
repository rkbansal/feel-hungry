import React, { Component } from 'react';
import './shop.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductListOption from './ProductListOption';

class ProductsList extends Component {
	state = {
		active : ""
	}
	routeList = (item)=>{
		switch (item) {
			case "Fresh Fruits":
				this.setState({active:item})
				return this.props.history.push("/shop/fresh-fruits");
			case "Dry Fruits":
				this.setState({active:item})
				return this.props.history.push("/shop/dry-fruits")
			case "Fresh Vegetables":
				this.setState({active:item})
				return this.props.history.push("/shop/fresh-veg");
			case "Pre Packed Veg":
				this.setState({active:item})
				return this.props.history.push("/shop/pre-packed-ved");
			case "Sugar N Spice":
				this.setState({active:item})
				return this.props.history.push("/shop/sugar-n-spice");
			default:
				break;
		}
	}
	render() {
		var listItems= ["Fresh Fruits","Dry Fruits","Fresh Vegetables","Pre Packed Veg","Sugar N Spice"]
		return (
			<div className={(this.props.path==='/')?"product_list_sticky":"product_list"}>
				<div className="product_list_container">
					{listItems.map((item,index)=>{
						return(
							<ProductListOption
								key={index}
								item={item}
								isActive={this.props.path!=='/' && this.state.active === item}
								onClick={()=>this.routeList(item)}
							/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsList));