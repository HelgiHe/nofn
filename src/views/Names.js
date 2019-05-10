import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { getNames, getNamesByLetter, incrementLetterPos } from '../actions';
import { capitalize, alphabet } from '../../lib';

import './Names.scss';

class Names extends React.Component {
  state = { hasItems: true };

  componentDidMount() {
    const { letterPos } = this.props;
    // this.props.getNamesByLetter(alphabet[letterPos]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.femaleNames !== prevProps.femaleNames) {
      // const { nextPos } = this.state;
      // this.setState({ nextPos: this.props.letterPos + 1 });
    }
  }

  async loadMore() {
    console.log('loadMore');
    const { letterPos } = this.props;
    this.setState({ hasItems: false });
    this.props.getNamesByLetter(alphabet[letterPos + 1]);
    this.props.incrementLetterPos();
  }

  renderNames() {
    const { femaleNames } = this.props;

    return femaleNames.map(name => {
      return (
        <div className="nameContainer" key={name.name}>
          <p className="nameContainer__name">{name.name}</p>
          <p>{capitalize(name.desc)}</p>
        </div>
      );
    });
  }
  render() {
    const { loading, femaleNames, letterPos, hasMore } = this.props;

    console.log(hasMore);
    let names = [];
    femaleNames.map((name, i) => {
      names.push(
        <div className="nameContainer" key={name.name}>
          <p className="nameContainer__name">{name.name}</p>
          <p>{capitalize(name.desc)}</p>
        </div>
      );
    });

    return (
      <div className="nameListContainer">
        <h4>List of names</h4>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore.bind(this)}
          hasMore={hasMore}
          initialLoad
        >
          <div className="tracks">{names}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({ names }) => {
  const {
    femaleNames,
    maleNames,
    loading,
    letterPos,
    hasMore,
    nextPos
  } = names;

  return { femaleNames, maleNames, loading, letterPos, hasMore, nextPos };
};

export default connect(
  mapStateToProps,
  { getNames, getNamesByLetter, incrementLetterPos }
)(Names);
