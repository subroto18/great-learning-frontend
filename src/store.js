import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import chartSlice from "./slices/chartSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    chart: chartSlice,
  },
});
