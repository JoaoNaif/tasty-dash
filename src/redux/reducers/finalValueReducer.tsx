import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "valueFinal",
  initialState: {
    discount: 0,
    total: 0,
    active: false,
  },
  reducers: {
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setDiscount, setTotal, setActive } = slice.actions;
export default slice.reducer;
