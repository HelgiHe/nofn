import * as firebase from 'firebase';
let firebaseApiKey = '';
if (process.env.NODE_ENV !== 'production') {
  firebaseApiKey = import('./keys').firebaseApiKey;
}

const config = {
  apiKey:
    process.env.NODE_ENV === 'production'
      ? process.env.firebaseApiKey
      : firebaseApiKey,
  authDomain: 'nofn-4cfa4.firebaseapp.com',
  databaseURL: 'https://nofn-4cfa4.firebaseio.com',
  projectId: 'nofn-4cfa4',
  storageBucket: 'nofn-4cfa4.appspot.com',
  messagingSenderId: '375606112602'
};
firebase.initializeApp(config);

export const fireStoreRef = firebase.firestore();
