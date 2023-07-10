import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const getCitySelect = createAsyncThunk(
  "citySelect/get",
  async ({ regionId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`cities/${regionId}/select`);
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState: any = {
  cityData: [],
  isLoadingCity: false,
};

export const citySlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCitySelect.pending, (state) => {
      state.isLoadingCity = true;
    });
    builder.addCase(getCitySelect.fulfilled, (state, action) => {
      state.cityData = action.payload;
      state.isLoadingCity = false;
    });
    builder.addCase(getCitySelect.rejected, (state) => {
      state.isLoadingCity = false;
    });
  },
});
