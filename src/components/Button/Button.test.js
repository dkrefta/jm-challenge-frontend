import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

describe('Button', () => {
 it('should be defined', () => {
   expect(Button).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Button name='button test' />
   );
   expect(tree).toMatchSnapshot();
 });
});