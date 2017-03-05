import React from 'react';
//import ReactDOM from 'react-dom';
import {Link } from 'react-router';


class StockCards extends React.Component{
	
	showOverlay = (e) => {
		
		console.log(this.props)
		console.log("button clicked send the props to the pop up");
		console.log(this.props.content.id +"=id + data="+ this.props.content.symbol);
		this.props.onClick(this.props.content.symbol, this.props.content.id)
	}


	render(){
		console.log(this.props)
		return(                                    	
		<div className="col-sm-3">
 -			<div className="card">
 -					<div className="card-block">
 -					<h3 className="card-title">{this.props.content.symbol}</h3>
 -					<ul className="list-group">
 -						<li className="list-group-item">Last bid = 85.58</li>
 -						<li className="list-group-item">change = +9.2</li>
 -						<li className="list-group-item">% change = 25%</li>
 -					</ul>
 -					<ul>
 -						<li className="list-group-item">
 -							<a className="card-text btn btn-sm"><i className="fa fa-bars"></i> Details</a>	
 -						</li>
 -						<li className="list-group-item">
 -							<a onClick={this.showOverlay.bind(this)}className="card-text btn btn-sm"><i className="fa fa-bars" ></i> Buy/Sell</a>	
 -						</li>
 -					</ul>
 -				</div>
 -			</div>
 -		</div>

		)
	}
	
}

	export default StockCards;






