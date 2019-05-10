import { fireStoreRef } from '../../config/firebase';
import {
  SET_LETTER_POS,
  FETCH_FEMALE_NAMES,
  ADD_FEMALE_LETTER,
  SET_HAS_MORE
} from './types';

export const incrementLetterPos = () => {
  return {
    type: SET_LETTER_POS
  };
};

export const setHasMore = bool => {
  return { type: SET_HAS_MORE, payload: bool };
};

export const getNamesByLetter = (letter = 'A', sex = 'femaleNames') => {
  return dispatch => {
    const names = fireStoreRef.collection('femaleNames').doc(letter);

    names
      .get()
      .then(doc => {
        if (doc.exists) {
          const newNames = doc.data();
          dispatch({ type: ADD_FEMALE_LETTER, payload: newNames });
        } else {
          // doc.data() will be undefined in this case
          console.log('no names begin with currentLetter!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  };
};
