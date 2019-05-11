import {
  FETCH_FEMALE_NAMES,
  FETCH_MALE_NAMES,
  ADD_FEMALE_LETTER
} from '../actions/types';

const INITAL_STATE = {
  loading: true,
  letterPos: 0,
  femaleNames: [],
  maleNames: []
};

export default function nameReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_FEMALE_NAMES:
      return { ...state, loading: true };
    case FETCH_MALE_NAMES:
      return { ...state, maleNames: action.payload };
    case ADD_FEMALE_LETTER:
      return {
        ...state,
        letterPos: state.letterPos + 1,
        femaleNames: [...state.femaleNames, ...action.payload.names],
        loading: false
      };
    default:
      return state;
  }
}
