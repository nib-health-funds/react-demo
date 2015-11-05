//require('@nib-components/react-sass-grid-support');

import React from 'react';
import {render} from 'react-dom';

import {Route} from 'cianca';
import {Router} from 'cianca';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import app from './lib/reducers';

import Home from './lib/components/pages/Home.js';
import About from './lib/components/pages/About.js';
import Quote from './lib/components/pages/Quote.js';

let store = createStore(app);

render(
  <Provider store={store}>
    <Router url={window.location.pathname + window.location.search}>
      <Route name="home" pattern="/" component={Home}/>
      <Route name="about" pattern="/about" component={About}/>
      <Route name="quote" pattern="/quote" component={Quote}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
