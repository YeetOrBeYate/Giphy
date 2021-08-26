import { put, select, takeEvery } from 'redux-saga/effects'

const getLoadingArray = state => state.loading.isLoading

function* addLoading({ payload }) {

  const loadingArray = yield select(getLoadingArray)

  yield put({ type: 'setLoading', payload: [payload, ...loadingArray]})
}

function* removeLoading({ payload }) {

  const loadingArray = yield select(getLoadingArray)

  const filteredLoaders = loadingArray.filter((item) => item !== payload)

  console.log(filteredLoaders, 'what Ima set after', loadingArray)

  yield put ({type: 'setLoading', payload: [...filteredLoaders]})

}

function* onSetLoading(action) {
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
  yield takeEvery(action => action?.setLoading , onSetLoading)
}

export default watchLoading