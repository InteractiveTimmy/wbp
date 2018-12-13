export const getItems = ( ) => dispatch => {
  fetch( 'https://jsonplaceholder.typicode.com/posts' )
    .then( r => r.json( ) )
    .then( r => dispatch( {
      type: 'GET_ITEMS',
      data: r
    } ) );
}

export const nextItem = ( ) => dispatch => {
  dispatch( {
    type: 'NEXT_ITEM'
  } );
}

export const prevItem = ( ) => dispatch => {
  dispatch( {
    type: 'PREV_ITEM'
  } );
}