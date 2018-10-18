import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './services/registerServiceWorker';
import './styles/icomoon.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

registerServiceWorker();
