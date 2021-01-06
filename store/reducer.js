import { combineReducers } from "@reduxjs/toolkit";
import routerReducer from "./router";
import standingsReducer from "./standings";

export default combineReducers({
  router: routerReducer,
  standings: standingsReducer,
});
