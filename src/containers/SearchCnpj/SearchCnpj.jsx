import React, { Component, Fragment } from 'react';
import Button from '../../components/Button/Button';
import styled from 'styled-components'
import Input from '../../components/Form/SampleForm'
import Header from '../../components/Header/Header'
import cnpjService from '../../services/cnpj';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Icon from '../../components/Icon/Icon'
import 'babel-polyfill';

const StepNumber = styled.div`
  height: 0;
  width: 22px;
  padding-bottom: 20px;
  border: 2px solid purple;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #9779f1;
  font-weight: 700;
  margin-right: 20px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f2f6f8;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column-reverse;
`
const InputWrapper = styled.div`
display: flex;
position: relative;
justify-content: space-between;
flex-direction: column-reverse;
margin-bottom: 40rem;
`
const Label = styled.label`
  color: #b4bbc0;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30%;
  flex-direction: row-reverse;
  padding: 16px 0;
  color: black;
  font-weight: 600;
  font-size: 1rem;
`;

const Success = styled.div`
right: 0;
top: 0;
position: absolute;
color: green;
justify-content: flex-end;
flex-direction: row;
display: flex;
`
const Error = styled.div`
color: red;
justify-content: flex-end;
flex-direction: row;
display: flex;
`

const Container = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const LabelWrapper = styled.div`
  background: #fff;
  padding: 0;
  margin: 0;
`;

class SearchCnpj extends Component {
    state = {
        isCnpjValid: null,
        cnpjValue: null
    }

    handleChange = (e) => {
        const { isCnpjValid, cnpjValue } = this.state
        let value = e.target.value;

        String.prototype.replaceAll = function(target, replacement) {
            return this.split(target).join(replacement);
        }

        const newValue = value.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')

        this.fetchValidateCnpj(newValue)
    }

    fetchValidateCnpj = async (newValue) => {
        try {
            const response = await cnpjService.validateCNPJ(newValue);

            this.setState({
                isCnpjValid: response.isCnpjValid
            })
        } catch (e) {
            this.setState({
                isCnpjValid: e.isCnpjValid
            })
        }
    }

    handleSubmit = () => {
        const { isCnpjValid } = this.state;
        console.log('Valido:', isCnpjValid)
        this.props.history.push('/')
    };

    changePage() {
    }
    render() {
        const { label } = this.props
        const { isCnpjValid } = this.state;
        console.log(isCnpjValid)
        return (
            <form>
                <Background>
                    <Header />
                    <Wrapper>
                        Buscar por CNPJ ou empresa
                    <StepNumber>1</StepNumber>
                    </Wrapper>
                    <LabelWrapper>

                    <Label htmlFor={name}>{"CNPJ / Empresa"}</Label>
                    </LabelWrapper>
                    <InputWrapper>
                        {isCnpjValid !== null
                            ?
                            isCnpjValid
                                ?
                                <Success>
                                    <Icon tag="success" />
                                </Success>
                                :
                                <Error>
                                    <Icon tag="error" />
                                </Error>
                            :
                            null
                        }
                        <Input
                            name='cnpj'
                            label='teste'
                            id='cnpj'
                            type="text"
                            placeholder="__.___.___/____-__"
                            mask={[
                                /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,
                            ]}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button  
                            icon={"arrow-right"}
                            type='button'
                            onClick={() => this.handleSubmit()}
                            disabled={!isCnpjValid}
                            background={'blue'}
                        >
                            OK
                  </Button>
                    </ButtonWrapper>
                </Background>
            </form>
        )
    }
}

export default SearchCnpj;