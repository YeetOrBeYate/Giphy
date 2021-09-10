import { combineReducers } from "redux";
import { gifReducer } from './gifReducer'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers({
  gifs: gifReducer,
  loading: loadingReducer,
  error: errorReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer