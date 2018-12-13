import { combineReducers } from 'redux';
import redItems from './item-reducer.js';
import redPhotos from './photo-reducer.js';

export default combineReducers( {
  items: redItems,
  photos: redPhotos
} );