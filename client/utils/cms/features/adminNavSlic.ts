import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type InitState = {
  adminPageDis: PageDis;
  addProduct: boolean;
  addCategory: boolean;
};

export enum PageDis {
  product = "product",
  category = "category",
  passChange = "passChange",
}

const initialState: InitState = {
  adminPageDis: PageDis.product,
  addProduct: false,
  addCategory: false,
};

export const adminNavSlice = createSlice({
  name: "adminNav",
  initialState,
  reducers: {
    setMainDisplay: (state, action: PayloadAction<PageDis>) => {
      state.adminPageDis = action.payload;
    },
    setOpenAddProductModel: (state) => {
      state.addProduct = true;
    },
    setCloseAddProductModel: (state) => {
      state.addProduct = false;
    },
    setOpenAddCatModel: (state) => {
      state.addProduct = true;
    },
    setCloseAddCatModel: (state) => {
      state.addProduct = false;
    },
  },
});

export const {
  setCloseAddCatModel,
  setCloseAddProductModel,
  setMainDisplay,
  setOpenAddCatModel,
  setOpenAddProductModel,
} = adminNavSlice.actions;

export const selectAdminPageDis = (state: RootState) =>
  state.adminPage.adminPageDis;
export const selectAddProduct = (state: RootState) =>
  state.adminPage.addProduct;
export const selectAddCat = (state: RootState) => state.adminPage.addCategory;

export const adminPageReducer = adminNavSlice.reducer;
