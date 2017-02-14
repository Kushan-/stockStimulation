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
                                    <h1 className="mb20">Trending Discounts and Deals <small><a href="#">View All</a></small></h1>
                                    {this.state.content.map(content=>
                                    	<div className="owl-carousel" id="owl-carousel1" data-items="5">
	                                        <div>
	                                            <div className="product-thumb">
	                                                <header className="product-header">
	                                                    <img src="img/800x600.png" alt="Image Alternative text" title="a turn" />
	                                                </header>
	                                                <div className="product-inner">
	                                                    <h5 className="product-title">{content.symbol}</h5>
	                                                    <p className="product-desciption">Aenean et dolor vulputate aliquet mattis mattis viverra</p>
	                                                    <ul className="product-actions-list">
	                                                        <li><a className="btn btn-sm" href="#"><i className="fa fa-shopping-cart"></i>{content.bidPrice}</a>
	                                                        </li>
	                                                        <li><a className="btn btn-sm"><i className="fa fa-bars"></i>Details</a>
	                                                        </li>
	                                                    </ul>
	                                                </div>
	                                            </div>
                                        	</div>
                                    	</div>
                                	)}
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