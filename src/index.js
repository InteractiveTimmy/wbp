'use strict';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app.jsx';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route path='/' component={App} />
      <Route path='/route' component={App} />
    </Fragment>
  </BrowserRouter>,
  document.getElementById( 'app' )
);