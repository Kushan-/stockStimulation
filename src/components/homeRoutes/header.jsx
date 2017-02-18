import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component{
	
		state = {news: "rbc stock slip 40%" }
		componentDidMount(){
			//Dom has mounted in browser
			console.log("did Mount");
			//ajax call, timers, listner
		}
		componenetWillMount(){
			//component is about to be unmounted
			console.log("will mount");
			
			//clean timer and listner;
		}
	render(){
		return(
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
      				<div className="container">
        				<div className="navbar-header">
          					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            					<span className="sr-only">Toggle navigation</span>
        						<span className="icon-bar"></span>
            					<span className="icon-bar"></span>
        						<span className="icon-bar"></span>
          					</button>
      						<a className="navbar-brand" href="#">Stimulating Your Stock</a>
        				</div>
        			<div id="navbar" className="navbar-collapse collapse">
        				
          				<form className="navbar-form navbar-right">
            				<div className="form-group">
              					<input type="text" placeholder="Email" className="form-control"></input>
            				</div>
            				<div className="form-group">
	              				<input type="password" placeholder="Password" className="form-control"></input>
            				</div>
            				<button type="submit" className="btn btn-success">Sign in</button>
          				</form>
        			</div>
     			 </div>
    		</nav>
    		<div style={{paddingTop: 48+"px",
    paddingBottom: 48+"px"}}>
    			<marquee>	

    				{this.state.news}
    			</marquee>
    		
    		</div>	
		</div>

		)
	}
}

export default Header;
