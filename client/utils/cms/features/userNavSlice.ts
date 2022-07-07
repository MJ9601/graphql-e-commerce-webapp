import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type InitState = {
  userPageDis: UserOp;
};

export enum UserOp {
  shoppingCard = "shopingCard",
  boughtCard = "boughtCard",
  passChange = "passChange",
}

const initialState: InitState = {
  userPageDis: UserOp.shoppingCard,
};

export const userNavSlice = createSlice({
  name: "userNav",
  initialState,
  reducers: {
    setUserMainDisplay: (state, action: PayloadAction<UserOp>) => {
      state.userPageDis = action.payload;
    },
  },
});

export const { setUserMainDisplay } = userNavSlice.actions;

export const selectUserPageDis = (state: RootState) =>
  state.userPage.userPageDis;

export const userPageReducer = userNavSlice.reducer;
