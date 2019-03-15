import React, { Component } from 'react';
import './home.css';
import Header from './Header';
import OneHeader from './OneHeader';
import AppRoute from '../../router/AppRoute';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
	setEverything=()=>{
		this.props.addToState({listInputOpen : false});
		this.props.changeListName();
	}
  render(){
    return (
			<div className="home" onClick={this.setEverything}>
				{(this.props.location.pathname==='/')?<OneHeader />:<Header />}
				<AppRoute />
				<Footer />
			</div>
    );
  }
}

function mapStateToProps(state){
	return{
		...state
	}
}

function mapDispatchToProps(dispatch){
	return{
		changeListName: ()=>{
			const action ={type : 'CHANGE_LIST_NAME'}
			dispatch(action);
		},
		addToState : (value)=>{
			const action={type : "ADD_TO_STATE", value}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));