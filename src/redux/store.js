import 'regenerator-runtime/runtime'; // required for saga

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './reducers/index.js';

import { watchGetPhotos, watchNextPhoto, watchPrevPhoto } from './sagas/photos-saga.js';

const initialState = { };

const sagaMiddleWare = createSagaMiddleWare( );

const middleware = [
  thunk,
  sagaMiddleWare
];

// check for devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( ) :
  compose;

// create store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware( ...middleware ),
    composeEnhancers
  )
);

// start generator functions
sagaMiddleWare.run( watchGetPhotos );
sagaMiddleWare.run( watchNextPhoto );
sagaMiddleWare.run( watchPrevPhoto );

export default store;