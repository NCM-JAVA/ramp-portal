// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/AuthSlice";
import userReducer from "../slice/UserSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
    },
});
