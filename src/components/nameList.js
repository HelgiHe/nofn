import React from 'react';
import { connect } from 'react-redux';

class NameList extends React.Component {
  renderComments() {
    return this.props.signUp.map(comment => {
      return (
        <p className="comment" key={comment}>
          {comment}
        </p>
      );
    });
  }
  render() {
    return (
      <div>
        NameList:
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { signUp: state.signUp };
};

export default connect(
  mapStateToProps,
  null
)(NameList);
