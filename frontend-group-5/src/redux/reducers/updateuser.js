import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateuser: [],
};

const updateSlicer = createSlice({
  name: "updateuser",
  initialState,
  reducers: {
    setUpdate: (state, action) => {
      state.updateuser = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setUpdate } = updateSlicer.actions;

// export the global state / reducers
export default updateSlicer.reducer;
