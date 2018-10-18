import React from 'react';
import { shallow } from 'enzyme';
import Input from './SampleForm.jsx';

describe('Input', () => {
 it('should be defined', () => {
   expect(SampleForm).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Input name='input test' />
   );
   expect(tree).toMatchSnapshot();
 });
});