import React from 'react';
import {combineReducers, legacy_createStore} from "redux";
import inputBarReducer from "./inputBarReducer";

const reducer = combineReducers({
  inputBar: inputBarReducer,
})

const store = legacy_createStore(reducer);

window.store = store;

export default store;
