import React from 'react';
import { shallow } from 'enzyme';
import SearchCnpj from './SearchCnpj'
import Button from '../../components/Button/Button'

it('does not render the button element when [certain state is true]', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find('button')).toHaveLength(0);
});
