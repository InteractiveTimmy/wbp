import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { getItems } from '../../redux/actions/item-actions.js';

import styles from './sample.style.js';

class Sample extends Component
{
  constructor ( props )
  { super( props ); }

  componentWillMount ( )
  { this.props.getItems( ); }

  render ( )
  {
    const { classes } = this.props;

    const items = this.props.items.map( ( item, i ) => (
      <div key={i} className={classes.sample}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ) );

    return (
      <div className={classes.sampleContainer}>
        {items}
      </div>
    )
  }
}

Sample.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ( {
  items: state.items.items
} );

export default connect( mapStateToProps, { getItems } )( injectSheet( styles )( Sample ) );