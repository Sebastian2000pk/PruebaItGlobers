import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";

const RootReducers = combineReducers({
  AuthReducer,
  UserReducer
});

export default RootReducers;