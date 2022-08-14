// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";

// const middleware = [thunk];

// let store = createStore(rootReducer, applyMiddleware(...middleware));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    login: userSlice,
  },
});

export default store;
