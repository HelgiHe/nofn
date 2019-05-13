import React, { Component } from 'react';

import './input.scss';

class Input extends Component {
  render() {
    const { label, value, handleChange } = this.props;
    return (
      <div className="inputContainer">
        <label className="inputContainer__label">{label}</label>
        <input
          className="inputContainer__input"
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Input;
