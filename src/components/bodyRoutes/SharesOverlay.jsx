import React from 'react';
import {Link} from 'react-router'

class SharesOverlay extends React.Component{



	render(){
		console.log("Overlaying()")
		console.log(this.props)
		return(
			<div className="overlay">
				<div className="overlay-content">
					<div className="container">
				  		<h2>Inline form</h2>
				  		<p>Make the viewport larger than 768px wide to see that all of the form elements are inline, left aligned, and the labels are alongside.</p>
					  	<form className="form-inline">
						    <div className="form-group">
					      		<label >Email:</label>
					      		<input type="email" className="form-control" id="email" placeholder="Enter email"/>
						    </div>
						    <div className="form-group">
					      		<label >Password:</label>
				      			<input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
						    </div>
						    <div className="checkbox">
						      	<label><input type="checkbox"/> Remember me</label>
						    </div>
						    <button type="submit" className="btn btn-default">Submit</button>
					  	</form>
					</div>
				</div>
			</div>                                    	
			
		)
	}
}

export default SharesOverlay;






