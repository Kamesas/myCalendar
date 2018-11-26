import { combineReducers } from "redux";
import getMomentJS from "./getMomentJS";
import getNotes from "./getNotes.js";

const rootReducer = combineReducers({
  getMomentJS,
  getNotes
});

export default rootReducer;
