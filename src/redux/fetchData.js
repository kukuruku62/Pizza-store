// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCards = createAsyncThunk(
//   "cards/fetchCards",
//   async ({category=0, filter=''}, { rejectWithValue }) => {
//     // console.log(category, filter);
//     const CATEGORY_ID = category > 0 ? `category=*${category}` : "";
//     const FILTER_ID = filter.length > 0 ? `&name=${filter}` : "";

//     try {
//       const response = await axios.get(
//         `https://74ba3dbbf50fde17.mokky.dev/items?${CATEGORY_ID}${FILTER_ID}`
//         // `https://64bd65ed2320b36433c7aff9.mockapi.io/items?${CATEGORY_ID}` //mock api filter by only one param
//       );

//       if (!response.statusText === "OK") {
//         //features axious, in fetch case use !response.ok
//         throw new Error("Server error!");
//       }

//       const data = await response.data;
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );