// CONSTANTS
export const ADD_TO_NOTEBOOK = 'ADD_TO_NOTEBOOK'

// ACTIONS
export const addToNotebook = (jot) => {
    let dateData = new Date()
    let key = dateData.toUTCString()
    let displayDay = key.slice(0,(key.indexOf(',')))
    let prompt = jot.prompt
    return {
        type: ADD_TO_NOTEBOOK,
        newJot: {
            dateData,
            key,
            displayDay,
            prompt,
            fullText: jot.text,
            previewText: `${jot.text.slice(0,49)}...`
        }
    }
}

// REDUCER
const notebookReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_NOTEBOOK:
            if (action.newJot.displayDay===state[0].displayDay) state.splice(0, 1)
            return state = [action.newJot, ...state]
        default:
            return state
    }
}

export default notebookReducer