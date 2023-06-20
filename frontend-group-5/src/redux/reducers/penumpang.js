import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  penumpang: [],
};

const penumpangSLicer = createSlice({
  name: "penumpang",
  initialState,
  reducers: {
    setPenumpang: (state, action) => {
      state.penumpang = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setPenumpang } = penumpangSLicer.actions;

// export the global state / reducers
export default penumpangSLicer.reducer;
