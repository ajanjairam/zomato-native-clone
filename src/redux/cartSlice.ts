import type { RootState } from "./store";
import type { RestaurantDish } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { cart: RestaurantDish[] } = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<RestaurantDish>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      let newCart = state.cart;
      if (indexToRemove >= 0) newCart.splice(indexToRemove, 1);
      state.cart = newCart;
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

function selectCart(state: RootState) {
  return state.cart.cart;
}
function selectCartWithID(state: RootState, id: number) {
  return state.cart.cart.filter((item) => item.id === id);
}
function selectCartTotal(state: RootState) {
  return state.cart.cart.reduce(
    (total, item) => (total += item.attributes.price),
    0
  );
}

export default cartSlice.reducer;
export {
  addToCart,
  resetCart,
  removeFromCart,
  selectCart,
  selectCartTotal,
  selectCartWithID,
};
