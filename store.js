import { createStore } from 'redux'
import rootReducer from './reducers'

const initialState = {
    today: '',
    notebook: [
        {
          date: 'Th 3/1',
          text: 'sample text goes here'
        },
        {
          date: 'Th 3/1',
          text: 'sample text goes here'
        }
      ]
}

const store = createStore(rootReducer, initialState)

export default store