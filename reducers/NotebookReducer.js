// CONSTANTS
export const ADD_TO_NOTEBOOK = 'ADD_TO_NOTEBOOK'

// ACTIONS
export const addToNotebook = (jot) => {
    return {
        type: ADD_TO_NOTEBOOK,
        newJot: { jot }
    }
}

// REDUCER
const notebookReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_NOTEBOOK:
            return state.push(action.newJot)
        default:
            return state
    }
} 

export default notebookReducer