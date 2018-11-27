import { combineReducers } from "redux";
import getMomentJS from "./getMomentJS";
import getNotes from "./getNotes.js";
import counter from "./counter";

const rootReducer = combineReducers({
  getMomentJS,
  getNotes,
  counter
});

export default rootReducer;
