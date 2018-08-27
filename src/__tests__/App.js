import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('mounts', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
