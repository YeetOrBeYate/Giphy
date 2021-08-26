
const initialState = {
  isLoading:[]
}

export const loadingReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case 'setLoading':
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}

