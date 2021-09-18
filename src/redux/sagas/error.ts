import { put, select, takeEvery } from 'redux-saga/effects'

import { ON_SET_ERROR, SET_ERROR, ON_REMOVE_ERROR, SEARCH_GIFS } from '../actions/types'

import { RootState } from '../reducers/reducer'


const getErrorArray = (state: RootState) => state.error.errorArray

interface SetErrorAction{
  payload: typeof SEARCH_GIFS,
  type: typeof ON_SET_ERROR
}

interface RemoveError {
  payload: typeof SEARCH_GIFS,
  type: typeof ON_REMOVE_ERROR
}


function* onSetError(action : SetErrorAction): any {
  const { payload } = action
  const errorArray = yield select(getErrorArray)
  yield put({
    type: SET_ERROR,
    payload: [payload, ...errorArray],
    setLoading: {
      action: 'unset',
      type: SEARCH_GIFS
    }
  })
}

function* onRemoveError(action : RemoveError): any {
  const { payload: errorType } = action
  const errorArray = yield select(getErrorArray)

  const filteredErrors = errorArray.filter((error: string) => error !== errorType)
  
  yield put({
    type: SET_ERROR,
    payload: [...filteredErrors],
  })
}


function* watchErrors() {
  yield takeEvery(ON_SET_ERROR, onSetError)
  yield takeEvery(ON_REMOVE_ERROR, onRemoveError)
}

export default watchErrors