// CONSTANTS
export const SET_JOT = 'SET_JOT'

// ACTIONS
export const setJot = (jot) => {
  return {
    type: SET_JOT,
    text: jot
  }
}

// REDUCER
const todayReducer = (state = '', action) => {
   switch(action.type) {
      case SET_JOT:
       return state = action.text
      default:
        return state
    }
}

export default todayReducer