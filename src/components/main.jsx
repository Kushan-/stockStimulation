import React from 'react';
import ReactDOM from 'react-dom';

import data from '../../data/ss_data.js'
console.log(data)

class Main extends React.Component{
	componentDidMount(){
		$.ajax({
			url: '/data',
			context: this,
			dataType: 'json',
			type: 'GET'
		}).done(function (data) {console.log(data)})
	}
	render(){
		return(
			<div className="container">

			</div>
		)
	}
}

export default Main;
