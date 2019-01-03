import { combineReducers } from "redux";
import article from "./article";
import lightbox from "./lightbox";
import scripts from "./scripts";

export default combineReducers({
  article,
  lightbox,
  scripts
});
