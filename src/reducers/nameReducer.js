import { FETCH_FEMALE_NAMES, FETCH_MALE_NAMES } from '../actions/types';

const INITAL_STATE = {
  femaleNames: [],
  maleNames: []
};

export default function nameReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_FEMALE_NAMES:
      return { ...state, femaleNames: action.payload };
    case FETCH_MALE_NAMES:
      return { ...state, maleNames: action.payload };
    default:
      return state;
  }
}
