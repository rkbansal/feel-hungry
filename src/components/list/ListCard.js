import React, { Component } from 'react';
import './list.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Swipeout from 'rc-swipeout';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ListCard extends Component {
	getDate=()=>{
		let date = new Date(this.props.item.date)
		const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
		return ({date: date.getDate(), month: month[date.getMonth()]})
	}
	goToCard=(item)=>{
		this.props.priorityChange(item)
		this.props.history.push('/cart');
	}
	render(){
		console.log(this.getDate());
		console.log(this.props.data);
		 
		return(
			<div className="list_card">
				<div className="list_card_date">
					<h3>{this.getDate().date}</h3>
					<p>{this.getDate().month}</p>
				</div>
				<div className="kk">
					<Swipeout
						
						right={[
							{
								text: <FontAwesomeIcon className="fa-times" icon={faTimes}  />,
								onPress:() => this.props.removeList(this.props.item),
								style: { backgroundColor: 'red', color: 'white' },
								className: 'custom-class-2'
							}
						]}
						onOpen={() => console.log('open')}
						onClose={() => console.log('close')}
					>
					<div className="list_card_body" onClick={()=>this.goToCard(this.props.item)}>
						<div className="list_card_total_items">
							<h4>{this.props.item.items.length} Item</h4>
						</div>
						<div className="list_card_name">
							<h2>{this.props.item.listName}</h2>
						</div>
						<div className="list_card_total">
							<h3>Rs. {this.props.item.items.map(e=>{
								return this.props.productItem.fruits.find(lo=>{return lo.productId === e.productId}).price * e.count
								}).reduce((a,b)=>{return a + b}, 0)}
							</h3>
						</div>
					</div>
					</Swipeout>
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
		removeList : (item)=>{
			const action={type : "REMOVE_LIST", pass : item}
			dispatch(action);
		},
		priorityChange :(item)=>{
			const action ={type : "CHANGE_PRIORITY", pass : item}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListCard));