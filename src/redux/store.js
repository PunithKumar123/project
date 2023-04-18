import React from "react";
import { authreducer, updateReducer } from "./reducers/authreducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./apisaga";
// import Navbar from './component/Navbar';
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const reducer = combineReducers({
  auth: authreducer,
  update: updateReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(mySaga);
export default store;
