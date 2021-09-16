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

interface OnSearchAction{
  type: typeof ON_SEARCH_GIFS,
  payload: string
}

interface OnSearchSuccessAction {
  type: typeof SEARCH_GIFS_SUCCESS,
  payload: any,
  meta: any
}

interface OnSearchFailAction {
  type: typeof SEARCH_GIFS_FAIL,
  error: any,
  meta: any
}

function* onSearch(action: OnSearchAction) {
  const { payload: searchString } = action
  yield put(searchGiphyAction({ searchString: searchString}))
}

function* onSearchSuccess(action: OnSearchSuccessAction) {

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

function* onSearchFail(action: OnSearchFailAction) {

  const { type: loadingError } = action.meta.previousAction.setLoading
  yield put({ type: ON_SET_ERROR, payload: loadingError})
}

function* watchGifs() {
  yield takeEvery(ON_SEARCH_GIFS, onSearch)
  yield takeEvery(SEARCH_GIFS_SUCCESS, onSearchSuccess)
  yield takeEvery(SEARCH_GIFS_FAIL, onSearchFail)
}

export default watchGifs