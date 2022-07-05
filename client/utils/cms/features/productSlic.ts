import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../graphql/generated";
import { RootState } from "../app/store";

type InitState = {
  products: Product[];
  product: Product | null;
};

const initialState: InitState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Omit<Product[], "reviews">>) => {
      state.products = action.payload;
    },

    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct, setProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectProduct = (state: RootState) => state.product.product;

export const productReducer = productSlice.reducer;
