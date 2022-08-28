import noteReducer from "./noteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ noteReducer });

export default rootReducer;
