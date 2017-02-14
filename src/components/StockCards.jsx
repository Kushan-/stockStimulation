import React from 'react';
import ReactDOM from 'react-dom';

class StockCards extends React.Component{



	render(){
		return(
			<div className="owl-carousel owl-theme" id="owl-carousel1" data-items="5" style={{opacity: 1}}>
			    <div className="owl-wrapper-outer">
			    	<div className="owl-wrapper" style={{width: 3520 + "px", left: 0 + "px"}}>

			    		<div className="owl-item" style={{width: 216+"px"}}>
				    		<div>
			                	<div className="product-thumb">
			                        <header className="product-header">
			                            <img src="../../public/images/800x600.png" alt="Image Alternative text" title="Gamer Chick"></img>
			                        </header>
			                        <div className="product-inner">
			                            <h5 className="product-title"></h5>
			                            <p className="product-desciption">Metus orci fusce integer ornare egestas montes tortor</p>
			                            <ul className="product-actions-list">
			                                <li><a className="btn btn-sm" href="#"><i className="fa fa-shopping-cart"></i> To Cart</a></li>
			                                <li><a className="btn btn-sm"><i className="fa fa-bars"></i> Details</a></li>
			                            </ul>
			                        </div>
			                	</div>
			            	</div>
			    		</div>	
			    	</div>	
				</div>
			</div>	
		)
	}
	
}

	export default StockCards;






