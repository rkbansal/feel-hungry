import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';

class FooterOption extends Component {
	render() {
		return (
			<div className="footer_icon" onClick={this.props.onClick}>
				<FontAwesomeIcon className={(this.props.isActive)?"fa-icon footer_active_icon":"fa-icon"} icon={this.props.item[1]} />
				<p className={(this.props.isActive)?"footer_active_icon":""}>{this.props.item[0]}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterOption));