import { configureStore } from "@reduxjs/toolkit";
import { adminPageReducer } from "../features/adminNavSlic";
import { displayReducer } from "../features/displaySlice";
import { productReducer } from "../features/productSlic";
import { userPageReducer } from "../features/userNavSlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    product: productReducer,
    adminPage: adminPageReducer,
    userPage: userPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
