import React from 'react';
import ReactDOM from 'react-dom';
import StockContent from '../bodyRoutes/StockContent.js'
import ShareOverlay from '../bodyRoutes/SharesOverlay.jsx'

const pushState = (obj, url) => window.history.pushState(obj, '', url);


class Main extends React.Component{

	state = {
		content: []
		
	}

	componentDidMount(){
		$.ajax({
			url: '/data',
			context: this,
			dataType: 'json',
			type: 'GET'
		}).done(function (res) {
			console.log(res)
			this.setState({

          			content:res
        	});
		})
	}

	componentWillUnmount(){
		//clean timers, listners
	}

	fetchStock = (stockName, stockId) =>{
		
			const url = '/'+stockName+'/'+stockId;
		
			const obj = {currentStockName :  stockName, currentStockId : stockId}
		
		pushState(obj,url);
		
		this.setState({
			currentStockName: stockName,
			currentStockId: stockId
		})
		
	};


	

	 displayPop(){
	 	 
		if(this.state.currentStockId){
			
				
				console.log(this.state.content[this.state.currentStockId]);
			const data= this.state.content[this.state.currentStockId];
			return(<div className="row" ><ShareOverlay stockData={data}/></div>)
		}
		return(<StockContent content={this.state.content} showOverlay={this.fetchContent} />)
				

		}
	



	render(){

	
	
		return(
		<div >
			{this.displayPop()}
		</div>
            
		)
	}
}

export default Main;

/*
className
 display: block
 transition : 0ms ease;
 transform: translate3d(0+"px", 0+"px", 0+"px")
*/