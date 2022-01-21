import { combineReducers, configureStore } from '@reduxjs/toolkit'
import header from './reducers/header'
import cart from './reducers/cart'

let rootReducer = combineReducers({header,cart})

const store = configureStore({ reducer: rootReducer })

store.subscribe(()=> console.log('change'))
window.store = store
export default store