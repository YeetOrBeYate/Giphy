import { put, select, takeEvery } from 'redux-saga/effects'

import { ON_SET_ERROR, SET_ERROR } from '../actions/types'

const getErrorArray = state => state.error.errorArray


function* onSetError(action) {
  const { payload } = action
  const errorArray = yield select(getErrorArray)
  yield put({type: SET_ERROR, payload:[payload, ...errorArray] })
}


function* watchErrors() {
  yield takeEvery(ON_SET_ERROR, onSetError)
}

export default watchErrors