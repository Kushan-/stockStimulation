import React from 'react';
import ReactDOM from 'react-dom';
import StockCards from './StockCards.jsx'


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
			this.setState({
          			content:res.share
        	});
		})
	}



	render(){

	console.log(this.state.content);

		return(
            <div className="container">
                        <div className="col-md-12">
                            <div className="text-center">
                                <div className="row">
                                    <h1 className="mb20">Trending Share <small><a href="#">View All</a></small></h1>
                                    	<div className="row">
                                    	{this.state.content.map((content, key) =>  
                                    		<StockCards content={content} key={content.id}/>

                                    	)}

                                    	
										</div>
                                	
                                </div>
                            </div>
                        </div>
                    <div className="gap"></div>
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