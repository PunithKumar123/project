import React from "react";
import { authreducer } from "./reducers/authreducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./apisaga";
// import Navbar from './component/Navbar';

import { configureStore } from "reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  authreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(mySaga);
export default store;
