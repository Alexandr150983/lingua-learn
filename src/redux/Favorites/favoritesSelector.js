import { createSelector } from "@reduxjs/toolkit";

const selectFavoritesStore = (state) => state.favorites;

export const selectFavorites = createSelector(
  selectFavoritesStore,
  (state) => state.favorites
);
