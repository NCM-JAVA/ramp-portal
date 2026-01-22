import { combineReducers } from "redux";
import authSlice from "../slices/AuthSlice";

const appReducer = combineReducers({
  authSlice,
});

export default appReducer;
