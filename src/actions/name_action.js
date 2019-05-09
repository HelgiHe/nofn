import { fireStoreRef } from '../../config/firebase';
import { ADD_FEMALE_LETTER } from './types';

export const getNames = (sex = 'femaleNames') => {
  return dispatch => {
    fireStoreRef
      .collection('femaleNames')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };
};

export const getNamesByLetter = (letter = 'A') => {
  return dispatch => {
    const names = fireStoreRef.collection('femaleNames').doc('A');

    names
      .get()
      .then(doc => {
        if (doc.exists) {
          const newNames = doc.data();
          console.log(newNames);
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
