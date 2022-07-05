import { configureStore } from "@reduxjs/toolkit";
import { displayReducer } from "../features/displaySlice";
import { productReducer } from "../features/productSlic";

export const store = configureStore({
  reducer: { display: displayReducer, product: productReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
