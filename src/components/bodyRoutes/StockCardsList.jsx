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
		<div class="container">

       <section class="col-sm-12">
           <div class="col-sm-12 col-md-6">
               Part for Graph
           </div>
           <div class="col-sm-12 col-md-6 " style="border: black ridge .1em;border-radius: 15px 50px; padding: 20px;
     padding-top: 10px">
               <div >
                   <pre class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 ">Current price</pre><pre class="col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">Symbol</pre>     <pre class="col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-2">Last </pre>
                   <pre class="col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">Change </pre><pre class="col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-2"> %Change</pre>
               </div>
           </div>
       </section>
           </div>
<div class="container-fluid" style="padding: 2%">

    <section class="col-sm-10 col-sm-offset-1 ">
           <div  class="row">

           <div class="form-horizontal">
               <div class="form-group">
               <label class="col-xs-1 text-center">Symbol </label>
                   <label class="col-xs-2  text-center">Last Quantity </label>
                   <label class="col-xs-1 text-center">Bid Size </label>
                   <label class="col-xs-1 text-center">Offer Price</label>
                   <label class="col-xs-1 text-center">Offer Size</label>
                   <label class="col-xs-2 text-center">Previous Close Price</label>
                   <label class="col-xs-1 text-centertext-center">High Price </label>
                   <label class="col-xs-1 text-center">Low Price </label>
                   <label class="col-xs-1 text-center">Trade Volume </label>
               </div>
               <hr>
           </div>
               <div class="form-horizontal">
                   <div class="form-group">
                       <label class="col-xs-1 text-center">RBC </label>
                       <label class="col-xs-2  text-center">123</label>
                       <label class="col-xs-1 text-center">12.132 </label>
                       <label class="col-xs-1 text-center">12.36</label>
                       <label class="col-xs-1 text-center">10</label>
                       <label class="col-xs-2 text-center">11.1023</label>
                       <label class="col-xs-1 text-centertext-cent0er">12.36</label>
                       <label class="col-xs-1 text-center">11.1023</label>
                       <label class="col-xs-1 text-center">12013</label>
                   </div>
                   <hr>
               </div>
           </div>
    </section>
</div>

		)
	}
	
}

	export default StockCards;






