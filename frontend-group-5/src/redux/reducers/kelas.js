import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kelas: [],

  dataAwal: [],
  dataNew: [],
};

const kelasSLicer = createSlice({
  name: "kelas",
  initialState,
  reducers: {
    setKelas: (state, action) => {
      state.kelas = action.payload;
    },
    setData: (state, action) => {
      state.dataAwal = action.payload;
    },
    setDataNew: (state, action) => {
      state.dataNew = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setKelas, setData, setDataNew } = kelasSLicer.actions;

// export the global state / reducers
export default kelasSLicer.reducer;
