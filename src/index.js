'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app.jsx';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={App} />
    <Route path='/route' component={App} />
  </BrowserRouter>,
  document.getElementById( 'app' )
);