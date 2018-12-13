const initialState = {
  items: [ ],
  item: { }
};

export default ( state = initialState, action ) => {
  const newState = { ...state };

  switch ( action.type )
  {
    case 'GET_ITEMS':
      newState.items = action.data;
      newState.item = action.data[0];
      break;
    
    case 'NEXT_ITEM':
      newState.item =
      ( state.items.indexOf( state.item ) + 1 < state.items.length ) ?
      state.items[state.items.indexOf( state.item ) + 1] :
      state.items[state.items.indexOf( state.item )];
      break;
    
    case 'PREV_ITEM':
      newState.item =
      ( state.items.indexOf( state.item ) - 1 >= 0 ) ?
      state.items[state.items.indexOf( state.item ) - 1] :
      state.items[state.items.indexOf( state.item )];
      break;

    default:
      break;
  }

  return newState;
};