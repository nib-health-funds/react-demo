//require('@nib-components/react-sass-grid-support');

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {syncReduxAndRouter} from 'redux-simple-router';

import createStore from './lib/createStore';
import routes from './lib/routes.jsx';

const store = createStore(window.__state__ || {});
const history = createHistory();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.querySelector('#content')
);
