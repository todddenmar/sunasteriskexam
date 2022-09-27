import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNewArticle: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    setArticles: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewArticle, setArticles } = counterSlice.actions;

export default counterSlice.reducer;
