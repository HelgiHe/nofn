import {
  FETCH_FEMALE_NAMES,
  FETCH_MALE_NAMES,
  ADD_FEMALE_LETTER,
  SET_SELECTED_SEX,
  IS_FETCHING
} from '../actions/types';

const INITAL_STATE = {
  loading: true,
  letterPos: 0,
  selectedSex: 'female',
  femaleNames: [],
  maleNames: []
};

export default function nameReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case SET_SELECTED_SEX:
      return { ...state, selectedSex: action.payload };
    case FETCH_FEMALE_NAMES:
      return { ...state, loading: true };
    case FETCH_MALE_NAMES:
      return { ...state, maleNames: action.payload };
    case IS_FETCHING:
      return { ...state, loading: true };
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
