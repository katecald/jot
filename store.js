import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
    today: '',
    notebook: {}
}

const store = createStore(rootReducer, initialState)

export default store