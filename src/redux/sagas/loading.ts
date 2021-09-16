import { put, select, takeEvery } from 'redux-saga/effects'

import {  SET_LOADING } from '../actions/types'

import { RootState } from '../reducers/reducer'


const getLoadingArray = (state : RootState ) => state.loading.isLoading


interface OnSetLoadingAction {
  payload: any,
  setLoading: {
    action:  'unset' |  'set',
    type: string
  },
  type: string
}

interface SetLoadingAction{
  payload: string
}

function* addLoading(action : SetLoadingAction) : any {

  const { payload } = action

  console.log('add loading', action)

  const loadingArray = yield select(getLoadingArray)

  yield put({ type: SET_LOADING, payload: [payload, ...loadingArray]})
}

function* removeLoading(action : SetLoadingAction) : any {

  const { payload } = action

  console.log('removing loading', action)

  const loadingArray = yield select(getLoadingArray)

  const filteredLoaders = loadingArray.filter((item : string) => item !== payload)

  yield put ({type: SET_LOADING, payload: [...filteredLoaders]})

}

function* onSetLoading(action: OnSetLoadingAction) : any {

  console.log('onSetLoading', action)
  const { setLoading } = action
  const { type, action:loadingAction } = setLoading

  switch (loadingAction) {
    case 'set':
      yield addLoading({ payload: type })
      break
    case 'unset':
      yield removeLoading({ payload: type })
      break
    default:
      break
  }

}

function* watchLoading() {
  yield takeEvery((action: OnSetLoadingAction) : any => action?.setLoading , onSetLoading)
}

export default watchLoading