import {combineReducers} from 'redux';
import {reducer as formReducer} from 'the-other-redux-form';
import {routeReducer} from 'redux-simple-router';

export default combineReducers({
  form: formReducer,
  routing: routeReducer
});

