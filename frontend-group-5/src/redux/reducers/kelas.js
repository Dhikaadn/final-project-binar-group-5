import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kelas: [],
};

const kelasSLicer = createSlice({
  name: "kelas",
  initialState,
  reducers: {
    setKelas: (state, action) => {
      state.kelas = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setKelas } = kelasSLicer.actions;

// export the global state / reducers
export default kelasSLicer.reducer;
