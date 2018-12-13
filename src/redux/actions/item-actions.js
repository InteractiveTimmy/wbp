import { GET_ITEMS } from './types.js';

export const getItems = ( ) => dispatch => {
  fetch( 'https://jsonplaceholder.typicode.com/posts' )
    .then( r => r.json( ) )
    .then( r => dispatch( {
      type: GET_ITEMS,
      data: r
    } ) );
}