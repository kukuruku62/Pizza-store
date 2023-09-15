import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slices/cardsSlice";
// import cartReducer from "./slices/cartSlice";
import filterReducer from './slices/filterSlice';


export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    // cart: cartReducer,
    filter: filterReducer,

  },
});

export default store;
