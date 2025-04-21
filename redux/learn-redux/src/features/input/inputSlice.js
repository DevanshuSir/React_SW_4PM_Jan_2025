import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const inputSlice = createSlice({
  name: "Input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;

export default inputSlice.reducer;
