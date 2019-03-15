import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faSearch } from '@fortawesome/free-solid-svg-icons'

class OneHeader extends Component {
	render() {
		return (
			<div className="one_header">
				<div className="infinite_header">
					<FontAwesomeIcon className="back_n_search" icon={faArrowLeft} />
					<div className="space"></div>
					<input className={(this.props.searchHide)?"search_input":"hide"} type="text"></input>
					<FontAwesomeIcon className="back_n_search" icon={faSearch} onClick={this.props.handleSearchHide} />
				</div>
				<h1>Grocery Shop</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(OneHeader);