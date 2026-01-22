// // src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer
  },
});

export default Store;

// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';


// export default configureStore({
//     reducer
// })
