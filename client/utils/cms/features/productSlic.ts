import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product } from "../../../graphql/generated";
import { RootState } from "../app/store";

type InitState = {
  products: Product[];
  product: Product | null;
  category: Category | null;
  categories: Category[];
};

const initialState: InitState = {
  products: [],
  product: null,
  categories: [],
  category: null,
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

    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },

    setCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
  },
});

export const { setProduct, setProducts, setCategories, setCategory } =
  productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectProduct = (state: RootState) => state.product.product;
export const selectCategories = (state: RootState) => state.product.categories;
export const selectCategory = (state: RootState) => state.product.category;

export const productReducer = productSlice.reducer;
