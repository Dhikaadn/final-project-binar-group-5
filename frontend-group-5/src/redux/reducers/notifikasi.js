import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNotifikasi: [],
};

const notifikasiSLicer = createSlice({
  name: "notifikasi",
  initialState,
  reducers: {
    setNotifikasi: (state, action) => {
      state.listNotifikasi = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setNotifikasi } = notifikasiSLicer.actions;

// export the global state / reducers
export default notifikasiSLicer.reducer;
