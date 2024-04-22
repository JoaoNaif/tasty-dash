import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListCartState {
  cart: {
    id: number;
    qtd: number;
  }[];
}

const initialState: ListCartState = {
  cart: [
    {
      id: 0,
      qtd: 0,
    },
  ],
};

export const slice = createSlice({
  name: "listCart",
  initialState,
  reducers: {
    setListCart: (
      state,
      action: PayloadAction<{ id: number; qtd: number }[]>
    ) => {
      state.cart = action.payload;
    },
  },
});

export const { setListCart } = slice.actions;
export default slice.reducer;
