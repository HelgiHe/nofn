import React from 'react';
import InfiniteScroll from 'react-bidirectional-infinite-scroll';
import { connect } from 'react-redux';
import { getNamesByLetter, incrementLetterPos } from '../actions';
import { capitalize, alphabet } from '../../lib';

import './Names.scss';

class Names extends React.Component {
  componentDidMount() {
    this.props.getNamesByLetter();
  }

  renderNames() {
    const { femaleNames } = this.props;
    let items = [];
    femaleNames.map(name => {
      items.push(
        <div className="nameContainer" key={name.name}>
          <p className="nameContainer__name">{name.name}</p>
          <p>{capitalize(name.desc)}</p>
        </div>
      );
    });
    return items;
  }

  handleVerticalScroll(position, previousPosition) {
    const diffScroll = position - previousPosition;
    const direction = diffScroll > 0 ? 'down' : 'up';
  }

  handleScrollDown() {
    console.log('bottom');
    const { letterPos, loading } = this.props;
    if (!loading) {
      this.props.getNamesByLetter(alphabet[letterPos]);
    }
  }

  render() {
    return (
      <div className="nameListContainer">
        <h4>List of names</h4>
        <InfiniteScroll
          onScroll={this.handleVerticalScroll.bind(this)}
          onReachBottom={this.handleScrollDown.bind(this)}
        >
          {this.renderNames()}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({ names }) => {
  const { femaleNames, maleNames, loading, letterPos } = names;

  return { femaleNames, maleNames, loading, letterPos };
};

export default connect(
  mapStateToProps,
  { getNamesByLetter, incrementLetterPos }
)(Names);
