require('@nib-components/react-sass-grid-support');

var React = require('react');
var ReactDOM = require('react-dom');

var cianca = require('cianca');
var Link = cianca.Link;
var Route = cianca.Route;
var Router = cianca.Router;

import Home from './lib/pages/Home.js';
import About from './lib/pages/About.js';
import Quote from './lib/pages/Quote.js';

ReactDOM.render(
  <Router url={window.location.pathname + window.location.search}>
    <Route name="home" pattern="/" component={Home}/>
    <Route name="about" pattern="/about" component={About}/>
    <Route name="quote" pattern="/quote" component={Quote}/>
  </Router>,
  document.getElementById('app')
);
