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

const boxShadowDefault = `
  0px 1px 5px 0px rgba(0, 0, 0, 0.2), 
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
  0px 3px 1px -2px rgba(0, 0, 0, 0.12)
`;

const Button = styled.button.attrs({
  className: `form-button`
})`
   margin-bottom: 30px; 
  justify-content: space-between; 
  display: flex;
  width: 80%;
  background: ${({ background }) => background || '#fff'};
  border: ${({ border }) => border || '1px solid #121212'};
  box-shadow: ${({ boxShadow }) => boxShadow || boxShadowDefault};
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
  text-transform: ${({ textTransform }) => textTransform || 'uppercase'};
  &:hover:enabled {
    background: ${({ hoverBg }) => hoverBg || '#D3D3D3'};
    border: ${({ hoverBorder }) => `${hoverBorder}` || '1px solid #121212'};
    color: ${({ hoverColor }) => hoverColor || '#9779f1'};
  }
`;

const IconWrapper = styled.span`
height: 1rem;
width: 1rem;
margin-left: 10px;
`;

export default ButtonComponent;