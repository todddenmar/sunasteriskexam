import { configureStore } from "@reduxjs/toolkit";
import currentArticlesReducer from "./slices/currentArticlesSlice";

export const store = configureStore({
  reducer: {
    currentArticles: currentArticlesReducer,
  },
});
