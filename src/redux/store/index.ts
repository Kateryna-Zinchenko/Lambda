import {applyMiddleware, combineReducers, createStore } from 'redux';
import correctarium from '../reducers/correctarium';
import thunk from "redux-thunk";
import authorizationn from "../reducers/authorization";

const rootReducer = combineReducers({
    correctarium,
    authorizationn
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
