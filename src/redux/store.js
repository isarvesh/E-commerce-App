import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import itemsReducer from "./itemsSlice"; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer, 
  },
});

export default store;
