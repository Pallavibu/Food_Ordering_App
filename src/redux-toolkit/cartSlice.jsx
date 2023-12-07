import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      // mutating the state over here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    //originalState = { items :["pizza"]}
    clearCart: (state) => {
      //Redux toolkit says - mutate the existing state or return the new state
      state.items.length = 0; // originalState = []
      //return {items:[]}  // this new [] objectwill be replaced inside originalState = { items : []}
    },
    // we will write reducer function to those corresponding actions
    // we will create actions and function here
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
