import React from 'react';
import ReactDOM from 'react-dom';
import StockCardsList from './StockCardsList.jsx';










export default class StockContent extends React.Component{

	render(){
		console.log(this.props)
		return(
				<div className="container">
			        <div className="col-md-12">
				        <div className="text-center">
			                <div className="row">
			                    <h1 className="mb20">Trending Share <small><a href="#">View All</a></small></h1>                        	
			                		<div className="row">  
			                    		{
			                    			Object.keys(this.props.content).map(index => 
			                    				
			                    				<StockCardsList 
			                    				key={index} 
			                    				content={this.props.content[index]} 
			                    				onClick={this.props.showOverlay}/> 
			                    				
		                    				)
			                    		}
			                    	 </div>
			                    </div>
			                </div>
			            </div>
			        <div className="gap"></div>
			    </div>				
    


			



			)
		}
	
}

