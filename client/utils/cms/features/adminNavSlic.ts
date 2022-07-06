import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type InitState = {
  adminPageDis: PageDis;
  addProduct: boolean;
  addCategory: boolean;
  updateProduct: boolean;
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
  updateProduct: false,
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
      state.addCategory = true;
    },
    setCloseAddCatModel: (state) => {
      state.addCategory = false;
    },
    setOpenUpdateProductModel: (state) => {
      state.updateProduct = true;
    },
    setCloseUpdateProductModel: (state) => {
      state.updateProduct = false;
    },
  },
});

export const {
  setCloseAddCatModel,
  setCloseAddProductModel,
  setMainDisplay,
  setOpenAddCatModel,
  setOpenAddProductModel,
  setCloseUpdateProductModel,
  setOpenUpdateProductModel,
} = adminNavSlice.actions;

export const selectAdminPageDis = (state: RootState) =>
  state.adminPage.adminPageDis;
export const selectAddProduct = (state: RootState) =>
  state.adminPage.addProduct;
export const selectAddCat = (state: RootState) => state.adminPage.addCategory;
export const selectUpdateProduct = (state: RootState) =>
  state.adminPage.updateProduct;

export const adminPageReducer = adminNavSlice.reducer;
