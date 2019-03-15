import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ListCard from './ListCard';

class ListEvent extends Component {
	render() {
		return (
			<div className="list_event">
				{this.props.data.map((item)=>{
					return(
						<ListCard key={item.id} item={item} />
					)
				})}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListEvent));