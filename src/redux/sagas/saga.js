import { all } from 'redux-saga/effects'

import watchGifs from './gifs'
import watchLoading from './loading'

export default function* rootSaga() {
  yield all([
    watchGifs(),
    watchLoading()
  ])
}