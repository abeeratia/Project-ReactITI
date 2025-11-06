import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    value: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("action.payload", action.payload);
      return state.items.push(action.payload);
    },

    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});
export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
