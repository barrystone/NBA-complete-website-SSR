import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loading";

export default combineReducers({
  loading: loadingReducer,
});
