import React from 'react';
import { shallow } from 'enzyme';
import MaskedInput from './SampleForm.jsx';

describe('Input', () => {
 it('should be defined', () => {
   expect(SampleForm).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <MaskedInput name='input test' />
   );
   expect(tree).toMatchSnapshot();
 });
});