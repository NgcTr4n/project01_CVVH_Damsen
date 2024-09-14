// store.ts
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import labelReducer from "../features/labelSlice";

const store = configureStore({
  reducer: {
    labels: labelReducer,
  },
});

// Định nghĩa các kiểu cho dispatch và state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
