import React from 'react';
import firebase from 'firebase';

export default class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alphabet: 'a', names: [] };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const db = firebase.firestore();
    const settings = {
      timestampsInSnapshots: true
    };
    db.settings(settings);

    const names = db.collection('femaleNames').doc('A');
    names
      .get()
      .then(doc => {
        if (doc.exists) {
          const newNames = doc.data();
          console.log(newNames);
          this.setState(() => ({ names: newNames.names }));
        } else {
          // doc.data() will be undefined in this case
          console.log('no names begin with currentLetter!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }

  addToNameList(names) {
    this.setState(() => this.setState({ names }));
  }

  renderNames() {
    const { names } = this.state;
    if (!names) {
      return null;
    }
    return names.map(name => {
      return (
        <div key={name.name}>
          <p>{name.name}</p>
          <p>{name.desc}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <p>List of names</p>
        {this.renderNames()}
      </div>
    );
  }
}
