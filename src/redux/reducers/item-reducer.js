import { GET_ITEMS } from '../actions/types.js';

const initialState = {
  items: [ ]
};

export default ( state = initialState, action ) => {
  switch ( action.type )
  {
    case GET_ITEMS:
      return {
        ...state,
        items: action.data
      }
    default:
      return state;
  }
};