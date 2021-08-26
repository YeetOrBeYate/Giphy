import { put, takeEvery } from 'redux-saga/effects'
import { searchGiphyActipn } from '../actions/gifs'

import { SET_GIFS, SEARCH_GIFS, ON_SEARCH_GIFS, SEARCH_GIFS_SUCCESS } from '../actions/types'

function* onSearch(action) {
  const { payload:searchString } = action
  yield put(searchGiphyActipn({string: searchString}))
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

function* watchGifs() {
  yield takeEvery(ON_SEARCH_GIFS, onSearch)
  yield takeEvery(SEARCH_GIFS_SUCCESS, onSearchSuccess)
}

export default watchGifs