
import { SET_LOADING } from '../actions/types'


interface InitialState {
  isLoading: Array<string>
}

type Action = {
  type: string,
  payload: Array<string>
}


const initialState: InitialState = {
  isLoading:[]
}

export const loadingReducer = (state = initialState, action: Action) => {
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

