import { fireStoreRef } from '../../config/firebase';
import {
  FETCH_FEMALE_NAMES,
  ADD_FEMALE_LETTER,
  IS_FETCHING,
  SET_NAMES,
  SET_SELECTED_SEX
} from './types';

export const setSelectedSex = sex => {
  return {
    type: SET_SELECTED_SEX,
    payload: sex
  };
};

export const fetchNamesByLetter = (sex = 'femaleNames', letter) => {
  return dispatch => {
    const names = fireStoreRef.collection(sex).doc(letter);
    dispatch({ type: IS_FETCHING });
    names
      .get()
      .then(doc => {
        if (doc.exists) {
          const newNames = doc.data();
          dispatch({ type: SET_NAMES, payload: newNames });
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

// add more names by letter should probably RENAME this
export const getNamesByLetter = (letter = 'A', sex = 'femaleNames') => {
  return dispatch => {
    const names = fireStoreRef.collection('femaleNames').doc(letter);
    dispatch({ type: FETCH_FEMALE_NAMES });
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
