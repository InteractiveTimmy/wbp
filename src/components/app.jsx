import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';

import store from '../redux/store.js';
import { Sample } from './index.js';

import { Default } from '../themes/index.js';

class App extends Component
{
  constructor ( props )
  { super( props ); }

  render ( )
  {
    return (
      <Fragment>
        <Helmet>
          <title>Web Boiler Plate</title>
        </Helmet>
        <Provider store={store}>
          <ThemeProvider theme={Default}>
            <Sample>Hello World</Sample>
          </ThemeProvider>
        </Provider>
      </Fragment>
    )
  }
}

export default App;