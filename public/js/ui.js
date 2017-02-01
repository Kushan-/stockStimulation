import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'   //TODO: implement routing concept


import Header from'../components/header.jsx';
import Main from '../components/main.jsx';
import Go from '../components/page_content.jsx'


ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render((
  	<Router history = {browserHistory}>
    	<Route path="/" component={Home} />
    		
		<Route path = "/go" component = {Go} />
  		
  	</Router>
), document.getElementById('saas_body'));
