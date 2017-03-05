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
		
<div class="container formtext text padd">
    <div class="row">
        <section class="col-xs-12 ">
            <form>
            <fieldset style=" border-radius: 20px;border: 2px solid lightgrey;
    padding: 20px;">
                <legend >Share Infomation</legend>
            <div class="form-horizontal">
                <div class="form-group ">
                    <label class="col-xs-5 col-sm-3 control-label"> Company Name</label>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" id="companyName" required disabled></div><span class="col-xs-1" style="color: red">*</span>
                </div>
            </div>
            <div class="form-horizontal">
                <div class="form-group ">
                    <label class="col-xs-5 col-sm-3 control-label"> Symbol</label>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" id="companySymbol" required disabled></div><span class="col-xs-1" style="color: red">*</span>
                </div>
            </div>
            <div class="form-horizontal">
                <div class="form-group ">
                    <label class="col-xs-5 col-sm-3 control-label"> Offer Price</label>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" id="offerPrice" required disabled></div><span class="col-xs-1" style="color: red">*</span>
                </div>
            </div>
            <div class="form-horizontal">
                <div class="form-group ">
                    <label class="col-xs-5 col-sm-3 control-label"> Offer Size</label>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" id="offerSize" required disabled></div><span class="col-xs-1" style="color: red">*</span>
                </div>
            </div>
            </fieldset>
            <div>
            <fieldset  style=" border-radius: 20px;border: 2px solid lightgrey;
    padding: 20px; ">
                <legend> Credit Information</legend>
                <div class="form-horizontal">
                    <div class="form-group ">
                        <label class="col-xs-5 col-sm-3 control-label">Select Bank</label>
                        <div class="col-xs-8">
                    <select class="btn btn-info ">
                        <option class="" value="tdBank">TD Bank</option>
                        <option value="BMO">Bank of Montereal</option>
                        <option value="CIBC">CIBC</option>
                        <option value="scotiaBank">Scotia Bank</option>
                        <option value="bitCoin">Bit Coin</option>
                    </select>
                </div></div></div>
            <div class="form-horizontal">
                <div class="form-group ">
                    <label class="col-xs-5 col-sm-3 control-label">Account Num.</label>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" id="accountNumber" required ></div><span class="col-xs-1" style="color: red">*</span>
                </div>
                <div class="form-horizontal">
                    <div class="form-group ">
                        <label class="col-xs-5 col-sm-3 control-label">Password</label>
                        <div class="col-xs-8">
                            <input class="form-control" type="password" id="password" required ></div><span class="col-xs-1" style="color: red">*</span>
                    </div>
                </div></div>
                <div class="col-sm-11 col-xs-9 btn-toolbar ">
                    <button  class="btn btn-warning pull-right Cancel" id="Cancel" type="reset" value="Cancel" >Cancel</button>&nbsp; <button class="btn btn-success pull-right Submit" id="Submit" type="submit" >Buy Shares</button>
                </div> </fieldset></div></form>
        </section>
    </div>
</div>
		)
	}
	
}

	export default StockCards;

















