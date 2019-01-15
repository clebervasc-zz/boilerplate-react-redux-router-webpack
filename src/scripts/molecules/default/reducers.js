import * as aT from './actionTypes'

const initialState = { error: null, content: [] }

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case aT.DEFAULT_SUCCESS:
      return {
        ...state,
        content: action.payload
      }
    case aT.DEFAULT_ERROR:
      return {
        ...state,
        content: [],
        error: action.payload
      }
    default:
      return state;
  }
}

export default defaultReducer