import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListCartState {
  finish: {
    id: number;
    qtd: number;
  }[];
}

const initialState: ListCartState = {
  finish: [
    {
      id: 0,
      qtd: 0,
    },
  ],
};

export const slice = createSlice({
  name: "finish",
  initialState,
  reducers: {
    setFinish: (
      state,
      action: PayloadAction<{ id: number; qtd: number }[]>
    ) => {
      state.finish = action.payload;
    },
  },
});

export const { setFinish } = slice.actions;
export default slice.reducer;
