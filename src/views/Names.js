import React from 'react';
import { FirebaseContext } from '../context';

class Names extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alphabet: 'a', names: [] };
  }

  componentDidMount() {
    console.log(this.props);
    // this.fetchData();
    // this.getDocument();
  }

  getDocument() {
    const { db } = this.props.firebase;

    db.collection('femaleNames')
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
  }

  fetchData() {
    const { db } = this.props.firebase;

    const bla = db.collection('femaleNames');
    bla.get();

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
        <h4>List of names</h4>
        {this.renderNames()}
      </div>
    );
  }
}

export default function NamesWithContext(props) {
  return (
    <FirebaseContext.Consumer>
      {context => <Names {...props} firebase={context} />}
    </FirebaseContext.Consumer>
  );
}
