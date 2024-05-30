import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchTeachersData from "services/databaseService";

export const requestTeachers = createAsyncThunk(
  "teachers/get",
  async (_, thunkAPI) => {
    try {
      const data = await fetchTeachersData();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  teachersData: [],
  isLoading: false,
  error: null,
  filter: {
    language: "",
    level: "",
    price: "",
  },
  languages: [],
  levels: [],
  prices: [],
};

const collectUniqueValues = (teachers) => {
  const languages = [
    ...new Set(teachers.flatMap((teacher) => teacher.languages)),
  ];
  const levels = [...new Set(teachers.flatMap((teacher) => teacher.levels))];
  const prices = [
    ...new Set(teachers.map((teacher) => teacher.price_per_hour)),
  ].sort((a, b) => a - b);

  return { languages, levels, prices };
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachersData = payload;
        state.error = null;

        const { languages, levels, prices } = collectUniqueValues(payload);
        state.languages = languages;
        state.levels = levels;
        state.prices = prices;
      })
      .addCase(requestTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setFilter } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
