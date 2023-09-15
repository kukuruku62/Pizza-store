// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   arrItemsInCart: [],
//   status: null,
//   error: null,
// };

// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("https://64bd65ed2320b36433c7aff9.mockapi.io/cart");
//       const dataCart = await response.data;
//       return dataCart;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {},
// });

// export default cartSlice.reducer;
