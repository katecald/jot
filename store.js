import { createStore } from 'redux'
import rootReducer from './reducers'
import { dummyNotebook } from './dummyData'


const initialState = {
    today: '',
    notebook: dummyNotebook
}

const store = createStore(rootReducer, initialState)

export default store