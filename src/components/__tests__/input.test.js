import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line
import setupTests from '../../setupTests';
import Input from '../input';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Input />
    </Root>
  );

  wrapped.find('input').simulate('change', {
    target: { value: 'new comment' }
  });
  // force update the state
  wrapped.update();
});

afterEach(() => {
  wrapped.unmount();
});

it('has a input area and 2 buttons', () => {
  expect(wrapped.find('input')).toHaveLength(1);
  expect(wrapped.find('button')).toHaveLength(2);
});

describe('the input', () => {
  it('has an input that can enter text', () => {
    // event is called by the html name not the react name

    expect(wrapped.find('input').prop('value')).toEqual('new comment');
  });

  it('clears the input on submit', () => {
    wrapped.find('input').simulate('submit', {
      target: { value: '' }
    });
    wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('');
  });
});
