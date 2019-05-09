import {
  FETCH_FEMALE_NAMES,
  FETCH_MALE_NAMES,
  FETCH_FEMALE_LETTER,
  FETCH_MALE_LETTER,
  ADD_FEMALE_LETTER
} from '../actions/types';

const INITAL_STATE = {
  loading: true,
  femaleNames: [],
  maleNames: []
};

export default function nameReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_FEMALE_NAMES:
      return { ...state, femaleNames: action.payload };
    case FETCH_MALE_NAMES:
      return { ...state, maleNames: action.payload };
    case ADD_FEMALE_LETTER:
      return {
        ...state,
        loading: false,
        femaleNames: [...state.femaleNames, ...action.payload.names]
      };
    default:
      return state;
  }
}
