import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class EmptyList extends Component {
	addNewList=()=>{
		this.props.history.push('/list/new-list');
	}
	render() {
		return (
			<div className="empty_list">
				<div className="empty_list_body">
					<img className="empty_list_body_img" src={require('../../data/images/emptycart.png')} alt=""></img>
					<h2>Your List is Empty</h2>
					<p>Create list and add them to your trolley for an easier shopping experience</p>
				</div>
				<div className="empty_list_btn">
					<div className="add_list_btn" onClick={this.addNewList}>
						<p>Add List</p>
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
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmptyList));