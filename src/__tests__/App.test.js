import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line
import setupTests from '../setupTests';
import App from '../App';
import Input from '../components/input';
import nameList from '../components/nameList';

it('shows an input', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Input)).toHaveLength(1);
});

it('shows a list of names', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(nameList)).toHaveLength(1);
});
