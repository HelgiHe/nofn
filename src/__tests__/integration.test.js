import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line
import setupTests from '../setupTests';
import moxios from 'moxios';
import Root from '../Root';
import App from '../App';

beforeEach(() => {
  moxios.install();
  // intercept the api call and fake it
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  // wait for moxios to intercepting the ajax request
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('p')).toHaveLength(2);

    done();
    wrapped.unmount();
  });
});
