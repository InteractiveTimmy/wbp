const initialState = {
  photos: [ ],
  photo: { }
};

export default ( state = initialState, action ) => {
  const newState = { ...state };

  switch ( action.type )
  {
    case 'SET_PHOTOS':
      newState.photos = action.data;
      newState.photo = action.data[0];
      break;
    
    case 'GO_NEXT_PHOTO':
      newState.photo =
      ( state.photos.indexOf( state.photo ) + 1 < state.photos.length ) ?
      state.photos[state.photos.indexOf( state.photo ) + 1] :
      state.photos[state.photos.indexOf( state.photo )];
      break;
    
    case 'GO_PREV_PHOTO':
      newState.photo =
      ( state.photos.indexOf( state.photo ) - 1 >= 0 ) ?
      state.photos[state.photos.indexOf( state.photo ) - 1] :
      state.photos[state.photos.indexOf( state.photo )];
      break;

    default:
      break;
  }

  return newState;
};