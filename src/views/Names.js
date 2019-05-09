import React from 'react';
import { connect } from 'react-redux';
import { getNames, getNamesByLetter } from '../actions';

class Names extends React.Component {
  componentDidMount() {
    this.props.getNamesByLetter();
  }

  renderNames() {
    const { femaleNames, maleNames } = this.props;

    return femaleNames.map(name => {
      return (
        <div key={name.name}>
          <p>{name.name}</p>
          <p>{name.desc}</p>
        </div>
      );
    });
  }
  render() {
    const { loading } = this.props;
    if (loading) {
      return <p>loading</p>;
    }
    return (
      <div>
        <h4>List of names</h4>
        {this.renderNames()}
      </div>
    );
  }
}

const mapStateToProps = ({ names }) => {
  const { femaleNames, maleNames, loading } = names;

  return { femaleNames, maleNames, loading };
};

export default connect(
  mapStateToProps,
  { getNames, getNamesByLetter }
)(Names);
