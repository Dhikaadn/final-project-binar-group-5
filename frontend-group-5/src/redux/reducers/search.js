import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPenerbangan: [],
};

const searchSlicer = createSlice({
  name: "listPenerbangan",
  initialState,
  reducers: {
    setListPenerbangan: (state, action) => {
      state.listPenerbangan = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setListPenerbangan } = searchSlicer.actions;

// export the global state / reducers
export default searchSlicer.reducer;
