import { SET_ERROR } from '../actions/types'

const initialState = {
  errorArray:[]
}

export const errorReducer = (state = initialState, action) => {
  const { payload, type } = action
  
  switch (type){
    case SET_ERROR:
      return { ...state, errorArray: payload }
    default:
      return state
  }
}