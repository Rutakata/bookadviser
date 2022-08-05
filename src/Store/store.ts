import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./Reducers/filterReducer";
import { mainReducer } from "./Reducers/mainReducer";


let reducers = combineReducers({
    mainPage: mainReducer,
    filter: filterReducer
})

export type State = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunk));
(<any>window).store = store;