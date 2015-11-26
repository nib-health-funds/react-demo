import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function(initialState = {}) {
  return applyMiddleware(thunk)(createStore)(reducer, initialState);
}
