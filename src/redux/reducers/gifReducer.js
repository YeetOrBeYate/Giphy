import { SET_GIFS } from '../actions/types'

const initialState = {
  gifsArray: []
}

export const gifReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GIFS:
      return { ...state, gifsArray: payload }
    default:
      return state
  }
}