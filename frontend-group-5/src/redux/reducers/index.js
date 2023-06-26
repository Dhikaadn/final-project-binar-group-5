import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import penumpang from "./penumpang";
import search from "./search";
import detail from "./detail";
import formbiodata from "./formbiodata";
import pemesanan from "./pemesanan";

export default combineReducers({
  post,
  auth,
  penumpang,
  search,
  detail,
  formbiodata,
  pemesanan,
});
