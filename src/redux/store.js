import { combineReducers, configureStore } from '@reduxjs/toolkit'
import header from './reducers/header'
import cart from './reducers/cart'
import auth from './reducers/auth'

let rootReducer = combineReducers({header,cart,auth})

const store = configureStore({ reducer: rootReducer })

store.subscribe(()=> console.log('change'))
window.store = store
export default store