import React, { Component } from 'react';
import './shop.css';
import { withRouter } from 'react-router-dom';

class ProductsListOptions extends Component {
	render() {
		return (
			<div  className="product_list_department" onClick={this.props.onClick}>
				<p>{this.props.item}</p>
				<div className={(this.props.isActive)?"underline_active":"underline"}></div>
			</div>
		)
	}
}

export default withRouter(ProductsListOptions);