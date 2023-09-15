import { createSlice } from "@reduxjs/toolkit";
// import { fetchCards } from "./cardsSlice";
// СТЕЙТ СОСТОЯНИЙ КНОПОК КАТЕГОРИЙ И ВЫПАДАЮЩЕГО СПИСКИ ФИЛЬТРАЦИИ БЕЗ ОБРАЩЕНИЯ НА СЕРВЕР

const initialState = {
  categoryId: 0,
  sort: "rating",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    //установка класса актив на кнопку из категорий без дальнейшей фильтрации
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    // стейт лишек в выпадающем списке
    setSortBy(state, action) {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setCategoryId, setSortBy } = filterSlice.actions;
