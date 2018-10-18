import React, { Component } from 'react';
import Authentication from '../utils/Authentication';
import GlobalStyle from '../styles/GlobalStyle'
class Auth extends Component {
  componentDidMount() {
    Authentication.setToken();
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    );
  }
}

export default Auth;