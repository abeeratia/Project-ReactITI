import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemCart = state.items.find(
        (product) => product._id === action.payload._id
      );
      console.log("state.items state.items state.items", state.items);

      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log("Cart items now:", JSON.stringify(state.items, null, 2));

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    increment: (state, action) => {
      const itemCart = state.items.find(
        (product) => product._id === action.payload
      );
      itemCart.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrement: (state, action) => {
      const itemCart = state.items.find(
        (product) => product._id === action.payload
      );
      if (itemCart.quantity > 1) {
        itemCart.quantity--;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeCart: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeCart, clearCart , increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
