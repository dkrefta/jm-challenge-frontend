import React, { Component, Fragment } from 'react';
import Button from '../../components/Button/Button';
import styled from 'styled-components'
import Icon from '../../components/Icon/Icon'
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
margin-top: 80px;
margin-bottom: 60px;
align-items: center;
text-align: center;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;F
align-items: center;
`;
const IconStyle = styled.div`
text-align: center;
`
class Home extends Component {
    state = {}
    render() {
        return (
            <Background>
                <Wrapper>
                    <IconStyle>
                    <Icon tag="line-chart" />
                    </IconStyle>
                    <WrapperText>
                        <h1>Cotação de Seguros </h1>
                        <h2>Solução inovadora de líder de mercado </h2>
                    </WrapperText>
                    <Button
                        icon="arrow-right2"
                        onClick={() => { this.props.history.replace('/cnpj') }}
                    >
                        Iniciar
                    </Button>
                </Wrapper>
            </Background>
        )
    }
}

export default Home;