import React from 'react';
import ReactDOM from 'react-dom';

class StockCards extends React.Component{
	handleClick = (e) => {
		console.log("button clicked send the props to the pop up")
	}


	render(){
	//console.log(this.props)
	//console.log(this.props.content)
	//console.log(this.props.content.id)
		return(                                    	
		<div className="col-sm-3">
			<div className="card">
					<div className="card-block">
					<h3 className="card-title">{this.props.content.symbol}</h3>
					<ul className="list-group">
						<li className="list-group-item">Last bid = 85.58</li>
								<li className="list-group-item">change = +9.2</li>
								<li className="list-group-item">% change = 25%</li>
						</ul>
						<ul>
							<li className="list-group-item">
								<a className="card-text btn btn-sm"><i className="fa fa-bars"></i> Details</a>	
							</li>
							<li className="list-group-item">
								<a href="#" className="btn btn-primary" onClick={this.handleClick}>Buy/Sell</a>
							</li>
						</ul>
						
					</div>
			</div>
		</div>

		)
	}
	
}

	export default StockCards;






