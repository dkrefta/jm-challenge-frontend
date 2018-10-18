import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { withFormik } from 'formik';
import { Form, Title, Text, Button } from "../../styles/theme.js";
import MaskedInput from 'react-text-mask';


const Wrapper = styled.div`
display: flex;
`
const Label = styled.label`
color: #b4bbc0;
font-size: 0.75rem;
font-weight: 600;
margin-bottom: 0.50rem;
`;

const InputCustom = styled.input`
padding: 0;
border: none;
font-size: 1rem;
outline: none;
font-weight: 600;
height: 60px;
justify-content: space-between; 
display: flex;
`;

const Container = styled.div`
padding: 0;
border: none;
font-size: 1rem;
outline: none;
font-weight: 600;
height: 80px;
`;

const Input = props => {

  const {
    values,
    touched,
    errors,
    dirty,
    onChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    mask,
    placeholder,
    label
  } = props;

  return (
    <MaskedInput
      label={label}
      placeholder={placeholder}
      id="cnpj"
      name='cnpj'
      type="text"
      mask={mask}
      error={touched && errors}
      value={values}
      onChange={onChange}
      onBlur={handleBlur}
      render={(ref, props) => <InputCustom ref={ref} {...props} />}
    />
  );
};

export default Input;
