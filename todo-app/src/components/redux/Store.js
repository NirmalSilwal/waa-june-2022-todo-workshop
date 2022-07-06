import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import postReducer from "./PostSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
