import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./Reducers/mainReducer";


let reducers = combineReducers({
    mainPage: mainReducer,
})

export type State = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunk));
