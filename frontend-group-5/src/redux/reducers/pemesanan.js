import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pemesanan: [],
};

const pemesananSlicer = createSlice({
  name: "pemesanan",
  initialState,
  reducers: {
    setPemesanan: (state, action) => {
      state.pemesanan = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setPemesanan } = pemesananSlicer.actions;

// export the global state / reducers
export default pemesananSlicer.reducer;
