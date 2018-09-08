import { combineReducers } from 'redux';
import signUpReducer from './signupReducer';

export default combineReducers({
  signUp: signUpReducer
});
