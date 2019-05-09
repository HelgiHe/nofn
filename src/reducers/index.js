import { combineReducers } from 'redux';
import signUpReducer from './signupReducer';
import nameReducer from './nameReducer';

export default combineReducers({
  signUp: signUpReducer,
  names: nameReducer
});
