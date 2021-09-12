import {combineReducers, createStore} from "redux";
import {cakeReducer, iceCreamReducer} from "./reducers";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)

export default store
