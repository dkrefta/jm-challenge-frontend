import React, { Component, Fragment } from 'react';
import Button from '../../components/Button/Button';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Form, Input, Title, Title2, Text, Label } from "../../styles/theme.js";

const Background = styled.div`
display: flex;
background-color: #9779f1;
justify-content: flex-end;
flex-direction: column;
flex: 1;
height: 100vh;
`
const WrapperText = styled.div`
margin-bottom: 80px;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class Home extends Component {
  state = {

  }
  render () {
    return (
      <Background>
      <Wrapper>
        <WrapperText>
        <h1  style={{ marginTop: '30px', textAlign: 'center' }}>Cotação de Seguros </h1> 
        <h2>Solução inovadora de líder de mercado </h2>
        </WrapperText>
        <Button
           icon="arrow-right2" 
          onClick={()=> {this.props.history.replace('/cnpj')}}
        >
        Iniciar
        </Button>
      </Wrapper>
      </Background>
    )

  }
}

export default Home;