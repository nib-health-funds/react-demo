import React from 'react';
const {Route, IndexRoute} = require('react-router');

import App from './components/App';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Quote from './components/pages/Quote';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="quote" component={Quote}/>
  </Route>
);
