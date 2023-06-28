import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  uuidUser: null,
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    setUuidUser: (state, action) => {
      state.uuidUser = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setToken, setUser, setUuidUser } =
  authSlicer.actions;

export default authSlicer.reducer;
