import React, {Fragment, Component} from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

const Nav = styled.nav`
background-color: #9779f1;
padding: 1.5rem 0;
`
const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: url(${p => p.imgUrl}) no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background-color: #f2f6f8;
  margin-right: 10px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  & > span {
    font-size: 0.875rem;
    padding-left: 50px
  }
  & > small {
    font-size: 0.75rem;
    padding-left: 50px
  }
`;
  const IconStyle = styled(Icon) `
  padding-left: 20px;
  `


const Header = () => (
    <Nav>
      <Container>
  <Content>
      <IconStyle tag="line-chart" />
      <Information>
        <span> Nova Cotação</span>
        <small>#0980</small>
      </Information>
    </Content>
    <Avatar imgUrl="http://i.pravatar.cc/300" />
      </Container>
    </Nav>
  
);

export default Header;
