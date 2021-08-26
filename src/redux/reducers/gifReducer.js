
const initialState = {
  gifsArray: []
}

export const gifReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'setGifs':
      return { ...state, gifsArray: payload }
    default:
      return state
  }
}