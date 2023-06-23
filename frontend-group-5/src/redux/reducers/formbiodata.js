import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  biodataPemesan: [],
  biodataPenumpang: [],
};

const formBiodataSLicer = createSlice({
  name: "formBiodata",
  initialState,
  reducers: {
    setBiodataPemesan: (state, action) => {
      state.biodataPemesan = action.payload;
    },
    setBiodataPenumpang: (state, action) => {
      state.biodataPenumpang = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setBiodataPemesan, setBiodataPenumpang } =
  formBiodataSLicer.actions;

// export the global state / reducers
export default formBiodataSLicer.reducer;
