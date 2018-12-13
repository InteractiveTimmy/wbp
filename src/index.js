'use strict';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import { App } from './sites/index.js';
import './index.css';

const myApp = withRouter( props => <App {...props} /> );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path='/' component={myApp} />
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'app' )
);