import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type InitState = {};

const initialState: InitState = {};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ input: number }>) => {},
  },
});

export const { add } = displaySlice.actions;

export const selectDisplay = (state: RootState) => state.display;

export const displayReducer = displaySlice.reducer;
