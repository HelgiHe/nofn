import React from 'react';
import InfiniteScroll from 'react-bidirectional-infinite-scroll';
import { connect } from 'react-redux';
import LetterSelect from '../components/letterSelect';
import SegregatedTab from '../components/segregatedTab';
import {
  getNamesByLetter,
  incrementLetterPos,
  setSelectedSex
} from '../actions';
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

  setSex(sex) {
    this.props.setSelectedSex(sex);
  }

  handleVerticalScroll(position, previousPosition) {
    const diffScroll = position - previousPosition;
    const direction = diffScroll > 0 ? 'down' : 'up';
  }

  handleScrollDown() {
    const { letterPos, loading } = this.props;
    if (!loading) {
      this.props.getNamesByLetter(alphabet[letterPos]);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="nameListContainer">
        <SegregatedTab onClick={this.setSex.bind(this)} />
        <div className="letterContainer">
          <LetterSelect />
        </div>
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
  const { femaleNames, maleNames, loading, letterPos, selectedSex } = names;

  return { femaleNames, maleNames, loading, letterPos, selectedSex };
};

export default connect(
  mapStateToProps,
  { getNamesByLetter, incrementLetterPos, setSelectedSex }
)(Names);
