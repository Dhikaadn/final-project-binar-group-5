import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  penumpang: [],
  detailPenumpang: [],
};

const penumpangSLicer = createSlice({
  name: "penumpang",
  initialState,
  reducers: {
    setPenumpang: (state, action) => {
      state.penumpang = action.payload;
    },
    setDetailPenumpang: (state, action) => {
      state.detailPenumpang = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setPenumpang, setDetailPenumpang } = penumpangSLicer.actions;

// export the global state / reducers
export default penumpangSLicer.reducer;
