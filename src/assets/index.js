//require('@nib-components/react-sass-grid-support');

import React from 'react';
import {render} from 'react-dom';

import App from './App';

render(
  <App url={window.location.pathname + window.location.search}/>,
  document.querySelector('#content')
);
