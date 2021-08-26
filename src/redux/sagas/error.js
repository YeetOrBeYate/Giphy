import { put, select, takeEvery } from 'redux-saga/effects'

import { ON_SET_ERROR, SET_ERROR, ON_REMOVE_ERROR } from '../actions/types'

const getErrorArray = state => state.error.errorArray


function* onSetError(action) {
  const { payload } = action
  const errorArray = yield select(getErrorArray)
  yield put({type: SET_ERROR, payload:[payload, ...errorArray] })
}

function* onRemoveError(action) {
  const { payload: errorType } = action
  const errorArray = yield select(getErrorArray)

  const filteredErrors = errorArray.filter((error) => error !== errorType)
  
  yield put({ type: SET_ERROR, payload: [...filteredErrors] })
}


function* watchErrors() {
  yield takeEvery(ON_SET_ERROR, onSetError)
  yield takeEvery(ON_REMOVE_ERROR, onRemoveError)
}

export default watchErrors