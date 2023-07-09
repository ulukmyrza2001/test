import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const getRegionSelect = createAsyncThunk(
  "regionSelect/get",
  async ({ countryId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`regions/${countryId}/select`);
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState: any = {
  regionData: [],
  isLoadingRegion: false,
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRegionSelect.pending, (state) => {
      state.isLoadingRegion = true;
    });
    builder.addCase(getRegionSelect.fulfilled, (state, action) => {
      state.regionData = action.payload;
      state.isLoadingRegion = false;
    });
    builder.addCase(getRegionSelect.rejected, (state) => {
      state.isLoadingRegion = false;
    });
  },
});
