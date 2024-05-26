import { createSelector } from "@reduxjs/toolkit";

const selectTeachersStore = (state) => state.teachers;

export const selectTeachersData = createSelector(
  selectTeachersStore,
  (teachers) => teachers.teachersData
);

export const selectTeachersIsLoading = createSelector(
  selectTeachersStore,
  (teachers) => teachers.isLoading
);

export const selectTeachersError = createSelector(
  selectTeachersStore,
  (teachers) => teachers.error
);

export const selectTeachersFilter = createSelector(
  selectTeachersStore,
  (teachers) => teachers.filter
);
