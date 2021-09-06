import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from  './app/App.js';
import { HashRouter } from 'react-router-dom'

ReactDOM.hydrate(

  <HashRouter>
  <App/>
</HashRouter>,
  document.getElementById('root')
);