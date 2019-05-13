import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  names: nameReducer
});
