import type { RootState } from "./store";
import type { IDRestaurant } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { restaurant: IDRestaurant | null } = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IDRestaurant>) => {
      state.restaurant = action.payload;
    },
    resetRestaurant: (state) => {
      state.restaurant = null;
    },
  },
});

const { setRestaurant, resetRestaurant } = restaurantSlice.actions;
const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
export { setRestaurant, resetRestaurant, selectRestaurant };
