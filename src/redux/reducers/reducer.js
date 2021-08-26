import { combineReducers } from "redux";
import { gifReducer } from './gifReducer'
import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
  gifs: gifReducer,
  loading: loadingReducer
})

export default rootReducer