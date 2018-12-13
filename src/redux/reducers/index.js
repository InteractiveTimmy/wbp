import { combineReducers } from 'redux';
import redItems from './item-reducer.js';

export default combineReducers( {
  items: redItems
} );