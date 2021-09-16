import { applyMiddleware, createStore } from 'redux'
import { multiClientMiddleware } from 'redux-axios-middleware'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/reducer'
import rootSaga from './sagas/saga'
import clients from '../services/api'

const sagaMiddleware = createSagaMiddleware()

const middleware = [multiClientMiddleware(clients), sagaMiddleware]

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store
