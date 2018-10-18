import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

const ButtonComponent = props => (
  <Button {...props}>
    {props.children || ' '}
    {props.icon && (
        <Icon tag="arrow-right" />
    )}
    {props.loading && (
        <Icon tag="spinner" />
    )}
  </Button>
);

const Button = styled.button.attrs({
  className: `form-button`
})`
  margin-bottom: 30px; 
  justify-content: space-between; 
  display: flex;
  background: ${({ background }) => background || '#fff'};
  color: ${({ color }) => color || '#9779f1'};
  cursor: ${({ disabled }) => (!!disabled ? 'default' : 'pointer')};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '.8rem';
      case 'big':
        return '1.6rem';
      default:
        return '1rem';
    }
  }};
  align-items: center;
  font-weight: 600;
  opacity: ${({ disabled }) => (!!disabled ? 0.5 : 1)};
  outline: none;
  padding: ${({ size }) => {
        return '20px 30px';
    }
  }};
  &:hover:enabled {
    background: ${({ hoverBg }) => hoverBg || '#D3D3D3'};
    color: ${({ hoverColor }) => hoverColor || '#9779f1'};
  }
`;

const IconWrapper = styled.span`
height: 1rem;
width: 1rem;
margin-left: 10px;
`;

export default ButtonComponent;