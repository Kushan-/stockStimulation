import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'   //TODO: implement routing concept


import Header from './components/homeRoutes/header.jsx'
import Home from './components/homeRoutes/body.jsx';
import SharesOverlay from './components/bodyRoutes/SharesOverlay.jsx';
import NotFound from './notFound.jsx';

ReactDOM.render(<Header />, document.getElementById('ss_header'));
ReactDOM.render(<Home />, document.getElementById('ss_root'));



