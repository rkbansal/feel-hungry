import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { faWarehouse,faShoppingCart,faBriefcaseMedical,faListAlt,faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';
import FooterOption from './FooterOption';

class Footer extends Component {
	mapping = {
		"/": "Shop",
		"/shop": "Shop",
		"/cart": "Cart",
		"/deals": "Deals",
		"/list": "List",
		"/profile": "Profile"
	}
	routeApp = (item)=>{
		switch (item) {
			case "Shop":
				this.setState({active:item})
				return this.props.history.push("/");
			case "Cart":
				this.setState({active:item})
				return this.props.history.push("/cart")
			case "Deals":
				this.setState({active:item})
				return this.props.history.push("/deals");
			case "List":
				this.setState({active:item})
				return this.props.history.push("/list");
			case "Profile":
				this.setState({active:item})
				return this.props.history.push("/profile");
			default:
				break;
		}
	}
	render() {
		var a = [["Shop",faWarehouse],["Cart",faShoppingCart],["Deals",faBriefcaseMedical],["List",faListAlt],["Profile",faUserAlt]]

		console.log(this.props.data);

		return (
			<div className="footer">
				{a.map((item,index)=>{
					return(
						<FooterOption
							key={index}
							isActive={item[0] === this.mapping[this.props.location.pathname]}
							item={item}
							onClick={()=>this.routeApp(item[0])}
						/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer));