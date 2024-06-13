import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: {
      reducer(state, action) {
        const teacher = action.payload;
        const exists = state.favorites.some(
          (favoriteTeacher) =>
            favoriteTeacher.name === teacher.name &&
            favoriteTeacher.surname === teacher.surname
        );
        if (!exists) {
          state.favorites.push(teacher);
        }
      },
    },
    removeFavorite(state, action) {
      const teacherId = action.payload;
      state.favorites = state.favorites.filter(
        (favoriteTeacher) =>
          `${favoriteTeacher.name} ${favoriteTeacher.surname}` !== teacherId
      );
    },
    clearFavorite(state) {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
