import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ListRoute from '../../router/ListRoute';

class List extends Component {
	render() {
		return (
			<div className="list">
				<div className="list_header">
					<h2>Shopping List</h2>
				</div>
				<ListRoute />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));