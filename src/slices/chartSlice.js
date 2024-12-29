import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const asyncChartData = createAsyncThunk(
  "user/fetchUserData",
  async (_, thunkAPI) => {
    try {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      if (!response.ok) {
        // Throw an error for non-200 responses
        throw new Error("Failed to fetch user data");
      }
      const data = await response.data;
      return data; // This resolves the promise with the payload
    } catch (error) {
      // Optional: Use thunkAPI to reject with a custom error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asyncChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(asyncChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chartSlice.reducer;
