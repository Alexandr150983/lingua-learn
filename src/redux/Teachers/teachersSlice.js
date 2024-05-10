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

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachersData = action.payload;
        state.error = null;
      })
      .addCase(requestTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
