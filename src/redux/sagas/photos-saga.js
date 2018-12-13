import { takeEvery, put, call } from 'redux-saga/effects';

// workers
function* getPhotos ( )
{
  const r = yield call( fetch, 'https://jsonplaceholder.typicode.com/photos' );
  const body = yield call( [ r, 'json' ] );

  yield put( { type: 'SET_PHOTOS', data: body } );
}

function* nextPhoto ( )
{ yield put( { type: 'GO_NEXT_PHOTO' } ); }

function* prevPhoto ( )
{ yield put( { type: 'GO_PREV_PHOTO' } ); }

// watchers
export function* watchNextPhoto ( )
{ yield takeEvery( 'NEXT_PHOTO', nextPhoto ); }

export function* watchPrevPhoto( )
{ yield takeEvery( 'PREV_PHOTO', prevPhoto ); }

export function* watchGetPhotos ( )
{ yield takeEvery( 'GET_PHOTOS', getPhotos ); }