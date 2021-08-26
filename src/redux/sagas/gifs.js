import { put, takeEvery } from 'redux-saga/effects'
import { searchGiphyAction } from '../actions/gifs'

import {
  SET_GIFS,
  SEARCH_GIFS,
  ON_SEARCH_GIFS,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_FAIL,
  ON_SET_ERROR
} from '../actions/types'

function* onSearch(action) {
  const { payload:searchString } = action
  yield put(searchGiphyAction({string: searchString}))
}

function* onSearchSuccess(action) {
  const { payload } = action
  const gifArray = payload.data.data
  yield put({
    type: SET_GIFS,
    payload: gifArray,
    setLoading: {
      action: 'unset',
      type: SEARCH_GIFS
    }
  })
}

function* onSearchFail(action) {
  const { type: loadingError } = action.meta.previousAction.setLoading
  yield put({ type: ON_SET_ERROR, payload: loadingError})
}

function* watchGifs() {
  yield takeEvery(ON_SEARCH_GIFS, onSearch)
  yield takeEvery(SEARCH_GIFS_SUCCESS, onSearchSuccess)
  yield takeEvery(SEARCH_GIFS_FAIL, onSearchFail)
}

export default watchGifs