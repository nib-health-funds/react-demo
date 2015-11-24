
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Route, Router} from 'cianca';

import app from './lib/reducers';

import Home from './lib/components/pages/Home.js';
import About from './lib/components/pages/About.js';
import Quote from './lib/components/pages/Quote.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.store = applyMiddleware(thunk)(createStore)(app, typeof window !== 'undefined' ? window.__state__ : {});
  }

  render() {
    console.log('URL', this.props.url, this.store.getState());
    return (
      <Provider store={this.store}>
        <Router url={this.props.url}>
          <Route name="home" pattern="/" component={Home}/>
          <Route name="about" pattern="/about" component={About}/>
          <Route name="quote" pattern="/quote" component={Quote}/>
        </Router>
      </Provider>
    );
  }

}
