import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    today: require('./TodayReducer').default,
    notebook: require('./NotebookReducer').default
})

export default rootReducer;