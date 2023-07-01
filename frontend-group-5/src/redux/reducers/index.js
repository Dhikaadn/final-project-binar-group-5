import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import penumpang from "./penumpang";
import search from "./search";
import detail from "./detail";
import formbiodata from "./formbiodata";
import pemesanan from "./pemesanan";
import kelas from "./kelas";
import riwayat from "./riwayat";
import notifikasi from "./notifikasi";

export default combineReducers({
  post,
  auth,
  penumpang,
  search,
  detail,
  formbiodata,
  pemesanan,
  kelas,
  riwayat,
  notifikasi,
});
