import { fireStoreRef } from '../../config/firebase';
import { FETCH_FEMALE_NAMES, ADD_FEMALE_LETTER } from './types';

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
