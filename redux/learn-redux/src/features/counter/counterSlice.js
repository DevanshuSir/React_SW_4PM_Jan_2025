import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets";

const initialState = {
  value: 0,
  productData: products,
  cart:[]
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
