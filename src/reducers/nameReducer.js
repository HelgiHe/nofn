import {
  FETCH_FEMALE_NAMES,
  FETCH_MALE_NAMES,
  ADD_FEMALE_LETTER,
  SET_LETTER_POS,
  SET_HAS_MORE
} from '../actions/types';

const INITAL_STATE = {
  loading: true,
  letterPos: 0,
  nextPos: 1,
  hasMore: false,
  femaleNames: [],
  maleNames: []
};

export default function nameReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_FEMALE_NAMES:
      return { ...state, hasMore: false };
    case FETCH_MALE_NAMES:
      return { ...state, maleNames: action.payload };
    case SET_LETTER_POS:
      return { ...state, letterPos: state.letterPos + 1 };
    case SET_HAS_MORE:
      return { ...state, hasMore: action.payload };
    case ADD_FEMALE_LETTER:
      return {
        ...state,
        loading: false,
        hasMore: false,
        femaleNames: [...state.femaleNames, ...action.payload.names]
      };
    default:
      return state;
  }
}
