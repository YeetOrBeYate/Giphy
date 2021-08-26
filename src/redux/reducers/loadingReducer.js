
import { SET_LOADING } from '../actions/types'

const initialState = {
  isLoading:[]
}

export const loadingReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}

