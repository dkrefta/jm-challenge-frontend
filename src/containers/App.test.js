import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('>>> App - Shallow Render React Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('---> render the component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
