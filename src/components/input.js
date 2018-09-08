import React from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../actions';

class Input extends React.Component {
  state = { inputText: '' };
  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.inputText);

    this.setState({ inputText: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>InputText</h4>
          <input value={this.state.inputText} onChange={this.handleChange} />
          <div>
            <button type="text">submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments }
)(Input);
