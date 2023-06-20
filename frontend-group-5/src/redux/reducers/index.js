import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import penumpang from "./penumpang";
import search from "./search";

export default combineReducers({
  post,
  auth,
  penumpang,
  search,
});
