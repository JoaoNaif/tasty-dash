import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "option",
  initialState: {
    opc: 1,
  },
  reducers: {
    setOption: (state, action) => {
      state.opc = action.payload;
    },
  },
});

export const { setOption } = slice.actions;
export default slice.reducer;
