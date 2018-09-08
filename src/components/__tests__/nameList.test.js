import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line
import setupTests from '../../setupTests';
import NameList from '../nameList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initalState = {
    signUp: ['name1', 'name2']
  };
  wrapped = mount(
    <Root initalState={initalState}>
      <NameList />
    </Root>
  );
});

it('cretes p tag per comment', () => {
  expect(wrapped.find('p')).toHaveLength(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('name1');
  expect(wrapped.render().text()).toContain('name2');
});
