import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import listCartReducer from "./reducers/listCartReducer";
import optionReducer from "./reducers/optionReducer";
import finishReducer from "./reducers/finishReducer";
import finalValueReducer from "./reducers/finalValueReducer";
import formReducer from "./reducers/formReducer";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    listCart: listCartReducer,
    option: optionReducer,
    finish: finishReducer,
    values: finalValueReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
