import React, {Fragment}from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import SearchCnpj from './SearchCnpj//SearchCnpj';
import Auth from './Auth';

const App = () => (
  <Router>
    <Auth>
    <Route exact path="/" component={Home} />
      <Route path="/cnpj" component={SearchCnpj} />
    </Auth>
  </Router>
);

export default App;