import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenFirebase: null,
  listNotifikasi: [],
};

const notifikasiSLicer = createSlice({
  name: "notifikasi",
  initialState,
  reducers: {
    setNotifikasi: (state, action) => {
      state.listNotifikasi = action.payload;
    },
    setToken: (state, action) => {
      state.tokenFirebase = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setNotifikasi, setToken } = notifikasiSLicer.actions;

// export the global state / reducers
export default notifikasiSLicer.reducer;
