import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "form",
  initialState: {
    email: "",
    pass: "",
    live: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPass: (state, action) => {
      state.pass = action.payload;
    },
    setLive: (state, action) => {
      state.live = action.payload;
    },
  },
});

export const { setEmail, setPass, setLive } = slice.actions;
export default slice.reducer;
