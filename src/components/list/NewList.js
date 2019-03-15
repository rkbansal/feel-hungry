import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Priority from './Priority';

class NewList extends Component {
	constructor(props){
		super(props);
		this.state={
			a:[["High","Red"],["Medium","Yellow"],["Low","Green"]]
		}
	}
	render() {
		return (
			<div className="new_list">
				<div className="new_list_form">
					<div className="new_list_label">
						<p>Add List Name</p>
						<input className="new_list_label_input" type="text" onChange=""></input>
					</div>
					<div className="new_list_label">
						<p>List Type</p>
						<select>
							<option>Specific Date</option>
							<option>Monthly</option>
							<option>Weakly</option>
						</select>
						<input></input>
					</div>
					<div className="set_priority">
						{this.state.a.map((item)=>{
							return(
								<Priority item={item} key={item[0]}/>
							)
						})}
					</div>
				</div>
				<div className="empty_list_btn">
					<div className="add_list_btn" onClick={this.addNewList}>
						<p>Create List</p>
					</div>
					<div className="clear_list">
						<p>Clear List</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewList));