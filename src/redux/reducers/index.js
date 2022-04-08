import { combineReducers } from "redux";
import { userReducer } from "./reducers";

export const reducers = combineReducers({
  users: userReducer,
});
