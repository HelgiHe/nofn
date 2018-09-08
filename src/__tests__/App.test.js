import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line
import setupTests from '../setupTests';
import App from '../App';
import Input from '../components/input';
import NameList from '../components/nameList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows an input', () => {
  expect(wrapped.find(Input)).toHaveLength(1);
});

it('shows a list of names', () => {
  expect(wrapped.find(NameList)).toHaveLength(1);
});
