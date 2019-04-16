import { combineReducers } from "redux";

import getReducer from "./getReducer";
import submitReducer from "./submitReducer";
import authReducer from "./authReducer";

export default combineReducers({
  get: getReducer,
  post: submitReducer,
  auth: authReducer
});