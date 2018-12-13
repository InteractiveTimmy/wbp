import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';

import { getItems, nextItem, prevItem } from '../../redux/actions/item-actions.js';

import styles from './sample.style.js';

class Sample extends Component
{
  constructor ( props )
  { super( props ); }

  componentWillMount ( )
  {
    this.props.onGetItems( );
    this.props.onGetPhotos( );
  }

  render ( )
  {
    const { classes, path, item, photo, changeTheme } = this.props;

    const exampleReactJSS = (
      <div className={classes.sample}>
        <h2>Sample - React JSS</h2>
        <br />
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    )

    const exampleReactRouter = (
      <div className={classes.sample}>
        <h2>Sample - React Router</h2>
        <br />
        <h3>Current Route - {path}</h3>
        <br />
          <Link to="/"><h3>Change Route to "/"</h3></Link>
          <Link to="/route"><h3>Change Route to "/route"</h3></Link>
          <Link to="/other-route"><h3>Change Route to "/other-route"</h3></Link>
      </div>
    );

    const exampleReduxThunk = (
      <div className={classes.sample}>
        <h2>Sample - Redux Thunk</h2>
        <br />
        <button onClick={this.props.onPrevItem}>Previous</button>
        <button onClick={this.props.onNextItem}>Next</button>
        <br /><br />
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    );

    const exampleReduxSaga = (
      <div className={classes.sample}>
        <h2>Sample - Redux Saga</h2>
        <br />
        <button onClick={this.props.onPrevPhoto}>Previous</button>
        <button onClick={this.props.onNextPhoto}>Next</button>
        <br /><br />
        <h3>{photo.title}</h3>
        <img src={photo.thumbnailUrl} alt={photo.title}></img>
      </div>
    );

    return (
      <div className={classes.sampleContainer}>
        {exampleReactJSS}
        {exampleReactRouter}
        {exampleReduxThunk}
        {exampleReduxSaga}
      </div>
    )
  }
}

Sample.propTypes = {
  // thunk
  onGetItems: PropTypes.func.isRequired,
  onNextItem: PropTypes.func.isRequired,
  onPrevItem: PropTypes.func.isRequired,

  // saga
  onGetPhotos: PropTypes.func.isRequired,
  onNextPhoto: PropTypes.func.isRequired,
  onPrevPhoto: PropTypes.func.isRequired,

  // data
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired,
  photo: PropTypes.object.isRequired
};

const mapStateToProps = state => ( {
  items: state.items.items,
  item: state.items.item,
  photos: state.photos.photos,
  photo: state.photos.photo
} );

const mapDispatchToProps = dispatch => ( {
  // thunk
  onGetItems: ( ) => dispatch( getItems( ) ),
  onNextItem: ( ) => dispatch( nextItem( ) ),
  onPrevItem: ( ) => dispatch( prevItem( ) ),

  // saga
  onGetPhotos: ( ) => dispatch( { type: 'GET_PHOTOS' } ),
  onNextPhoto: ( ) => dispatch( { type: 'NEXT_PHOTO' } ),
  onPrevPhoto: ( ) => dispatch( { type: 'PREV_PHOTO' } )
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( Sample ) );