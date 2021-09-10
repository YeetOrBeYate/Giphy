import { SET_ERROR } from '../actions/types'

interface InitialState {
  errorArray: Array<string>
}

type Action = {
  type: string,
  payload: Array<string>
}

const initialState: InitialState = {
  errorArray: []
}


export const errorReducer = (state = initialState, action: Action) : InitialState => {
  const { payload, type } = action
  switch (type){
    case SET_ERROR:
      return { ...state, errorArray: payload }
    default:
      return state
  }
}