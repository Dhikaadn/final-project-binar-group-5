import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRiwayat: [],
};

const riwayatSlicer = createSlice({
  name: "listRiwayat",
  initialState,
  reducers: {
    setListRiwayat: (state, action) => {
      state.listRiwayat = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setListRiwayat } = riwayatSlicer.actions;

// export the global state / reducers
export default riwayatSlicer.reducer;
