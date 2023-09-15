import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async (category, { rejectWithValue }) => {
    const { filterForFetchByCategory, filterForFetchByName } = category;

    const CATEGORY_ID = filterForFetchByCategory > 0 ? `category=*${filterForFetchByCategory}` : "";
    const FILTER_ID = filterForFetchByName.length > 0 ? `&name=*${filterForFetchByName}*` : "";

    try {
      const response = await axios.get(
        `https://74ba3dbbf50fde17.mokky.dev/items?${CATEGORY_ID}${FILTER_ID}`
        // `https://64bd65ed2320b36433c7aff9.mockapi.io/items?${CATEGORY_ID}` //mock api filter by only one param
      );

      if (!response.statusText === "OK") {
        //features axious, in fetch case use !response.ok
        throw new Error("Server error!");
      }

      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  arrCards: [],
  status: null,
  error: null,
  filterByCategory: 0,
  filterByName: "",
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    //СОРТИРОВКА ПО ЦЕНЕ и ПОПУЛ-ТИ, ДОБАВИТЬ ИФЫ НА АЛФАВИТ И ПО ВОЗР/УБЫВ
    sortingArrCards(state, action) {
      if (action.payload === "name") {
        state.arrCards.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
      } else {
        state.arrCards.sort((a, b) => a[action.payload] - b[action.payload]);
      }
    },
    filterCategory(state, action) {
      state.filterByCategory = action.payload;
    },
    filterName(state, action) {
      state.filterByName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.status = "resolved";
      state.arrCards = action.payload; // можно добавить сразу сортировку по рейтингу, т.к. в сортбай он при загрузке стоит
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { sortingArrCards, filterCategory, filterName } = cardsSlice.actions;

export default cardsSlice.reducer;
