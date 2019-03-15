import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Priority extends Component {

	focusPriorityOption=()=>{
		
	}
	render() {
		return (
			<div className="priority" onClick={this.focusPriorityOption}>
				<div className={(this.props.isActive)?"round_btn_active round_btn":"round_btn"} style={{"backgroundColor":this.props.item[1]}}></div>
				<p className={(this.props.isActive)?"p":""}>{this.props.item[0]}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Priority));