import React from 'react';
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import inputBarReducer from "./inputBarReducer";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  inputBar: inputBarReducer,
})

let a = 5;

let b = a + a;

const store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
