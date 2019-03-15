import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faSearch } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

class Header extends Component {
	goToHome=()=>{
		this.props.history.push('/');
	}
	render() {
		return (
			<div className="header">
				<div className="header_nav">
					<FontAwesomeIcon className="header_back" icon={faArrowLeft} />
					<div className="header_logo" onClick={this.goToHome}><h2>GS</h2></div>
					<div className="space"></div>
					<input className={(this.props.searchHide)?"search_input":"hide"} type="text"></input>
					<FontAwesomeIcon className="header_search" icon={faSearch} onClick={this.props.handleSearchHide} />
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
		handleSearchHide : ()=>{
			const action ={ type: 'SEARCH_HIDE'}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));