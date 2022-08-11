import { combineReducers } from "redux";
import loginReducer from "./userReducers";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
