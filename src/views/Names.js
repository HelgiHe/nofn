import React from 'react';
import firebase from 'firebase';

export default class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alphabet: 'a' };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const db = firebase.firestore();
    const names = db.collection('femaleNames').doc('A');
    names
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('no names begin with currentLetter!');
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
  }
  render() {
    return <p>List of names</p>;
  }
}
