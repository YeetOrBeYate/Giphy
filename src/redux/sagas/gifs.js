import { put, takeEvery } from 'redux-saga/effects'
import { searchGiphyActipn } from '../actions/gifs'


function* onSearch(action) {
  const { payload:searchString } = action
  yield put(searchGiphyActipn({string: searchString}))
}

function* onSearchSuccess(action) {
  const { payload } = action
  const gifArray = payload.data.data
  yield put({
    type: 'setGifs',
    payload: gifArray,
    setLoading: {
      action: 'unset',
      type: 'searchGifs'
    }
  })
}

function* watchGifs() {
  yield takeEvery('onSearchGifs', onSearch)
  yield takeEvery('searchGifs_SUCCESS', onSearchSuccess)
}

export default watchGifs