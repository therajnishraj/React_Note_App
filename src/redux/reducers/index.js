import { combineReducers } from "redux";
import { notesReducer } from "./NoteReducer";
import { tokenReducer } from "./TokenReducer";

const rootReducer = combineReducers({
  notesReducer,
  tokenReducer,
});

export default rootReducer;
