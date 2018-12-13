import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Sample } from '../components/index.js';

import { Default, Secondary } from '../themes/index.js';

class App extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = { theme: false }
  }

  toggleTheme ( )
  { this.setState( prevState => ( { theme: !prevState.theme } ) ); }

  render ( )
  {
    return (
      <Fragment>
        <Helmet>
          <title>Web Boiler Plate</title>
        </Helmet>
          <ThemeProvider theme={( this.state.theme ) ? Secondary : Default}>
            <Fragment>
              <Sample path={this.props.location.pathname} changeTheme={this.toggleTheme.bind( this )} />
            </Fragment>
          </ThemeProvider>
      </Fragment>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default App;