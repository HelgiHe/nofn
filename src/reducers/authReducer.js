import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_REPEAT_CHANGED
} from '../actions/types';

const INITAL_STATE = {
  email: '',
  password: '',
  repeatPassword: ''
};

export default function authReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PASSWORD_REPEAT_CHANGED:
      return { ...state, repeatPassword: action.payload };
    default:
      return state;
  }
}
