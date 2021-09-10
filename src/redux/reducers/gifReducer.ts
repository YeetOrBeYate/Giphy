import { SET_GIFS } from '../actions/types'

interface InitialState {
  gifsArray: Array<any>
}

type Action = {
  type: string,
  payload: Array<any>
}

const initialState : InitialState = {
  gifsArray: []
}

export const gifReducer = (state = initialState, action: Action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GIFS:
      return { ...state, gifsArray: payload }
    default:
      return state
  }
}